import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
//import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const CheckoutForm = ({ closeModal, classData, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    //generate client secret and save in state
    if (classData?.price) {
      axiosSecure
        .post("/create-payment-intent", { price: classData?.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [classData, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
      if (confirmError) {
        console.log("[error]", confirmError);
        setCardError(confirmError.message);
      }else {
        console.log("[paymentIntent]", paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
          //save payment info in DB
          const paymentInfo = {
            ...classData,
            transactionId: paymentIntent.id,
            date: new Date(),
          };
          //post payment class to DB
          axiosSecure.post('/paymentClass', paymentInfo)
          .then(res=>{
            console.log(res.data);
            if (res.data.result.insertedId) { 
              Swal.fire({
                icon: 'success',
                title: 'Yep...',
                text: 'payment successfully',
              })
                refetch()
                closeModal();
            }
          })
          .catch((err) => {
            console.log(err)
        })
        }
      }
  };

  return (
    <>
      <form className="mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-6 justify-around">
          <button onClick={closeModal} className="btn btn-sm w-40 rounded-3xl">
            {" "}
            cancel
          </button>
          <button
            className="btn btn-sm w-40 rounded-3xl"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay {classData.price}$
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-red-600 text-center mt-4 lg:mt-6">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;

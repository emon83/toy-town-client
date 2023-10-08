/* eslint-disable no-unsafe-optional-chaining */
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useDeleteCartProductMutation, useGetCartProductsQuery, usePaymentProductMutation } from "../../../redux/features/products/productsApi";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartProduct } = useSelector((state) => state.cartProductSlice);
  const {name, email } = useSelector((state) => state.userSlice);
  const { data: cartProducts } = useGetCartProductsQuery(email);
  const [savePaymentProduct] = usePaymentProductMutation();
  const [deleteCartProduct] = useDeleteCartProductMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  let product;
  if (cartProducts) {
    [product] = cartProducts?.filter(
      (product) => product._id === cartProduct.product_id
    );
  }

  const onSubmit = (data) => {
    const productData = {
      ...data,
      product_name: product.name,
      product_img: product.img,
      product_id: product.productId,
      customer_name: product.customer_name,
      date: product.date,
      price: product?.price + 19,
      isPurchase: true,
    }
    //Save product in database
    savePaymentProduct(productData);
    toast.success("Product Purchase successfully")

    //remove product from cart
    deleteCartProduct(product._id);
    navigate('/dashboard/my-cart')
  };

  return (
    <>
    <Toaster/>
      <h4 className="text-2xl text-center my-4 uppercase">Checkout</h4>
      {/* product content */}
      {cartProducts && cartProducts !== undefined && product && (
        <div className="my-10 hidden sm:block">
          <h6 className="text-lg font-semibold uppercase mb-6">Product Info</h6>
          <div className="flex items-center justify-between">
            <RxCross1 className="mt-4 md:ml-2 cursor-pointer text-xl" />
            <div className="flex flex-col items-center">
              <h6 className="text-xl uppercase text-center mb-3">product</h6>
              <div className="flex items-center justify-center gap-6 text-center">
                <img className="w-24 rounded-md" src={product.img} alt="My Product" />
                <p className="text-xl">{product?.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 -mt-8">
              <p className="text-xl uppercase text-center mb-3">price</p>
              <p className="text-center">${product?.price}</p>
            </div>
            <div className="flex flex-col gap-8 -mt-8">
              <p className="text-xl uppercase text-center mb-3">Quantity</p>
              <p className="text-center">1</p>
            </div>
            <div className="flex flex-col gap-8 -mt-8">
              <p className="text-xl uppercase text-center mb-3">Subtotal</p>
              <p className="text-center">${product?.price}</p>
            </div>
          </div>
        </div>
      )}
      <div className="my-10">
        <h6 className="text-lg font-semibold uppercase">Billing & Shipping</h6>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-3">
            <div>
              <label className="text-xs sm:text-sm">Name</label>
              <input defaultValue={name} {...register("userName", { required: true })} />
              {errors.userName && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-xs sm:text-sm">Phone</label>
              <input placeholder="Your Phone" {...register("phone", { required: true })} />
              {errors.phone && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-xs sm:text-sm">Email address </label>
              <input value={email} type="email" {...register("email", { required: true })} />
              {errors.email && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <label className="text-xs sm:text-sm">District</label>
              <input placeholder="Your district" {...register("district", { required: true })} />
              {errors.district && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-xs sm:text-sm">Area</label>
              <input placeholder="Your area" {...register("area", { required: true })} />
              {errors.area && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="text-xs sm:text-sm">Address</label>
              <input
                type="text"
                placeholder="Your details address"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="w-full">
            <label>Order Notes (optional)</label>
            <input
              className="pb-10 italic"
              placeholder="Notes about your order, e.g. special notes for delivery"
              {...register("notes")}
            />
          </div>
          {errors.notes && <span>This field is required</span>}

        {/* Your order part */}
          <>
                <h6 className="text-lg font-semibold uppercase mt-10 mb-2">Your Order</h6>
                <p className="cursor-pointer text-color mb-8">Have Coupon?</p>
                <div className="lg:w-1/2">
                    <h6 className="uppercase text-lg font-semibold mb-4">Choose Shipping Method</h6>
                    <div className="flex items-center justify-between" >
                        <h6 className="uppercase font-semibold mb-3">Product</h6>
                        <h6 className="uppercase font-semibold mb-3">SubTotal</h6>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>{product?.name}</p>
                        <p>${product?.price}</p>
                    </div>
                    <div className="flex items-center justify-between border-b-2 mb-2">
                        <p className="">Shipping Coast</p>
                        <p className="mb-4">$19</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-color uppercase font-semibold">Grand Total</p>
                        <p className="text-color font-semibold">${product?.price + 19}</p>
                    </div>
                </div>
          </>

          <input
            type="submit"
            value="Place Order"
            className="btn btn-sm sm:btn-md btn-color border-none rounded-3xl w-40 mt-10"
          />
        </form>
      </div>
    </>
  );
};

export default Checkout;

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import './UpdateToy.css'

const UpdateToy = ({ control, setControl}) => {
  const toy = useLoaderData();
  
  const {_id, toyName, price, quantity, description} = toy[0]
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //console.log(toy);

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/updateToy/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  setControl(!control);
            }
          console.log(result);
        });  
  };

  return (
    <div className="from-update">
      
          <h3 className="font-bold text-lg text-center">Update toy info!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label className="font-normal text-sm">Toy Name</label>
            <input defaultValue={toyName} {...register("toyName")} />

            {/* register your input into the hook by invoking the "register" function */}
            <label className="font-normal text-sm">Toy Price</label>
            <input defaultValue={price} {...register("price")} />

            {/* include validation with required or other standard HTML validation rules */}
            <label className="font-normal text-sm">Available quantity</label>
            <input defaultValue={quantity} {...register("quantity", { required: true })} />

            {/* include validation with required or other standard HTML validation rules */}
            <label className="font-normal text-sm">Detail description</label>
            <input defaultValue={description} {...register("description", { required: true })} />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

          
          <input className="btn bg-pink-500 hover:bg-pink-600 border-none rounded-3xl text-center text-white btn-block"  type="submit" value="UPDATE A TOY"/>
          </form>
        </div>
  );
};

export default UpdateToy;

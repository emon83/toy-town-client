import { useForm } from "react-hook-form";
import './AddAToy.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/postToys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          Swal.fire({
            icon: 'success',
            title: 'Yep...',
            text: 'Toy added successfully!',
          })
        });
    //console.log(data);
  };
  return (
    <div className="my-container">
        <h2 className="text-5xl primary-font text-center">Add A Toy Section</h2>
        <p className="text-lg secondary-font my-6 text-gray-600 text-center italic">Welcome to Add-A-Toy, your one-stop destination for a world <br /> of play and wonder. Explore our vast collection of toys</p>
        <p></p>
      <div className="from-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Toy Name</label>
              <input className="italic" placeholder="Toy Name" {...register("toyName")} />
            </div>

            <div className="w-full">
              <label>Seller Name</label>
              <input
                className="italic"
                placeholder="Seller Name"
                defaultValue={user?.displayName}
                {...register("sellerName", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Seller Email</label>
              <input type="email" className="italic" value={user?.email} {...register("sellerEmail")} />
            </div>

            <div className="w-full">
              <label>Sub-category</label>
              <input
                className="italic"
                placeholder="Sub-category"
                {...register("subCategory", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Price</label>
              <input className="italic" placeholder="Price" {...register("price")} />
            </div>

            <div className="w-full">
              <label>Rating</label>
              <input
                className="italic"
                placeholder="Rating"
                {...register("rating", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Available quantity</label>
              <input
                className="italic"
                placeholder="Available quantity"
                {...register("quantity", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Picture URL of the toy</label>
              <input
                type="url"
                className="italic"
                placeholder="Picture URL of the toy"
                {...register("PhotoURL")}
              />
            </div>
          </div>
          <div className="w-full">
            <label>Detail description</label>
            <input
              className="pb-10 italic"
              placeholder="Detail description"
              {...register("description")}
            />
          </div>
          {errors.toyName && <span>This field is required</span>}

          <input 
           type="submit"
           value="Add A Toy"
           className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"/>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;

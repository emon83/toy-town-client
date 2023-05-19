import { useForm } from "react-hook-form";
const UpdateToy = ({handleToyUpdate, toy}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl relative">
        <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg text-center">Update toy info!</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label className="font-normal text-sm">Toy Price</label>
            <input defaultValue={toy?.price} {...register("price")} />

            {/* include validation with required or other standard HTML validation rules */}
            <label className="font-normal text-sm">Available quantity</label>
            <input defaultValue={toy?.quantity} {...register("quantity", { required: true })} />

            {/* include validation with required or other standard HTML validation rules */}
            <label className="font-normal text-sm">Detail description</label>
            <input defaultValue={toy?.description} {...register("description", { required: true })} />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

          <div className="text-center">
          <input className="btn bg-pink-500 hover:bg-pink-600 border-none btn-sm rounded-3xl w-20 text-center" onClick={handleToyUpdate} type="submit" />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;

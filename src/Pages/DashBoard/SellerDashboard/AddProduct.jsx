import { useForm } from "react-hook-form";
import { useSaveProductMutation } from "../../../redux/features/products/productsApi";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const { email, name } = useSelector((state) => state.userSlice);
  const [saveProduct] = useSaveProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;
  const onSubmit = (data) => {
    //Image upload
    const formData = new FormData();
    formData.append("image", data.img[0]);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const img = imageData.data.url;

      // Generate a unique SKU number
      const prefix = "PROD"; // You can customize the prefix
      const randomPart = Math.floor(Math.random() * 10000); // Generate a random number (adjust the range as needed)
      const timestampPart = Date.now(); // Get the current timestamp

      // Combine the parts to create the SKU
      const SKU = `${prefix}-${randomPart}-${timestampPart}`;
        //save product to database
        const productData = {
          ...data,
          img,
          seller_email: email,
          details_img: 'https://imgpile.com/images/DxHwxw.jpg',
          SKU,
          status: 'pending',
          reviews: []
        };
        // save product
        saveProduct(productData);
        toast.success('Product saved successfully')
      });
  };

  return (
    <div>
      <Toaster/>
      <h2 className="text-2xl primary-font text-center">Add A Toy Section</h2>
      <p className="text-base secondary-font my-6 text-gray-600 text-center italic">
        Welcome to Add-A-Toy, your one-stop destination for a world <br /> of
        play and wonder. Explore our vast collection of toys
      </p>
      <div className="border-2 p-10 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:flex items-center sm:gap-2 lg:gap-8">
            <div className="w-full">
              <label>Product Name</label>
              <input
                type="text"
                className="italic"
                placeholder="Product Name"
                {...register("product_name")}
              />
            </div>

            <div className="w-full">
              <label className="text-xs sm:text-sm">Product Photo</label>
              <input
                required
                type="file"
                accept="image/*"
                {...register("img")}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Product Category</label>
              <input
                type="text"
                className="italic"
                placeholder="Product Category"
                {...register("product_category", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Quantity</label>
              <input
                type="text"
                className="italic"
                placeholder="Product quantity"
                {...register("quantity", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Tags</label>
              <input
                type="text"
                className="italic"
                placeholder="Tags"
                {...register("tags", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Price</label>
              <input
                type="text"
                className="italic"
                placeholder="Price"
                {...register("price")}
              />
              {errors.price && (
                <span className="text-sky-500 text-xs font-semibold">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Variant</label>
              <input
                type="text"
                className="italic"
                placeholder="Variant"
                {...register("variant", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Color</label>
              <input
                type="text"
                className="italic"
                placeholder="Color"
                {...register("color")}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Material</label>
              <input
                type="text"
                className="italic"
                placeholder="Material"
                {...register("material", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Brand</label>
              <input
                type="text"
                className="italic"
                placeholder="Brand Name"
                {...register("brand")}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Collection</label>
              <input
                type="text"
                className="italic"
                placeholder="Collection Time"
                {...register("collection", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Weight</label>
              <input
                type="text"
                className="italic"
                placeholder="Product Weight"
                {...register("weight")}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Base Type</label>
              <input
                type="text"
                className="italic"
                placeholder="Base Type"
                {...register("base_type")}
              />
            </div>

            <div className="w-full">
              <label>Category</label>
              <input
                required
                type="text"
                placeholder="Category Name"
                {...register("category")}
              />
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="w-full">
              <label>Seller Name</label>
              <input
                type="text"
                className="italic"
                defaultValue={name}
                placeholder="Seller Name"
                {...register("seller", { required: true })}
              />
            </div>

            <div className="w-full">
              <label>Ratings</label>
              <input
                type="text"
                className="italic"
                placeholder="Ratings"
                {...register("rating")}
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
            value="Add A Product"
            className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

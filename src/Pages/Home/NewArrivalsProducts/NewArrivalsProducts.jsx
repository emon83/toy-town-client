import { useGetProductsQuery } from "../../../redux/api/baseApi";
import NewSingleProduct from "./NewSingleProduct";

const NewArrivalsProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const newArrivalsProducts = data?.filter(
    (product) => product.category === "New arrivals"
  );
  // console.log(newArrivalsProducts);
  return (
    <div className="mt-28 my-container text-center">
      <h2 className="text-3xl primary-font">NEW ARRIVALS</h2>
      <p className="text-lg primary-font mt-4 mb-8 text-gray-600">
        Consectetur adipiscing elit ut aliquam duis convalli <br /> tellus id interdum ve.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {newArrivalsProducts?.map((product) => (
          <NewSingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsProducts;
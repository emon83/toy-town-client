import { useGetProductsQuery } from "../../../redux/api/baseApi";
import NewSingleProduct from "./NewSingleProduct";

const NewArrivalsProducts = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  const newArrivalsProducts = data?.filter(
    (product) => product.category === "New arrivals"
  );
  // console.log(newArrivalsProducts);
  return (
    <div className="mt-28 my-container">
      <h2 className="text-5xl font-bold primary-font">NEW ARRIVALS</h2>
      <p className="text-lg secondary-font my-6 text-gray-600">
        Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {newArrivalsProducts?.map((product) => (
          <NewSingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsProducts;

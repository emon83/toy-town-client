import { useGetProductsQuery } from "../../../redux/api/baseApi";
import BestSingleProduct from "./BestSingleProduct";

const BestSellerProduct = () => {
    const {data, isLoading, error} = useGetProductsQuery();
    const bestSellerProducts = data?.filter(product => product.category === 'Best Seller')
    // console.log(bestSellerProducts);
    return (
        <div className="mt-28 my-container">
      <h2 className="text-5xl font-bold primary-font">BEST SELLER PRODUCT</h2>
      <p className="text-lg secondary-font my-6 text-gray-600">
        Consectetur adipiscing elit ut aliquam duis convalli convalli tellus id interdum ve.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {bestSellerProducts?.map((product) => (
          <BestSingleProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
    );
};

export default BestSellerProduct;
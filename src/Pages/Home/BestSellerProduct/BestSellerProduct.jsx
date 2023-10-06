import { useGetProductsQuery } from "../../../redux/features/products/productsApi";
import BestSingleProduct from "./BestSingleProduct";

const BestSellerProduct = () => {
    const {data, isLoading, error} = useGetProductsQuery();
    const bestSellerProducts = data?.filter(product => product.category === 'Best Seller')

    return (
        <div className="mt-28 my-container text-center">
      <h2 className="text-3xl">BEST SELLER PRODUCT</h2>
      <p className="text-lg mt-4 mb-8 text-gray-600">
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
import { Link } from "react-router-dom";

const BestSingleProduct = ({ product }) => {
  return (
    <div className="grid place-items-center border rounded-3xl group shadow-md">
      <Link to={`product-details/${product._id}`}>
        <img
          className="hover:scale-105 duration-[1500ms] rounded-sm"
          src={product.img}
          alt="Product Image"
        />
        <h6 className="uppercase text-sm text-gray-600">
          {product.product_category}S
        </h6>
        <h5 className="text-lg mb-1">{product.product_name}</h5>
        <h6 className="text-gray-600 pb-4 transition-all duration-300  group-hover:hidden">
          ${product.price}
        </h6>
        <div className="my-3">
          <button className="hidden group-hover:block transition-all delay-1000 duration-300 text-center mx-auto btn-color text-white uppercase btn btn-sm border-none">
            Add To Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BestSingleProduct;

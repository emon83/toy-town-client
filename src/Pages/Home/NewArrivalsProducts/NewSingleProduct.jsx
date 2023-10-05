import { Link } from "react-router-dom";

const NewSingleProduct = ({product}) => {
    return (
        <div className="grid place-items-center border rounded-3xl">
            <Link to={`product-details/${product._id}`}>
            <img src={product.img} alt="Product Image" />
            <h6 className="uppercase text-sm text-gray-600">{product.product_category}S</h6>
            <h5 className="text-lg mb-1">{product.product_name}</h5>
            <h6 className="text-gray-600 pb-4">${product.price}</h6>
            </Link>
        </div>
    );
};

export default NewSingleProduct;
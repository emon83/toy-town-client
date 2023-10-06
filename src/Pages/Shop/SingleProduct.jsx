import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {
    return (
        <div className="grid place-items-center border rounded-3xl text-center">
            <Link to={`product-details/${product._id}`}>
            <img src={product.img} alt="" />
            <h6>{product.product_category}</h6>
            <h5>{product.product_name}</h5>
            <h6>${product.price}</h6>
            </Link>
        </div>
    );
};

export default SingleProduct;
const SingleProduct = ({product}) => {
    return (
        <div className="grid place-items-center border rounded-3xl">
            <img src={product.img} alt="" />
            <h6>{product.product_category}</h6>
            <h5>{product.product_name}</h5>
            <h6>{product.price}</h6>
        </div>
    );
};

export default SingleProduct;
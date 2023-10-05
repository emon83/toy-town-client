const ProductInformation = ({productData}) => {
    return (
        <div className="md:flex items-center w-full border-2 rounded-3xl my-4 gap-10">
            <div className="sm:flex items-center gap-10">
                <p className="flex items-center justify-between">
                    <span>Categories:</span>
                    <span>{productData.product_category}</span>
                </p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductInformation;
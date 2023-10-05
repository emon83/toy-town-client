import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../../redux/api/baseApi";
import ProductDescription from "./ProductDescription";
import ProductInformation from "./ProductInformation";
import ProductReview from "./ProductReview";
import { useState } from "react";

const ProductDetails = () => {
  const [activeComponent, setActiveComponent] = useState("ProductDescription"); //by default component uses active component
  const { id } = useParams();
  const { data: productData, isLoading, error } = useGetProductsByIdQuery(id);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className="md:flex items-center gap-10">
        <div className="">
          <img src={productData?.img} alt="" />
        </div>
        <div>
          <h2>{productData?.product_name}</h2>
          <h4>${productData?.price}</h4>
          <p>{productData?.description}</p>
          <button className="btn btn-sm">Add To Cart</button>

          <div className="flex items-center gap-1">
            <p>love</p>
            <p>Add To Wishlist</p>
          </div>
          <h6>SKU: {productData?.SKU}</h6>
          <h6>Category: {productData?.product_category}</h6>
          <div className="flex items-center gap-1">
            <p>Tags:</p>
            <div className="flex items-center gap-1">
              {productData?.tags.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => handleButtonClick("ProductDescription")}>
            Description
          </button>
          <button onClick={() => handleButtonClick("ProductInformation")}>
            Additional Information
          </button>
          <button onClick={() => handleButtonClick("ProductReview")}>
            Review
          </button>
        </div>

        <div>
          {activeComponent === "ProductDescription" && (
            <ProductDescription productData={productData} />
          )}
          {activeComponent === "ProductInformation" && (
            <ProductInformation productData={productData} />
          )}
          {activeComponent === "ProductReview" && (
            <ProductReview productData={productData} />
          )}
        </div>
      </div>

      <div>

      </div>
    </>
  );
};

export default ProductDetails;

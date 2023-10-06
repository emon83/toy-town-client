import { useNavigate, useParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import ProductInformation from "./ProductInformation";
import ProductReview from "./ProductReview";
import { useState } from "react";
import SingleRelatedProduct from "./SingleRelatedProduct";
import {
  useGetProductsByCategoryQuery,
  useGetProductsByIdQuery,
  useSaveCartProductMutation,
} from "../../redux/features/products/productsApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const [activeComponent, setActiveComponent] = useState("ProductDescription"); //by default component uses active component
  const { id } = useParams();
  const {
    email: customer_email,
    photoURL: customer_img,
    name: customer_name,
  } = useSelector((state) => state.userSlice);
  const { data: productData, isLoading, error } = useGetProductsByIdQuery(id);
  const [saveCartProduct, { data }] = useSaveCartProductMutation();
  const { data: products } = useGetProductsByCategoryQuery(
    productData?.product_category
  );
  const navigate = useNavigate();

  const relatedProducts = products?.filter(
    (product) => product._id !== productData._id
  );

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const saveCartProductToDb = (productData) => {
    const product = {
      productId: productData._id,
      customer_name,
      customer_email,
      customer_img,
      name: productData.product_name,
      img: productData.img,
      product_category: productData.product_category,
      price: productData.price,
      quantity: 1,
      seller: productData.seller,
      availableQuantity: productData.quantity - 1,
      date: new Date(),
      color: productData.color,
      isPurchase: false,
    };
    
    // Save cart product to database
    saveCartProduct(product);
    toast.success("Product add to cart successfully");
    navigate("/");
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

          <button
            onClick={() => saveCartProductToDb(productData)}
            className="btn btn-sm"
          >
            Add To Cart
          </button>

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

      <div className="my-10">
        <h4 className="text-2xl my-6 text-center">RELATED PRODUCTS</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
          {relatedProducts &&
            relatedProducts.length > 0 &&
            relatedProducts.map((product) => (
              <SingleRelatedProduct key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

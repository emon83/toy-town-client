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
import { AiFillHeart } from "react-icons/ai";
import useTitle from "../../hooks/useTitle";

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

  // Use tile by custom useTitle Hook
  useTitle(`Product-Details-${productData?._id}`);

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
    <div className="my-container mb-10">
      <div className="md:flex items-center gap-10">
        <div className="md:w-[45%]">
          <img className="" src={productData?.img} alt="Product Image" />
        </div>
        <div className="md:w-[55%]">
          <h2 className="text-4xl font-medium">{productData?.product_name}</h2>
          <h4 className="text-2xl my-2">${productData?.price}</h4>
          <p className="text-gray-600">{productData?.description}</p>

          <button
            onClick={() => saveCartProductToDb(productData)}
            className="btn btn-sm btn-color border-none mt-4"
          >
            Add To Cart
          </button>

          <div className="flex items-center gap-1 my-5">
            <AiFillHeart className="text-sky-500 text-xl" />
            <p className="text-sm uppercase">Add To Wishlist</p>
          </div>
          <h6 className="uppercase">SKU: {productData?.SKU}</h6>
          <h6 className="my-1">Category: {productData?.product_category}</h6>
          <div className="flex items-center gap-1">
            <p>Tags:</p>
            <div className="flex items-center gap-1">
              {productData?.tags.map((item, index) => (
                <p
                  className="py-1 px-3 border rounded-sm text-sm uppercase"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-10">
        <div className="flex items-center justify-center gap-8">
          <button
            className="text-xl font-semibold"
            onClick={() => handleButtonClick("ProductDescription")}
          >
            Description
          </button>
          <button
            className="text-xl font-semibold"
            onClick={() => handleButtonClick("ProductInformation")}
          >
            Additional Information
          </button>
          <button
            className="text-xl font-semibold"
            onClick={() => handleButtonClick("ProductReview")}
          >
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
    </div>
  );
};

export default ProductDetails;

import { useState } from "react";
import { useGetProductsByCategoryQuery } from "../../redux/api/baseApi";
import SingleProduct from "./SingleProduct";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Bed"); // Default category
  const {
    data: productData,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(selectedCategory);

  const categoryList = [
    "Bed",
    "Carriage",
    "Wood Toys",
    "Accessories",
    "Baby Equipment",
    "For Home",
    "Soft Toy",
    "Educational Toy",
    "Others",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="md:flex items-start gap-10 my-container">
      <div className="md:w-[312px] text-center">
        <h6 className="">Categories</h6>
        <div className="flex flex-col">
          {categoryList?.map((item, index) => (
            <button key={index} onClick={() => handleCategoryClick(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData &&
          productData.length > 0 &&
          productData?.map((product) => (
            <SingleProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

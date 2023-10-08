import { useState } from "react";
import SingleProduct from "./SingleProduct";
import { useGetProductsByCategoryQuery } from "../../redux/features/products/productsApi";

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
    <div className="md:flex items-start gap-10 my-container my-10 px-6 sm:px-10 md:px-0">
      <div className="md:w-[260px] text-center">
        <h6 className="text-xl uppercase">Categories</h6>
        <div className="flex flex-col">
          {categoryList?.map((item, index) => (
            <div className="my-2" key={index}>
              <button className="uppercase bg-gray-100 p-1 rounded-md w-full" onClick={() => handleCategoryClick(item)}>
              {item}
            </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-0">
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

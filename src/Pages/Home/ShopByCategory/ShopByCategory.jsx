import { useEffect, useState } from "react";
import "./ShopByCategory.css";

const ShopByCategory = () => {
    const [products, setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/categoryProducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log(products);
  return (
    <div className="mt-28 my-container">
      <div className="text-center">
      <h2 className="text-5xl font-bold primary-font">Shop by category</h2>
      <p className="text-lg secondary-font my-6 text-gray-600">
        We’ve picked few pieces we’re pretty sure you’ll love. <br />
        Check back often and enjoy.
      </p>
      </div>
    </div>
  );
};

export default ShopByCategory;

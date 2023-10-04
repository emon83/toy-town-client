// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import img1 from "../../../assets/category-img/product-category-01.png";
import img2 from "../../../assets/category-img/Product-Category-02.png";
import img3 from "../../../assets/category-img/Product-Category-03.png";
import img4 from "../../../assets/category-img/product-category-04.png";
import img5 from "../../../assets/category-img/product-category-05.png";
import img6 from "../../../assets/category-img/product-category-06.png";
import img7 from "../../../assets/category-img/Product-Category-07.png";
import img8 from "../../../assets/category-img/product-category-08.png";
import img9 from "../../../assets/category-img/product-category-09.jpg";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const categoryData = [
    {
      img: img1,
      c_name: "Bed",
    },
    {
      img: img2,
      c_name: "Carriage",
    },
    {
      img: img3,
      c_name: "Wood Toy",
    },
    {
      img: img4,
      c_name: "Accessories",
    },
    {
      img: img5,
      c_name: "Baby Equipment",
    },
    {
      img: img6,
      c_name: "For Home",
    },
    {
      img: img7,
      c_name: "Soft Toys",
    },
    {
      img: img8,
      c_name: "Educational Toy",
    },
    {
      img: img9,
      c_name: "Others",
    },
  ];
  return (
    <div className="my-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={8}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {categoryData &&
          categoryData.map((category, index) => (
            <SwiperSlide key={index}>
              <Link to="/shop">
                <div className="grid place-items-center cursor-pointer">
                  <img src={category.img} alt="" />
                  <p>{category.c_name}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CategorySection;

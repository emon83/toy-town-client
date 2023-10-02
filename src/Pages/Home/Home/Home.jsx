import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import GallerySection from "../GallerySection/GallerySection";
import GirlsCollection from "../GirlsCollection/GirlsCollection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <GallerySection />
      <ShopByCategory />
      <GirlsCollection />
      <BlogSection />
    </>
  );
};

export default Home;

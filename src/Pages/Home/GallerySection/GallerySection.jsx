import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GallerySection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-28 my-container">
      <div className="text-center">
        <h2 className="text-5xl font-bold primary-font">Gallery Section</h2>
        <h6 className="text-lg secondary-font my-6 text-gray-600">
          We’ve picked few pieces we’re pretty sure you’ll love. <br />
          Check back often and enjoy.
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/vcg4YHz/pair-robots.png"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Robotics Workshop</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/Mnx5gBb/baby-prod20-1-390x439.jpg"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Baby Pord</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/L6Kc7x4/robot-with-red-balls.jpg"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Maccano Rc Roadsfer</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/pd175Cx/kids-calculoter.jpg"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Kids Calculator</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/bd9bqmw/toy-abacus-clock.jpg"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Toy Abacus Clock</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/K2frnMD/kids-educational.png"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Engineer Kit</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/SXyQd43/blocks-toy.png"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Blocks Toy</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/7W2pyJd/robot-track.jpg"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Robots Track</h4>
        </div>
        <div className="p-5 text-center" data-aos="fade-up">
          <img
            className="w-full lg:w-[370px] lg:h-[370px]"
            src="https://i.ibb.co/zWgQK4H/Cars-Robot-Building.jpg"
            alt=""
          />
          <h4 className="secondary-text text-lg font-bold mt-4">Cars Robot Building</h4>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;

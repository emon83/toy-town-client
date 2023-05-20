import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const GallerySection = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(()=> {
    fetch('https://toy-town-server-ashen.vercel.app/galleryData')
    .then(res => res.json())
    .then(data => setGalleryData(data))
  }, [])
  return (
    <div className="mt-28 my-container">
      <div className="text-center">
        <h2 className="text-5xl font-bold primary-font">Gallery Section</h2>
        <h6 className="text-lg secondary-font my-6 text-gray-600">
          We’ve picked few pieces we’re pretty sure you’ll love. <br />
          Check back often and enjoy.
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
        
        {
          galleryData.map(data=> (
            <div key={data._id} className="text-center p-4 lg:p-2" data-aos="fade-up">
          <img
            className="w-full lg:w-[470px] lg:h-[280px]"
            src={data.image}
            alt=""
          />
          <h4 className="secondary-text text-lg font-semibold mt-4">{data.title}</h4>
          <p className="text-cyan-500">${data.price}</p>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default GallerySection;

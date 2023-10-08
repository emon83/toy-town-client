import { CgDanger } from "react-icons/cg";
import { FaHandsWash } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
import { TbIroningOff } from "react-icons/tb";

const ProductDescription = ({ productData }) => {
  return (
    <div className="md:flex items-center w-full border-2 rounded-3xl my-4 gap-16 p-8">
      <div className="w-full md:w-1/2">
        <h4 className="text-xl uppercase font-semibold">Details</h4>
        <p className="mt-4">{productData?.description}</p>
        <p>
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
        </p>
        <h4 className="text-xl uppercase font-semibold mt-4">Care Instruction</h4>
        <p>
          We don’t like to label, but this one comes in handy. Follow the
          instructions on the label before you wash this product or give it to
          your mom – she knows how to do it.
        </p>
        <div>
          <div className="flex items-center gap-4 my-2">
            <CgDanger className="w-8 h-8" />
            <FaHandsWash className="w-8 h-8" />
            <MdEmojiTransportation className="w-8 h-8" />
            <TbIroningOff className="w-8 h-8" />
          </div>
          <p className="mt-4">
            <span className="font-semibold">Composition: </span>Our toy shop website is a treasure trove
            of playtime wonders, carefully curated to inspire and delight. From
            classic toys that have stood the test of time to the latest
            cutting-edge innovations, we offer a diverse range of products that
            cater to every age, interest, and imagination.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={productData?.details_img} alt="" />
      </div>
    </div>
  );
};

export default ProductDescription;

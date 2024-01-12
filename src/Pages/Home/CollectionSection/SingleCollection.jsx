import { Link } from "react-router-dom";

const SingleCollection = ({ collection }) => {
  return (
    <div className="px-4 lg:px-0 mt-12 sm:mt-16 md:mt-0">
      <img
        className="md:h-[564px] hover:scale-105 duration-[1500ms]"
        src={collection.img}
        alt="Collection Image"
      />
      <h5 className="text-xl md:text-[22px] mt-4 mb-2">{collection.title}</h5>
      <p className="text-gray-600 mb-4">{collection.subtitle}</p>
      <Link to="/shop">
        <button className="btn btn-sm btn-color border-none">
          View Collection
        </button>
      </Link>
    </div>
  );
};

export default SingleCollection;

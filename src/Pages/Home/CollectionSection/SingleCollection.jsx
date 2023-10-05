const SingleCollection = ({collection}) => {
    return (
        <div className="w-full">
            <img className="md:h-[564px]" src={collection.img} alt="" />
            <h5 className="text-xl my-2">{collection.title}</h5>
            <p className="text-gray-600 mb-4">{collection.subtitle}</p>
            <button className="btn btn-sm">View Collection</button>
        </div>
    );
};

export default SingleCollection;
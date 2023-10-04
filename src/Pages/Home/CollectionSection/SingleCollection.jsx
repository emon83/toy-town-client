const SingleCollection = ({collection}) => {
    return (
        <div>
            <img src={collection.img} alt="" />
            <h5>{collection.title}</h5>
            <p>{collection.subtitle}</p>
        </div>
    );
};

export default SingleCollection;
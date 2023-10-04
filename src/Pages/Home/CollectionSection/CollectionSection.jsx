import img1 from "../../../assets/collection-img/h1-img-4.jpg";
import img2 from "../../../assets/collection-img/h1-img-5.jpg";
import SingleCollection from "./SingleCollection";

const collectionData = [
  {
    id: 0,
    img: img1,
    title: "Best baby environment setting",
    subtitle: "Metus aliquam eleifend mi in nulla cras sedo fel.",
  },
  {
    id: 2,
    img: img2,
    title: "Make a dreamy nursery",
    subtitle: "Convallis a cras semper auctor neque vita teme.",
  },
];

const CollectionSection = () => {
  return (
    <div className="mt-28 my-container">
      <div className="md:flex items-center gap-10">
        {collectionData &&
          collectionData.length > 0 &&
          collectionData?.map((collection) => (
            <SingleCollection key={collection.id} collection={collection} />
          ))}
      </div>
    </div>
  );
};

export default CollectionSection;

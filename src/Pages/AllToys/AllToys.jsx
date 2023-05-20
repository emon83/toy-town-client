import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);
   const [ isActive, setIsActive] = useState(false)
  useTitle("All Toys");

  const handleShowAll = ()=> {
    setShowAll(true);
}

  useEffect(() => {
    fetch("https://toy-town-server-ashen.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-town-server-ashen.vercel.app/allToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  };
   useEffect(() =>{
    if (allToys.length > 20) {
      setIsActive(true);
     }
   }, [allToys])
  return (
    <div className="my-container mb-10">
      <h2 className="text-5xl primary-font text-center mb-8">All Toys Page</h2>
      <div className="form-control w-1/2 mx-auto">
        <label className="input-group input-group-md flex items-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="search by toy name..."
            className="input input-bordered input-md"
          />
          <span onClick={handleSearch} className="btn bg-pink-500 hover:bg-pink-600 border-none rounded-3xl text-center -mt-2">Search</span>
        </label>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys &&
              allToys.slice(0, showAll ? allToys.length + 1 : 20).map((toy, index) => (
                <tr key={toy._id} className="hover">
                  <th>{index + 1}</th>
                  <th>{toy.sellerName}</th>
                  <th>{toy.toyName}</th>
                  <th>{toy.subCategory}</th>
                  <th>${toy.price}</th>
                  <th>{toy.quantity}</th>
                  <th>
                    <Link to={`/toy/${toy._id}`}>
                      <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4 -ml-4">
                        Details
                      </button>
                    </Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="text-center my-4">
      {
            !showAll && (
                <span onClick={handleShowAll}>
                <div className={isActive ? 'block' : 'hidden'}>
                <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm  px-4">See More</button>
                </div>
                </span>
            )
        }
      </div>
    </div>
  );
};

export default AllToys;

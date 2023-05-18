import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);
  //console.log(allToys);
  return (
    <div className="my-container">
      <h2 className="text-5xl primary-font text-center mb-8">All Toys Page</h2>
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
            allToys.map((toy, index) => (
              <tr key={toy._id} className="hover">
                <th>{index+1}</th>
                <th>{toy.sellerName}</th>
                <th>{toy.toyName}</th>
                <th>{toy.subCategory}</th>
                <th>{toy.price}</th>
                <th>{toy.quantity}</th>
                <th>
                <Link to={`/toyDetails/${toy._id}`}>
                <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4 -ml-4">Details</button></Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

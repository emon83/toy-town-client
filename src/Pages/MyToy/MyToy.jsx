import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from 'react-icons/ri';

const MyToy = () => {
    const { user } = useContext(AuthContext);

    const [toysData, setToysData] = useState();
    useEffect(()=> {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToysData(data)
        })
    }, [user])
    console.log(toysData);
    return (
        <div className="my-container">
      <h2 className="text-5xl primary-font text-center mb-8">My Toys Page</h2>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toysData &&
            toysData.map((toy, index) => (
              <tr key={toy._id} className="hover">
                <th>{index+1}</th>
                <th>{toy.sellerName}</th>
                <th>{toy.toyName}</th>
                <th>{toy.subCategory}</th>
                <th>{toy.price}</th>
                <th>{toy.quantity}</th>
                <th>
                <Link to={`/toyDetails/${toy._id}`}>
                <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">Edit</button></Link>
                </th>
                <th>
                 <RiDeleteBin5Line className="w-6 h-6 text-pink-600 ml-2"/>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyToy;
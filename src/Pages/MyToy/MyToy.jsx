import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { RiDeleteBin5Line } from "react-icons/ri";
import UpdateToy from "../UpdateToy/UpdateToy";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toysData, setToysData] = useState();
  const [control, setControl] = useState(false);
  useTitle("My Toys");

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToysData(data);
      });
  }, [user, control]);
  console.log(toysData);

 /*  const handleToyUpdate = (id, toysData) => {
    fetch(`http://localhost:5000/myToy/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toysData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          //setControl(!control);
          alert("updated toy");
        }
        console.log(result);
      });
  }; */

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      fetch(`http://localhost:5000/myToy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your coffee has been deleted.',
              'success'
            )
            const remaining = toysData.filter((toy) => toy._id !== id);
            setToysData(remaining);
          }
        })
      }
    });

  };

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
                  <th>{index + 1}</th>
                  <th>{toy.sellerName}</th>
                  <th>{toy.toyName}</th>
                  <th>{toy.subCategory}</th>
                  <th>{toy.price}</th>
                  <th>{toy.quantity}</th>
                  <th>
                    
                    <label htmlFor="my-modal-5" className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">
                Edit</label>
                <UpdateToy toy={toy} control={control} setControl={setControl}/>
                  </th>
                  <th>
                    <button onClick={() => handleDelete(toy._id)}>
                      <RiDeleteBin5Line className="w-6 h-6 text-pink-600 ml-2" />
                    </button>
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

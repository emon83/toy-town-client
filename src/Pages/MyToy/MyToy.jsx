import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyToy = () => {
  const { email } = useSelector((state) => state.userSlice);
  const [toysData, setToysData] = useState();
  const [control, setControl] = useState(false);
  const [sortOrder, setSortOrder] = useState(true);
  useTitle("My Toys");

  useEffect(() => {
    fetch(`https://toy-town-server-ashen.vercel.app/myToys/${email}`)
      .then((res) => res.json())
      .then((data) => {
        const sortedProducts = data.sort((a, b) => {
          // Sort by price based on sort order
          return sortOrder === 'asc' ? b.price - a.price : a.price - b.price;
        });
        setToysData(sortedProducts);
      });
  }, [control, email, sortOrder]);
  //console.log(toysData);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

 /*  const handleToyUpdate = (id, toysData) => {
    fetch(`https://toy-town-server-ashen.vercel.app/myToy/${id}`, {
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
      fetch(`https://toy-town-server-ashen.vercel.app/myToy/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Deleted!',
              'Your toy has been deleted.',
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
    <div className="my-container mb-20">
      <h2 className="text-5xl primary-font text-center mb-8">My Toys Page</h2>
      <div className="flex items-center justify-center gap-2 mb-4">
        <p className="font-bold">Sort By Price:</p>
      <select value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
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
                  <th>$ {toy.price}</th>
                  <th>{toy.quantity}</th>
                  <th>
                    
                    <Link to={`${toy._id}`}>
                    <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">
                Edit</button>
                    </Link>
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

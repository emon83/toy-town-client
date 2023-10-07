import { useSelector } from "react-redux";
import { useGetProductsByEmailQuery } from "../../../redux/features/products/productsApi";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyProduct = () => {
  const { email } = useSelector((state) => state.userSlice);
  const {
    data: myProducts,
    isLoading,
    error,
  } = useGetProductsByEmailQuery(email);

  console.log(myProducts);
  console.log(email);
  return (
    <>
      <h6 className="text-2xl text-center my-4 uppercase">My Product</h6>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts &&
              myProducts.length > 0 &&
              myProducts.map((product, index) => (
                <tr className="text-center" key={index}>
                  <th>{index + 1}</th>
                  <td>{product?.product_name}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product?.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product?.product_category}</td>
                  <td>${product?.price}</td>
                  <td>{product?.quantity}</td>
                  <td>
                    {product?.status === "pending" ? "pending" : "approved"}
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <button className="btn btn-xs">Delete</button>
                      <button className="btn btn-xs">Update</button>
                    </div>
                  </td>
                  <td>
                    <button>
                      <RiDeleteBin6Line className="text-red-500 w-5 h-5 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProduct;

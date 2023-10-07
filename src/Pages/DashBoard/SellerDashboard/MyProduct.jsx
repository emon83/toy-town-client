import { useSelector } from "react-redux";
import { useDeleteProductMutation, useGetProductsByEmailQuery } from "../../../redux/features/products/productsApi";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import UpdateProductModal from "../../../components/Dashboard/UpdateProduct/UpdateProductModal";

const MyProduct = () => {
  const { email } = useSelector((state) => state.userSlice);
  const {
    data: myProducts,
    isLoading,
    error,
  } = useGetProductsByEmailQuery(email);
  const [deleteProduct] = useDeleteProductMutation();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
      setIsOpen(false);
    };

  const handleDeleteProduct =(productId)=> {
    deleteProduct(productId);
    toast.success("Product deleted successfully")
  }

  console.log(myProducts);
  return (
    <>
    <Toaster/>
      <h6 className="text-2xl text-center my-4 uppercase">My Product</h6>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Product Image</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts &&
              myProducts.length > 0 &&
              myProducts.map((product, index) => (
                <tr className="text-center" key={index}>
                  <th>{index + 1}</th>
                  <td>{product?.product_name}</td>
                  <td>{product?.seller}</td>
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
                  <td>{product?.category}</td>
                  <td>${product?.price}</td>
                  <td>{product?.quantity}</td>
                  <td>
                    {product?.status === "pending" ? "pending" : "approved"}
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <button onClick={()=> handleDeleteProduct(product._id)} className="btn btn-xs">Delete</button>
                      <button onClick={() => setIsOpen(true)} className="btn btn-xs">Update</button>
                      {/* Update Modal Here */}
                      <UpdateProductModal product={product} isOpen={isOpen} closeModal={closeModal}/>
                    </div>
                  </td>
                  <td>
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

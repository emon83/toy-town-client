import toast, { Toaster } from "react-hot-toast";
import { useDeleteProductMutation, useGetProductsQuery } from "../../../redux/features/products/productsApi";


const ManageProduct = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct =(productId)=> {
    deleteProduct(productId);
    toast.success("Product deleted successfully")
  }

  return (
    <div>
      <Toaster/>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>product Image</th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
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
                <td>{product.product_name}</td>
                <td>{product?.seller}</td>
                <td>{product?.seller_email}</td>
                <td>{product?.quantity}</td>
                <td>{product?.price}</td>
                <td>{product?.status === 'pending' ? 'pending' : 'approved'}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <button className="btn btn-xs">Approved</button>
                    <button onClick={()=> handleDeleteProduct(product._id)} className="btn btn-xs">Delete</button>
                    <button className="btn btn-xs">Update</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;

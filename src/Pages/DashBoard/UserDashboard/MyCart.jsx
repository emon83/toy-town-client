import { useDispatch, useSelector } from "react-redux";
import { useDeleteCartProductMutation, useGetCartProductsQuery } from "../../../redux/features/products/productsApi";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../redux/features/products/productSlice";
import toast, { Toaster } from "react-hot-toast";

const MyCart = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.userSlice);
  const [deleteCartProduct] = useDeleteCartProductMutation();
  const {
    data: cartProduct,
    isLoading,
    error,
  } = useGetCartProductsQuery(email);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({ product_id: product._id })
    );
    // localStorage.setItem('product_id', product._id);
  };

  const handleRemoveFromCart = (product) => {
     //dispatch(removeFromCart(productId));
    // remove from cart to db
    //Todo: remove from cart not working properly
    deleteCartProduct(product._id);
    console.log(product);
    toast.success('Product removed successfully')
  };

  return (
    <div>
      <Toaster/>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Seller name</th>
              <th>Available Quantity</th>
              <th>Action</th>
              <th>Pay</th>
            </tr>
          </thead>
          {/*Table Body Data*/}
          <tbody>
            {cartProduct &&
              cartProduct.length > 0 &&
              cartProduct.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product?.img} alt="Product Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product?.name}</td>
                  <td>{product?.seller}</td>
                  <td className="text-center">{product?.availableQuantity}</td>
                  <td>
                    <button onClick={() => handleRemoveFromCart(product)} className="btn btn-xs">Delete</button>
                  </td>
                  <td>
                    <Link to="/dashboard/checkout">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-xs"
                      >
                        ${product?.price} TK
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

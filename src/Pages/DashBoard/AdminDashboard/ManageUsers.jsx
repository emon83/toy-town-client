import { RiDeleteBin6Line } from "react-icons/ri";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useMakeSellerMutation,
  useMakeUserMutation,
} from "../../../redux/features/user/userApi";
import toast, { Toaster } from "react-hot-toast";

const ManageUsers = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [makeSeller] = useMakeSellerMutation();
  const [makeAdmin] = useMakeSellerMutation();
  const [makeUser] = useMakeUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleMakeAdmin = (user) => {
    makeAdmin(user._id);
    toast.success("This User make Admin successfully!");
  };

  const handleMakeSeller = (user) => {
    makeSeller(user._id);
    toast.success("This User make Seller successfully!");
  };

  const handleMakeUser = (user) => {
    makeUser(user._id);
    toast.success("This User make User successfully!");
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
    toast.success("This User delete successfully!");
  };

  return (
    <>
      <Toaster />
      {error && <p className="text-red-500 mt-[35vh]">{error.message}</p>}
      {users && users?.length > 0 && Array.isArray(users) && (
        <div className="overflow-x-auto">
          <table className="table w-[100%]">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td className="capitalize">{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role === "admin"
                      ? "Admin"
                      : user.role === "seller"
                      ? "Seller"
                      : "User"}
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-xs btn-color border-none"
                        disabled={user.role === "admin"}
                      >
                        Admin
                      </button>
                      <button
                        onClick={() => handleMakeSeller(user)}
                        className="btn btn-xs btn-color border-none"
                        disabled={
                          user.role === "seller" || user.role === "admin"
                        }
                      >
                        Seller
                      </button>
                      <button
                        onClick={() => handleMakeUser(user)}
                        className="btn btn-xs btn-color border-none"
                        disabled={
                          user.role === "user" ||
                          !user.role ||
                          user.role === "admin"
                        }
                      >
                        User
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      disabled={user.role === "admin"}
                      className={`${
                        user.role === "admin"
                          ? "text-gray-300"
                          : "text-[#22889c]"
                      }`}
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <RiDeleteBin6Line className=" w-6 h-5 mx-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ManageUsers;

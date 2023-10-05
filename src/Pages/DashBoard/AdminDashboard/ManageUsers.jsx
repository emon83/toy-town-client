import { RiDeleteBin6Line } from "react-icons/ri";
import { useGetUsersQuery } from "../../../redux/api/baseApi";

const ManageUsers = () => {
    const {data:users, isLoading, error} = useGetUsersQuery();

    const handleMakeAdmin = (user) => { 
        console.log(user);
    }

    const handleMakeSeller = (user) => {
        console.log(user);
    }

    return (
        <>
            <div className="overflow-x-auto">
        <table className="table">
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
                      className="btn btn-xs"
                      disabled={user.role === "admin"}
                    >
                      Admin
                    </button>
                    <button
                      onClick={() => handleMakeSeller(user)}
                      className="btn btn-xs"
                      disabled={user.role === "seller"}
                    >
                      Seller
                    </button>
                  </div>
                </td>
                <td>
                    <RiDeleteBin6Line className="text-red-500 w-8 mx-auto"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default ManageUsers;
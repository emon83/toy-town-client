import { NavLink } from "react-router-dom";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";

const SellerSidebar = () => {
  return (
    <nav>
      {/* Menu Links */}
      <NavLink
        to="add-class"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <AiOutlineVideoCameraAdd className="w-5 h-5" />

        <span className="mx-4 font-medium">Add a Toy</span>
      </NavLink>
      <NavLink
        to="my-class"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <GiTeacher className="w-5 h-5" />

        <span className="mx-4 font-medium">My Toy</span>
      </NavLink>
    </nav>
  );
};

export default SellerSidebar;

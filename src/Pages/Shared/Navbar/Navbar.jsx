import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="my-container py-5 px-4  mx-auto">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="ToyTown"
          title="ToyTown"
          className="inline-flex items-center"
        >
          <div className="flex items-center justify-center w-40 h-28">
            <img className="w-40" src={logo} alt="" />
          </div>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allToys"
              aria-label="All Toys"
              title="All Toys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              aria-label="Blogs"
              title="Blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blogs
            </NavLink>
          </li>
          {user?.email ? (
            <>
              <li>
                <NavLink
                  to="/myToy"
                  aria-label="My Toys"
                  title="My Toys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addAToy"
                  aria-label="Add A Toy"
                  title="Add A Toy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
              <li>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar -mx-4">
                  <div className="w-10 rounded-full">
                    <img title={user?.displayName} src={user?.photoURL} />
                  </div>
                </label>
              </li>
              <li>
                <Link aria-label="Logout" title="Logout">
                  <button
                    onClick={handleLogout}
                    className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6"
                  >
                    Logout
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" aria-label="Login" title="Login">
                <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="ToyTown"
                      title="ToyTown"
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-center w-20 h-16">
                        <img className="w-20" src={logo} alt="" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/allToys"
                        aria-label="All Toys"
                        title="All Toys"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        All Toys
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    {user?.email ? (
                      <>
                        <li>
                          <Link
                            to="/myToy"
                            aria-label="My Toys"
                            title="My Toys"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My Toys
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/addAToy"
                            aria-label="Add A Toy"
                            title="Add A Toy"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Add A Toy
                          </Link>
                        </li>
                        <li>
                          <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                          >
                            <div className="w-10 rounded-full">
                              <img
                                title={user?.displayName}
                                src={user?.photoURL}
                              />
                            </div>
                          </label>
                        </li>
                        <li>
                          <Link
                            aria-label="Logout"
                            title="Logout"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6 -ml-2">
                              Logout
                            </button>
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link
                          to="/login"
                          aria-label="Login"
                          title="Login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6 -ml-2">
                            Login
                          </button>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import AddAToy from "../Pages/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/allToys',
            element: <AllToys/>,
        },
        {
            path: '/blog',
            element: <Blog/>,
        },
        {
            path: '/myToy',
            element: <MyToy/>,
        },
        {
            path: '/addAToy',
            element: <AddAToy/>,
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/signUp',
            element: <SignUp/>,
        },
        
      ]
    },
  ]);

  export default router;
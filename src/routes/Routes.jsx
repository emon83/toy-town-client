import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";

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
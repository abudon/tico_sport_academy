// IMPORTED REQUIREMENTS
import {createBrowserRouter, Link} from "react-router-dom";
// PAGES
import Error404 from '../examples/error/error404.jsx';
import Home from "../views/home/Home.jsx";
import { SignIn } from "../views/authentications/sign-in/SignIn.jsx";
import {Signup} from '../views/authentications/sign-up/Signup.jsx'


// VARIABLES
export  const routes = createBrowserRouter([
    {
        path: "/slug",
        exact: true,
        element: <Link to={'/404'}/>,
        component: "Error404"
    },
    {
        path: "/*",
        exact: true,
        element: <Link to={'/404'}/>,
        component: "Error404"
    },
    {
        path: "/404",
        exact: true,
        element: <Error404/>,
        component: "Error404"
    },
    {
        path: "/",
        exact: true,
        element: <Home/>,
        component: "Home"
    },
    {
        path: "/signin",
        exact: true,
        element: <SignIn/>,
        component: "Signin"
    },
    {
        path: "/signup",
        exact: true,
        element: <Signup/>,
        component: "Signin"
    },


])

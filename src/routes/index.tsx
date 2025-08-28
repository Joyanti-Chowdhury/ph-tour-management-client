import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/verify";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    { 
     Component:App,
        path:"/",
        children:[
            {     Component:About,
                path:"about",
              
            }
        ]
    },
    {
        Component: Login,
        path: "/login",
    },
    {
        Component: Register,
        path: "/register",
    },
    {
        Component: Verify,
        path: "/verify",
    },

    
   
])

export default router
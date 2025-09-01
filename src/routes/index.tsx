
// import App from "@/App";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import About from "@/pages/About";
// import Login from "@/pages/Login";
// import Register from "@/pages/Register";
// import Verify from "@/pages/Verify";
// import { generateRoutes } from "@/utils/generateRoutes";
// import { createBrowserRouter, Navigate } from "react-router";
// import { adminSidebarItems } from "./adminSidebarItems";
// import { userSidebarItems } from "./userSidebarItems";
// import { withAuth } from "@/utils/withAuth";
// import Unauthorized from "@/pages/Unauthorized";
// import { role } from "@/constants/role";
// import { TRole } from "@/types";

import App from "@/App";
import About from "@/pages/About";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter, Navigate } from "react-router";
import Login from "@/pages/Login";
import { generateRoutes } from "@/components/utils/generateRoutes";
import { userSidebarItems } from "./userSideBarItems";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { adminSidebarItems } from "./adminSidebarItems";
import { withAuth } from "@/components/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component:  withAuth(About),
        path: "about",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout , role.superAdmin as TRole),
    path: "/admin",

    children: [
         {index: true , element: <Navigate to="/admin/analytics" />},
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout , role.user as TRole),
    path: "/user",
    children: [
     {index: true , element: <Navigate to="/user/bookings" />},
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    Component:Login,
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
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
  
]);





















// import App from "@/App";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import About from "@/pages/About";

// import Login from "@/pages/Login";
// import Register from "@/pages/Register";

// import Verify from "@/pages/Verify";

// import { createBrowserRouter } from "react-router";
// import { adminSidebarItems } from "./adminSidebarItems";
// import { generateRoutes } from "@/components/utils/generateRoutes";
// import { userSidebarItems } from "./userSideBarItems";

// const router = createBrowserRouter([
//   {
//     Component: App,
//     path: "/",
//     children: [{ Component: About, path: "about" }],
//   },
//   {
//     Component: DashboardLayout,
//     path: "/admin",
//     children:[...generateRoutes(adminSidebarItems)]
//     // children: [
//     //   {
//     //     Component: Analytics,
//     //     path: "analytics",
//     //   },
//     //   {
//     //     Component: AddTour,
//     //     path: "add-tour",
//     //   },
//     // ],
//   },
//   {
//     Component: DashboardLayout,
//     path: "/user",
//     children:[...generateRoutes(userSidebarItems)]
//     // children: [
//     //   {
//     //     Component: Bookings,
//     //     path: "bookings",
//     //   },
//     // ],
//   },
//   {
//     Component: Login,
//     path: "/login",
//   },
//   {
//     Component: Register,
//     path: "/register",
//   },
//   {
//     Component: Verify,
//     path: "/verify",
//   },
// ]);

// export default router;

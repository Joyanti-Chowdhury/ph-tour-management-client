
import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
// import Analytics from "@/pages/Admin/Analytics";
import type { ISidebarItems } from "@/types";
// import AddTourType from "@/pages/Admin/AddTourType";

// import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: AddTourType,
      },
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
      {
        title: "Habi Jabi",
        url: "/admin/habijabi",
        component: AddTour,
      },
    ],
  },
];






















// import AddTour from "@/pages/Admin/AddTour";
// import Analytics from "@/pages/Admin/Analytics";
// import type { ISidebarItems } from "@/types";

// export const adminSidebarItems: ISidebarItems[] = [
//     {
//       title: "Dashboard",
//       items: [
//         {
//           title: "Analytics",
//           url: "/admin/analytics",
//           Component: Analytics
//         },
        
//       ],
//     },
//     {
//       title: "Tour management",
//       items: [
//         {
//           title: "Add Tour",
//           url: "/admin/add-tour",
//           Component: AddTour
//         },
//         {
//           title: "Add Tour type",
//           url: "/admin/add-tour-type",
//            Component: AddTour,
//         },
        
//       ],
//     },
    
//   ]



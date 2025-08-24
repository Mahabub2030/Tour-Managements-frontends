import AddDivistion from "@/pages/Admin/AddDivistion";
import AddTour from "@/pages/Admin/AddTour";
import AddTourTypes from "@/pages/Admin/AddTourTypes";
// import Analytics from "@/pages/Admin/Analytics";
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashbord",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour-Managment",
    items: [
      {
        title: "Add Tour Types",
        url: "/admin/addTourTypes",
        component: AddTourTypes,
      },
      {
        title: "Add Divistion",
        url: "/admin/addDivition",
        component: AddDivistion,
      },
      {
        title: "Add Tour",
        url: "/admin/addTour",
        component: AddTour,
      },
    ],
  },
];

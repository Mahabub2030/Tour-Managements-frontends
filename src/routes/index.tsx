import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { genarateRoute } from "@/utils/genarateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import Login from "@/pages/Login";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/unauthorized";
import { role } from "@/constants/role";
import { TRole } from "@/types";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: withAuth(About),
        path: "about",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...genarateRoute(adminSidebarItems),
    ],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },
      ...genarateRoute(userSidebarItems),
    ],
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
    path: "verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

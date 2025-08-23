import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { genarateRoute } from "@/utils/genarateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import Login from "@/pages/Login";
import { userSidebarItems } from "./userSidebarItems";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [...genarateRoute(adminSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "user",
    children: [...genarateRoute(userSidebarItems)],
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
]);

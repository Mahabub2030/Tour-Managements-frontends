import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import { ISidebarItem } from "@/types";

export const adminSidebarItems :ISidebarItem[] = [
  {
    title: "Dashbord",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component:Analytics
      },
    ],
  },
  {
    title: "Tour-Managment",
    items: [
      {
        title: "AddTour",
        url: "/admin/addTour",
        component:AddTour
      },
      {
        title: "AddTourTypes",
        url: "/admin/addTourTypes",
        component:AddTour
      },
    ],
  },
];

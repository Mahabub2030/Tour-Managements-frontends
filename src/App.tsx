import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";
import { genarateRoute } from "./utils/genarateRoutes";
import { adminSidebarItems } from "./routes/adminSidebarItems";



function App() {

console.log(genarateRoute(adminSidebarItems));

  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;

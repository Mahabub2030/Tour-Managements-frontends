

import { ISidebarItem } from "@/types";



export const genarateRoute =(sidebarItems:ISidebarItem[])=>{
    return sidebarItems.flatMap((sesction) =>sesction.items.map((route) =>({
        path:route.url,
        Component:route.component
    })))

};

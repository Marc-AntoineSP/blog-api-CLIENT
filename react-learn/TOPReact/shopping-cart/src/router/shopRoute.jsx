import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import IndexOutlet from "../outlet/indexOutlet";
import ShopOutlet from "../outlet/shopOutlet";

export const shopRouter = createBrowserRouter([
    {
        path:'/',
        element:<Homepage />,
        children:[
            {
                index:true,
                element:<IndexOutlet/>
            },
            {
                path:'shop',
                element:<ShopOutlet/>
            }
        ]
    }
])
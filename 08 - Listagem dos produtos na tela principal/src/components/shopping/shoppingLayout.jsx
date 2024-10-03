import { Outlet } from "react-router-dom";
import ShoppingMenu from "./shopping-menu";

function ShoppingLayout() {
    return (
        <>
            <ShoppingMenu/>
            <main>
                <Outlet/>
            </main>
        </>
    )
    
}

export default ShoppingLayout
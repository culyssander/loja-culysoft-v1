import { Outlet } from "react-router-dom"
import AdminHeader from "./admin-header"
import AdminMenu from "./admin-menu"

import './styles/admin-layout.css'

function AdminLayout() {
    return (
        <div className="admin-layout">
            <AdminMenu/>
            <div className="top">
                <AdminHeader/>
                <main>
                    <Outlet/>
                </main>
            </div>

        </div>
    )
}

export default AdminLayout
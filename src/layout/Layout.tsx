import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import "./layout.scss"

function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className="app-main">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
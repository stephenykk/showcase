import { getStyleObj } from "@/utils"
import Header1 from "./Header1"
import Header2 from "./Header2"


function Header() {
    return (
        <div className="app-header">
            <div className="header-container" style={getStyleObj('background:#F9F6F3;')}>
                <Header1 />
                <Header2 />
            </div>
        </div>
    )
}


export default Header

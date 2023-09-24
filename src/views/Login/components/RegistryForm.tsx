import { getStyleObj } from "@/utils"


export default function RegistryForm() {
    return (
        <div className="col-2 new-users">
            <h2>NEW RETAILERS</h2>
            <div className="content">
                <ul className="create-customers">
                    <li style={getStyleObj("font-size:18px")}>Create an account with us today!</li>
                    <li style={getStyleObj("font-size:18px")}>You can view pricing,download product details,</li>
                    <li style={getStyleObj("font-size:18px")}>receive inventory update,and much more!</li>
                </ul>
                <p></p>
            </div>
        </div>
    )
}
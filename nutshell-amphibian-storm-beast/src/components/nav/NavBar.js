import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
                <Link className="navbar__link" to="/products">Products</Link>
                <Link className="navbar__link" to="/product/find">FindCandy</Link>
                <Link className="navbar__link" to="/employees">Employees</Link>
                <Link className="navbar__link" to="/customers">Customers</Link>
                <Link className="navbar__link" to="/myOrders">My Orders</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    //sessionStorage.removeItem("activeUser")
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}
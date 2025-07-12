import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <div className="nav">
            <h1>Nav</h1>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
}

export default Nav;
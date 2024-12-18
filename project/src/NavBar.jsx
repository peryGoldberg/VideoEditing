import { Link } from "react-router-dom";
import logo from "./assets/bigLogo.png"; 
import "./NavBar.css";

const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="logo-container">
                <Link to="">
                    <img src={logo} alt="Logo" className="logo"/>
                </Link>
            </div>
            <div className="links-container">
                <Link to="About" className="nav-link">אודות</Link>
                <Link to="" className="nav-link">הלהיטים שלנו</Link>
                <Link to="LogIn" className="nav-link">צור קשר</Link>
            </div>
        </div>
    );
}
 
export default NavBar;

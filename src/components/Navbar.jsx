import logo from "../images/logo.png";
import "../components/navbar.css";

export default function Navbar() {
    return (
        <div className="outer-container-navbar">
            <img src={logo} alt="logo" />
            <div className="button-container-navbar">
                <button>Home</button>
                <button className ="selected">Find Doctors</button>
                <button>About Us</button>
            </div>
            <div className="sign-in-buttons">
                <button className="login">Login</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </div>
    )
}
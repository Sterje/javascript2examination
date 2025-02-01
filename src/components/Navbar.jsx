import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice"; 
import './Navbar.css';
import lightImage from "../assets/day.png"; 
import darkImage from "../assets/night.png"; 

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); 
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme); 

    return (
        <nav className={theme}>
            <Link to="/" className="title">Sterje</Link>
            <div 
                className="menu"
                onClick={() => setMenuOpen(!menuOpen)} 
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/me">Me</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <img
                src={theme === "light" ? darkImage : lightImage} 
                alt="Theme Toggle"
                className="theme-toggle"
                onClick={() => dispatch(toggleTheme())} 
            />
            </ul>
            
        </nav>
    );
}

export default Navbar;

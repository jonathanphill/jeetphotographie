import jeetLogo from "../assets/Jeetphotographie-logos.jpeg";
// import jeetLogo from "../assets/Jeetphotographie-logos_black.png";
import './Header.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";


export default function Header() {
    const navRef = useRef();

    const showNavBar=()=>{
        navRef.current.classList.toggle("responsiveNav")
    }

    return (
      <header className="wrapper">
        <div className="header__content">
            <img
              src={jeetLogo}
              alt="logo of the symbol of mountain and text jeet photography"
            />
            <nav className="nav" ref={navRef}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="" className="nav__link">Work</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav__link">Contact</a>
                    </li>
                </ul>
              
            </nav>
            <div className="hamburger">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
             
        </div>
      </header>
    );
}
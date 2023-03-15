import './NavBar.css';
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai';



export default function NavBar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    ACCURATE ONLINE
                   
                    {/* <FontAwesomeIcon icon="fas fa-code" /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-bars-staggered" /> */}
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"} >
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/blog"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Accurate ERP
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Rent-a-Car
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Networking Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Linux Solutions
                        </NavLink>
                    </li>
                </ul>
                <button>Contact Us</button>
                    <button>Customer Login</button>
                <div className="nav-icon" onClick={handleClick}>
                    {/* <FontAwesomeIcon icon={click ? "fa fa-times" : "fa-solid fa-bars"} /> */}
                    {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                    { click ?
                     <AiOutlineClose color="grey" size="20px" />:
                  <GiHamburgerMenu color="grey" size="20" />
                    }
                </div>

            </div>
        </nav>
        </>
    )
}
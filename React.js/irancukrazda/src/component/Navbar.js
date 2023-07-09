import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const links = [
        {
            to: "/",
            link: <i className="fas fa-home" />,
        },
        {
            to: "/about",
            link: "About",
        },
        {
            to: "/product",
            link: "Product",
        },
        {
            to: "/contact",
            link: "Contact",
        },
    ];
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    IranCukrazda
                </Link>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {links.map((item) => (
                        <li className="nav-item ">
                            <Link
                                to={item.to}
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
            </nav>
        </>
    );
}

export default Navbar;

import React, { useState } from "react";

export default function Nav() {
    const items = ["mission", "project", "about us", "unity in community", "contact"];

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    // const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const closeMenu = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg fixed-top " id="mainNav">
                <div
                    className="container justify-content-between"
                    id="navContainer"
                >
                    {" "}
                    {/*fix the justify content for the navBar  */}
                    <a
                        className="navbar-brand js-scroll-trigger"
                        href="#page-top"
                    >
                        <img
                            src="pictures/kalunba/logo-rbg1.png"
                            alt="kalunba Non Profit Kft"
                        />
                    </a>
                    <button
                        className="custom-toggler navbar-toggler"
                        style={{ backgroundColor: "#5C8D89" }}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded={!isNavCollapsed ? true : false}
                        aria-label="Toggle navigation"
                        // onClick={handleNavCollapse}
                        // onClick={closeMenu}
                    >
                        Menu
                        <i className="fa fa-bars ml-1" />
                    </button>
                    <ul
                        className={`${
                            isNavCollapsed ? "collapse" : ""
                        } navbar-collapse navbar-nav justify-content-end text-uppercase`}
                        id="navbarResponsive"
                    >
                        {items.map((item) => (
                            <li className="nav-item ">
                                <a
                                    onClick={closeMenu}
                                    className="nav-link js-scroll-trigger text-white mr-auto p-3"
                                    href={"#" + item}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.scss";

function Footer() {
    const links = [
        {
            className: "facebook",
            aria: "facebook",
            icon: "fa-facebook-f",
            to: "/",
        },
        {
            className: "instagram",
            aria: "Instagram",
            icon: "fa-instagram",
            to: "/",
        },
        {
            className: "youtube",
            aria: "youtube",
            icon: "fa-youtube",
            to: "/",
        },
        {
            className: "twitter",
            aria: "twitter",
            icon: "fa-twitter",
            to: "/",
        },
        {
            className: "linkedin",
            aria: "linkedin",
            icon: "fa-linkedin",
            to: "/",
        },
    ];
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to receive our best deals and new
                    product!
                </p>
                <p className="footer-subscription-text">
                    You can Unsubscribe anytime
                </p>

                <form action="" className="input-areas">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="footer-input"
                    />
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </section>

            <div className="social-media-wrap">
                <a
                    className="social-logo"
                    href="https://jafarimahdi.github.io/"
                    target="_blank"
                >
                    Made With
                    <i class="fab fa-gratipay" />
                    In Apr 2021 By MJ.
                </a>

                <div className="social-icons">
                    {links.map((item) => (
                        <Link
                            className={`social-icon-link ${item.className}`}
                            to={item.to}
                            target="_blank"
                            aria-label={item.label}
                        >
                            <i className={`fab ${item.icon}`} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;

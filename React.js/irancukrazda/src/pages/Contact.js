import React from "react";
import GoogleMapReact from "google-maps-react";
import Maps from "../component/Maps";
import Line_break from "../component/Line_break";
import "../App.scss";

export default function Contact() {
    return (
        <>
            <div
                className="contact"
                style={{ backgroundImage: "url(img-2/26.jpg)" }}
            />
            <Line_break />

            <div className="contact-page">
                <h1>We Love To See You</h1>


                <div className="get-in-touch">
                    <div className="box">
                        <h2>Get In Touch</h2>

                        <ul>
                            <li>
                                <i class="fas fa-map-marker-alt" />
                                <section>
                                    <h3>Find us</h3>
                                    <p>Budapest, Nagy Diófa u. 32</p>
                                    <p>Budapest, Wesselényi u. 33</p>
                                </section>
                            </li>
                            <li>
                                <i class="fas fa-clock" />
                                <section>
                                    <h3>Working Hourse</h3>
                                    <p>
                                        Monday - Sunday <br /> 9 - 22
                                    </p>
                                </section>
                            </li>
                            <li>
                                <i class="fas fa-phone-volume" />
                                <section>
                                    <h3>Phone</h3>
                                    <p>+3616186272</p>
                                </section>
                            </li>
                            <li>
                                <i class="fas fa-mobile-alt" />
                                <section>
                                    <h3>Mobile</h3>
                                    <p>+36303868447</p>
                                </section>
                            </li>
                        </ul>
                    </div>
                    <div className="map">
                        <Maps />
                    </div>
                </div>
            </div>
        </>
    );
}

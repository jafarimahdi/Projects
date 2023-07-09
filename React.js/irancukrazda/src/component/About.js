import React, { Component } from "react";
import "./About.scss";

export function About() {
    return (
        <>
            <div className="detail">
                <img className="line-image" src="./img-2/2.png" />

                <div className="frei">
                    <img src="./img-2/6.jpg" alt="" />

                    <section>
                        <h1>About Us</h1>
                        <p>
                            Iran Cukarzda is a place, where you can find
                            traditional and handmade Persian Sweets with unique
                            test of the ‘Saffron ,Rose Water, Honey,
                            Pistachios’.
                            <br />
                            All the product are preparing daily by hand and
                            fresh as you can imagine.
                        </p>
                    </section>
                </div>

                <div className="frei-story">
                    <img src="./img-2/27.jpg" alt="" />

                    <section>
                        <h1>Feri Bacsi</h1>
                        <p>
                            Fereydon, was working in his family business in
                            Iran, and he learned all the craft of local
                            pastry-making.
                            <br />
                            After being forced to leave Iran, and Working for 20
                            years in Norway, he is now among those adept
                            artisans who have exported their know-how of a
                            traditional trade to the Hungarian Capital ..
                        </p>
                        <div className="links">
                            <a
                                href="https://www.facebook.com/Iran-cukr%C3%A1zda-339084550213542"
                                target="_blank"
                            >
                                <i class="fab fa-facebook" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

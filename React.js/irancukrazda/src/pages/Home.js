import React from "react";
import { About } from "../component/About";
import Our_product from "../component/Our_product";
import { Link } from "react-router-dom";
import "../App.scss";


function Home() {
    return (
        <>
            <video className="video" src="./2.mp4" autoPlay loop muted />

            <div className="home-page">
                <div className="hero-text">
                    <h3>Iran Cukrazda</h3>
                    <h5>DESERT SHOP</h5>
                </div>
                <About />

                <div className="pang">
                    <div className="text">
                        <h6>
                            I Can Imagine Hell like this: Italian punctuality,
                            German humour, English Wine and a bite of Persian
                            Sweets
                        </h6>
                        <p>PETER USTINOV</p>
                    </div>
                </div>

                <Our_product />

                <Link to="/product" className="button-more">
                    <button>More</button>
                </Link>
            </div>
        </>
    );
}
export default Home;

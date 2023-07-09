import React from "react";
import Line_break from "../component/Line_break";
import ReactPlayer from "react-player";
import "../App.scss";

export default function About() {
    return (
        <>
            <div
                className="about"
                style={{ backgroundImage: "url(img-2/16.jpg)" }}
            >

            </div>
            <Line_break />

            <div className="about-page">
                <h1 className="hero-text">Our Shops</h1>

                <div className="shop">
                    <section>
                        <h2>Iran Cukarszda 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae eligendi amet maiores molestias
                            optio laboriosam cumque. Dolor eius enim veniam
                            totam! Corrupti quidem veniam iure exercitationem
                            necessitatibus cum doloribus tempore nobis
                            recusandae! Exercitationem cupiditate quia, animi
                            harum illum doloremque voluptatum.
                        </p>
                    </section>
                    <ReactPlayer
                        className="youtube-video"
                        url={["https://youtu.be/0Ru58LXDx6Q"]}
                        controls="true"
                        style={{width:"100%"}}
                    />
                </div>
                <div className="shop second">
                <section>
                    <h2>Iran Cukarszda 1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae eligendi amet maiores molestias optio
                        laboriosam cumque. Dolor eius enim veniam totam!
                        Corrupti quidem veniam iure exercitationem
                        necessitatibus cum doloribus tempore nobis recusandae!
                        Exercitationem cupiditate quia, animi harum illum
                        doloremque voluptatum.
                    </p>
                    </section>
                        <ReactPlayer
                            className="youtube-video"
                            url={["https://youtu.be/B_Qxo-wVaa4"]}
                            autoPlay="false"
                            controls="true"
                            style={{ width: "100%" }}
                        />
                    </div>
            </div>
        </>
    );
}

import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import "./style/Mission.css";

export default function Mission() {
    const data = [
        {
            text: " COMMUNITY",
            icon: "fas fa-fist-raised fa-stack-1x fa-inverse",
            caption:
                "Assisting in the creation of a supportive, loving, and compassionate environment from which clientele gain vital networks and assistance, for both practical and psychosocial needs.",
            aos: "fade-up",
        },
        {
            text: "EMPLOYMENT",
            icon: "fas fa-hand-holding-heart fa-stack-1x fa-inverse",
            caption:
                "Helping those in need, wherever they are along their educational journey, to receive Hungarian language lessons, further their education, and gain job training in order to be productive and valuable members of society.",
            aos: "fade-up",
        },
        {
            text: "SAFE HOMES",
            icon: "fas fa-praying-hands fa-stack-1x fa-inverse",
            caption:
                "Aiding families upon their arrival to secure housing that not only provides shelter, but is also a place to gather and make their own, leading to more full, well rounded, and independent lives.",
            aos: "fade-up",
        },
    ];

    // --------------------------------------------------
    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (
        <section className="page-section" id="mission">
            <div className="container">

                <div data-aos="fade-down" className="text-center m-5">
                    <h3 className="section-heading text-uppercase">
                        our mission
                    </h3>
                </div>

                <div className="row">
                    {data.map((item) => (
                        <div
                            className="col-md-4 text-center"
                            data-aos={item.aos}
                        >
                            <span className="fa-stack fa-4x">
                                <i
                                    className="fa fa-circle fa-stack-2x "
                                    style={{ color: "#BDD2B6" }}
                                />
                                <i className={item.icon} />
                            </span>
                            <h4 className="my-3">{item.text}</h4>
                            <p className="text-muted">{item.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

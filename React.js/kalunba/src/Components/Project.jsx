import react, { useEffect } from "react";
import Aos from "aos";
import Cards from "./Cards";
import "aos/dist/aos.css";
import "../assets/css/style.css";

export default function Project() {
    const outDoor = [
        {
            pic: "pictures/kalunba/29.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/27.jpg",
            aos: "fade-up",
        },
        {
            pic: "pictures/kalunba/8.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/32.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/12.jpg",
            aos: "fade-up",
        },
        {
            pic: "pictures/kalunba/36.jpg",
            aos: "fade-up",
        },
        {
            pic: "pictures/kalunba/19.jpg",
            aos: "fade-down",
        },
        {
            pic: "pictures/kalunba/35.jpg",
            aos: "fade-up",
        },
    ];

    const education = [
        {
            title: "Hungarian Lesson for Adult/Kids",
            caption:
                "Our Hungarian classes for adult is start form bigener level, and it's focusing more on the work an daily life, for kids our focus on helping them with their school and studding materials ",
            pic: "pictures/kalunba/1.jpg",
            aos: "fade-up",
        },
        // {
        //     title: "English Lesson for Kids",
        //     caption:
        //         "with the help of our international volunteers, we teach kids general life English and school English, depending in their need and grade ",
        //     pic: "pictures/kalunba/4.jpg",
        //     aos: "fade-up",
        // },
        {
            title: "8 grade in Kalunba",
            caption:
                "study in the official school is always difficult for adult students and not easy to join, Kalunba with help of the partners, made this possibility to having the official classes for 8 grade",
            pic: "pictures/kalunba/25.jpg",
            aos: "fade-down",
        },
        {
            title: "Building on Person to Person Relationship",
            caption:
                "The job is done well when refugee students are constantly starting ...",
            pic: "pictures/kalunba/22.jpg",
            web: "https://reformatus.hu/english/news/building-person-person-relationship/?fbclid=IwAR2NuEFoI3Ry6PrsUoktgkOhEWG1-dszKAdwlTYLpQzB4VGhJNFcXVpUPPE",
            aos: "fade-up",
        },
        {
            title: "Recognition of Kalunba Graduates",
            caption:
                "In recognition of the recent graduates of the Interpretation course, ..",
            pic: "pictures/kalunba/31.jpg",
            web: "http://regi.reformatus.hu/mutat/15628/?fbclid=IwAR3N128THriDQNzmFf-iwpwRk42As_cpsubWIWQbqqJoWLfrQ6slLk2RsWU",
            aos: "fade-down",
        },
        {
            title: "Easy Lessons",
            caption:
                "Kafiya, was one of the students in Kalunba's after-school programme. She also attended Hungarian as a Foreign Language classes at Kalunba. Now she is on her way to a life and a career full of promises.",
            pic: "pictures/kalunba/kafia.jpg",
            web: "https://secretstories.hu/interjuk/kafiya-mahdi-rea-milla-interju/#biztonsagban",
            aos: "fade-down",
        },
    ];

    useEffect(() => {
        Aos.init({ duration: 1000 });
    });

    return (
        <section className="page-section bg-light" id="project">
            <div className="container">

                <div className="row py-4" id="card-column">
                    <div className="card-columns col-12">
                        {outDoor.map((item) => (
                            <div className="card" data-aos={item.aos}>
                                <img
                                    className="card-img"
                                    src={item.pic}
                                    width="100%"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center my-5" data-aos="fade-down" id="about us">
                    <h2 className="section-heading text-uppercase">
                        <u>KALUNBA</u>
                    </h2>
                    <p>
                        Through its activities, Kalunba strengthens a culture of
                        tolerance, promotes human rights and protects
                        minorities. The organization runs a community centre for
                        refugees and third country nationals in the heart of
                        Budapest, providing a variety of services such as
                        housing, language classes, tutoring and employment
                        services. Kalunba aims to ensure sustained employability
                        and to create a friendly and supportive community with a
                        meeting place for all. It uses a holistic approach to
                        provide an opportunity for successful, full integration,
                        in cooperation with the Reformed Church in Hungary and
                        other European and North American Protestant Churches.
                        An after school tutoring programme, providing specific
                        and tailored solutions, has also been set up in an
                        attempt to assist and encourage the Hungarian school
                        system to respond to the needs of refugee children.
                    </p>
                </div>
            </div>

            {/* Education program ---------------------- */}
            <div className="container">
                <h4 data-aos="slide-up" className="text-center my-5">
                    <u> About Us</u>
                </h4>
                {/* make a new row   */}
                <div className="row " style={{ maxWidth: "100vw" }}>
                    <div className="text col-lg-5 p-2">
                        <p>
                            Our previous entity, the Refugee Mission of the
                            Reformed Church in Hungary has been assisting
                            refugees since 2006 in various forms and via various
                            programs on the fields of housing, employment,
                            culture, legal protection and education, the
                            activities were funded by the European Refugee Fund
                            and our international Protestant Church Partners.
                        </p>
                        <p>
                            In 2013 we received a prize from Eurodiaconia for
                            our migrant inclusion programmes, and a prize for
                            equal opportunities from the Ministry of Human
                            Resources. In 2011, our education programme was
                            presented in the UNHCR Report on Education. In 2014,
                            Eurodiaconia presented our program assisting refugee
                            women find employment as a best practice in its
                            report. In 2015 September 27, Eurodiaconia will
                            present our community center for migrants and
                            refugees as a good practice.
                        </p>
                        <p>
                            Kaunba was set up in 2014 Spring, upon its funding
                            in close cooperation with the St Columba Scottish
                            Mission Kalunba started to provide free Hungarian
                            lessons to migrants regardless of their protection
                            status. St Columbas provided also for the initial
                            office, lecture and community space for Kalunba’s
                            activities, even after Kalunba was able to provide
                            for its own community space the historical building
                            of the congregation remained to haven for all the
                            big celebrations and community events such as
                            Christmas and Eid parties.
                        </p>
                        <p>
                            On April 24 2015 Kalunba Charity received its first
                            contract by Office of Immigration and Nationality to
                            manage the integration of resettled refugees as part
                            of the National Resettlement Program in Hungary.
                        </p>
                        <p>
                            Between 2015-2018 Kalunba implemented large scale
                            projects via the Asylum, Migration and Integration
                            Fund of the European Union: housing, employment,
                            Hungarian language school, movement therapy for
                            children with learning difficulties, community
                            development.
                        </p>
                        <p>
                            Our current multi-year grants are provided via the
                            HEKS/EPER the aid organization of Swiss Protestant
                            Churches and Bread for the World the globally active
                            development and relief agency of the Protestant
                            Churches in Germany.
                        </p>
                    </div>

                    <div
                        className="card-columns d-inline-block col-lg-7"
                        style={{ columnCount: "2" }}
                    >
                        {education.map((item) => (
                            <div className="card" data-aos={item.aos}>
                                <div
                                    className="card-body"
                                    style={{ padding: "0", margin: "0" }}
                                >
                                    <a href={item.web} target="_blank">
                                        <img
                                            className="card-img-top"
                                            src={item.pic}
                                            alt="Card image cap"
                                            width="100%"
                                        />
                                        <div className="card-text">
                                            <small className="text-muted pl-3">
                                                {item.title}
                                            </small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

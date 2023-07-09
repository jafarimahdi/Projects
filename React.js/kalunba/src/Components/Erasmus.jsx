import React from "react";
import ReactPlayer from "react-player";
import "./style/Erasmuse.css";

export default function Erasmus() {
    return (
        <div className="container" id="unity in community">
            <div className="text-center m-5" >
                <h1>
                    <u>UNITY IN COMMUNITY</u>
                </h1>
                {/* <h6 className="text-muted">
                    As Community building the connection always was our
                    Criterion
                </h6> */}
            </div>

            <div className="row m-4">
                <div className="col col-12 m-2">
                    <p className="text-muted">
                        A project conducted by four NGOs in Central Europe
                        (Mareena; Bratislava, Be International; Brno, Global
                        2000; Vienna, and Kalunba; Budapest). During the two
                        year long Erasmus+ funded project the following
                        intellectual outputs were created that are downloadable
                        below: a Community Study, a Methodology for adult
                        educators and a Handbook and video tutorial. Kalunba as
                        the implementing partner of the reformed Church in
                        Hungary involved various levels and members of the RCH
                        umbrella.
                    </p>
                    <p className="text-muted">
                        The project’s recent closing event organized by Kalunba
                        involved a presentation of the dissertation findings of
                        a recently-completed doctoral dissertation by Eliana
                        Garzón, who studied the effects of immigration and
                        language-learning on identity formation of children
                        11-18 years old. Kalunba served as the primary case
                        study organization for Eliana’s research, and her
                        findings made it clear that Kalunba has the reputation
                        and broad support to do the kind of holistic work that
                        refugee families often need. Eliana’s dissertation was
                        called, “Identity Negotiation through the Lens of
                        Language Rights: Refugee and Migrant Children and Youths
                        in MissionPlace* Budapest.”
                    </p>
                </div>

                <ReactPlayer
                    className="col col-12 my-5"
                    url={["https://youtu.be/IeiGzGiKSI0"]}
                    controls="true"
                    // style={{ width: "100%", height:"100%" }}
                    width= "85vw"
                    height="66vh"
                />
                <div className="handbook">
                    <h3>Project Handbook</h3>
                    <p>
                        We created this handbook to offer practical tools and
                        ideas to people interested in civic engagement and
                        starting off a community project. Therefore, we
                        recommend this booklet to community leaders,
                        organizations, social workers, community organizers, and
                        to anyone who would like to enhance social change and
                        become actively engaged in their community. Our booklet
                        is research-based and experience-based: we gathered the
                        results of a common qualitative research and some good
                        practices which can serve as a starting point for those
                        interested in community work. Since the project was a
                        cooperation between four different NGOs in four
                        different countries, involving both local and migrant
                        residents, our booklet has a strong intercultural focus
                        and poses the question of how we can live together and
                        take part in our own community in a sustainable way -
                        and by this, we mean social, environmental and economic
                        sustainability. To narrow down the wide concept of
                        ‘community’, the project concentrated on the notion of
                        ‘neighborhood’ and what it means to the participants.
                        The handbook was edited by Claire Weihe (Global Mission
                        Intern at RCH), Eszter Kállay (teacher and social worker
                        at Kalunba’s afterschool program)
                    </p>
                    <div className="text-center download-file">
                        <h6 className="">
                            <u>Download The Handbook</u>
                        </h6>
                        <a
                            href="english-Handbook.pdf"
                            target="_blank"
                            className="m-1"
                        >
                            <button>
                                <i
                                    className="fa fa-download"
                                    aria-hidden="true"
                                />
                                English
                            </button>
                        </a>

                        <a
                            href="hu-Handbook.pdf"
                            target="_blank"
                            className="m-1"
                        >
                            <button>
                                <i
                                    className="fa fa-download"
                                    aria-hidden="true"
                                >
                                    Hungarian
                                </i>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="mentoring my-5">
                    <h3>Mentoring Methodology</h3>
                    <p>
                        The methodology is intended for leaders and lecturers
                        who want to motivate their teams to work in their own
                        community or neighborhood and bring new impulses that
                        respond to the needs of the community. It is based on
                        participatory methods and an exploratory approach. The
                        methodology uses the goals of sustainable development
                        and the approach of active citizenship, which bring a
                        global perspective to current social, economic and
                        environmental challenges. It will be used in particular
                        by leaders and trainers who would like to work in the
                        field of community work and seek inspiration on how to
                        work with diverse groups, map community needs and
                        prepare realistic projects that would contribute to more
                        inclusive neighborhoods.
                    </p>
                    <div className="text-center">
                        <h6>
                            <u>Download the Methodology</u>
                        </h6>
                        <a
                            href="Methodology.pdf"
                            target="_blank"
                            className="m-1"
                        >
                            <button>
                                <i
                                    className="fa fa-download"
                                    aria-hidden="true"
                                >
                                    English
                                </i>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="communityStudy my-5">
                    <h3>CommUnity Study</h3>
                    <p>
                        The aim of the study is to understand the dynamics of
                        community life at the neighborhood level and to examine
                        the most common motivations and barriers to involvement
                        in community initiatives. The research maps in-depth
                        interviews between local and foreigners in four Central
                        European cities - Bratislava, Brno, Vienna and Budapest.
                        It also contains their views and experiences of engaging
                        in neighborhood communities. It specifically addresses
                        topics such as the perception of the neighborhood and
                        its borders, neighborhood relations, neighborhood
                        challenges and community involvement at the neighborhood
                        level. The view of the respondents can serve as a
                        resource for the work of community leaders who would
                        like to initiate community activities in their
                        neighborhood.
                    </p>
                    <div className="text-center">
                        <h6>
                            <u>Download the CommUnity Study</u>
                        </h6>
                        <a
                            href="CommUnity-Study.pdf"
                            target="_blank"
                            className="m-1"
                        >
                            <button>
                                <i
                                    className="fa fa-download"
                                    aria-hidden="true"
                                >
                                    English
                                </i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

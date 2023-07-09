import "./style/Community.css";

export default function Community() {
    const ourTeam = [
        {
            pic: "",
            name: "#E2- jason",
            position: "Volunteer",
            twitter: "#!",
            faceBook: "#!",
            likedIn: "#!",
        },
        {
            pic: "",
            name: "#E3-  Maria",
            position: "Volunteer",
            twitter: "#!",
            faceBook: "#!",
            likedIn: "#!",
        },
        {
            pic: "",
            name: "#E4- Angela",
            position: "",
            twitter: "#!",
            faceBook: "#!",
            likedIn: "#!",
        },
    ];
    return (
        <section className="page-section bg-light" id="community">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        Our Amazing Team
                    </h2>
                    <h3 className="section-subheading text-muted">
                        #E1- Meet our Spacial Team and know them more
                    </h3>
                </div>

                <div className="row">
                    {ourTeam.map((member) => (
                        <div className="col col-lg-4">
                            <div className="team-member">
                                <img
                                    className="mx-auto rounded-circle"
                                    src={member.pic}
                                    alt=""
                                />
                                <h4>{member.name}</h4>
                                <p className="text-muted">{member.position}</p>
                                <a
                                    className="btn btn-dark btn-social mx-2"
                                    href={member.twitter}
                                >
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a
                                    className="btn btn-dark btn-social mx-2"
                                    href={member.faceBook}
                                >
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                                <a
                                    className="btn btn-dark btn-social mx-2"
                                    href={member.likedIn}
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <p className="large text-muted">
                            #E5- Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aut eaque, laboriosam veritatis,
                            quos non quis ad perspiciatis, totam corporis ea,
                            alias ut unde.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

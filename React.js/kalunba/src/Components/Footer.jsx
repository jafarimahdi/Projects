export default function Footer() {
    const links = [
        {
            link: "https:",
            icon: "fa fa-twitter",
        },
        {
            link: "https://www.facebook.com/kalunbacharity",
            icon: "fa fa-facebook-f",
        },
    ];
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">
                        Copyright © KALUNBA NON-PROFIT
                    </div>

                    {/* <div className="col-lg-4 my-3 my-lg-0">
                        {links.map((item) => (
                            <a
                                className="btn btn-dark btn-social mx-2"
                                href={item.link}
                                target="_blank"
                                style={{ backgroundColor: "#92967D" }}
                            >
                                <i className={item.icon} />
                            </a>
                        ))}
                    </div> */}

                    <div className="col-lg-4 text-lg-right">
                        <a className="mr-3" href="#!">
                            Privacy Policy
                        </a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

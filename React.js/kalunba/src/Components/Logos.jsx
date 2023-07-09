export default function Logos() {

    const logos = [
        { pic: "pictures/kalunba/logo-rbg.png" },
        { pic: "pictures/kalunba/102.png" },
        { pic: "pictures/kalunba/101.png" },
    ];
    return (
        <section className="page-section bg-light" id="community">
            <div className="container py-4">
                <div className="row text-center">
                    {logos.map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto my-auto p-3 ">
                            <img
                                className="mx-auto "
                                src={item.pic}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
            </section>
    );
}

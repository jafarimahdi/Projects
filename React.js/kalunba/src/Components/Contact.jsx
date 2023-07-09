import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import "./style/Contact.css";

// 1-   add yup scheme here for the validation  ----------------------
const schema = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    text: yup.string().required(),
});

export default function Contact() {
    /*2-  form and validation  react-hook-form  -------------------------------------*/
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    /* 3-  use the API for the auto email or manage the backend part -------------------------- */
    const [statusMessage, setStatusMessage] = useState(" ");

    // send to EmailJs
    const onSubmit = (data) => {
        console.log(data);

        emailjs
            .sendForm(
                "service_wtbcyyk",
                "template_lsgz0ug",
                "#contactForm",
                "user_CaSe2dULRsCYGXJGCKmFu"
            )
            .then(
                (result) => {
                    console.log(result.text);

                    setStatusMessage("Message sent!");
                    // statusMessage.className = "status-message success";
                    // setTimeout(()=> {
                    //     statusMessage.className = 'status-message'
                    //     }, 5000)
                },
                (error) => {
                    console.log(error.text);

                    setStatusMessage(
                        "Failed to send message! Please try again later."
                    );
                    // statusMessage.className = "status-message failure";
                    //     setTimeout(()=> {
                    //     statusMessage.className = 'status-message'
                    // }, 5000)
                }
            );
        reset();
    };

    //      -------------------------------------------------------------
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center my-3">
                    <h2 className="section-heading text-uppercase">
                        Contact Us
                    </h2>
                    <h3 className="section-subheading text-white">
                        Our community center in Budapest is currently operating
                        with limited personal access due to the pandemic. Please
                        contact us online at:
                    </h3>
                    <div className="contact">
                        <a
                            className="btn text-white mx-2"
                            href=" https://www.facebook.com/kalunbacharity"
                            target="_blank"
                            style={{ backgroundColor: "#6C757D" }}
                        >
                            <i className="fa fa-facebook-f" />
                        </a>

                        <a
                            className="btn text-muted"
                            href="mailto:kalunbameeting@gmail.com"
                            type="email"
                            style={{ backgroundColor: "white" }}
                        >
                            <i className="fa fa-envelope" />
                        </a>
                    </div>

                    <p className="section-subheading text-white">
                        or, leave a message for us
                    </p>
                </div>

                <form
                    id="contactForm"
                    name="sentMessage"
                    novalidate="novalidate"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group"></div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name *"
                                    {...register("name")}
                                />
                                <p className="help-block text-danger">
                                    {errors.name?.message}
                                </p>
                            </div>

                            <div className="form-group ">
                                <input
                                    className="form-control"
                                    name="lastname"
                                    type="text"
                                    placeholder="Last Name"
                                    {...register("lastname")}
                                />
                                <p className="help-block text-danger">
                                    {errors.lastname?.message}
                                </p>
                            </div>

                            <div className="form-group mb-md-0">
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email *"
                                    {...register("email")}
                                />
                                <p className="help-block text-danger">
                                    {errors.email?.message}
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    name="text"
                                    placeholder="Your Message *"
                                    {...register("text")}
                                ></textarea>
                                <p className="help-block text-danger">
                                    {errors.text?.message}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="status-message" id="show-message">
                            {statusMessage}
                        </p>
                        <div id="success"></div>

                        <button
                            className="btn btn-xl text-uppercase rounded"
                            style={{
                                backgroundColor: "#92967D",
                                color: "#FFFFFF",
                            }}
                            id="sendMessageButton"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

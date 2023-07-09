import React from "react";
import Cards from "../component/Cards";
import Line_break from "../component/Line_break";
import Our_product from "../component/Our_product";
import "../App.scss";

export default function Products() {
    return (
        <>
            <video className="video" src="./1.mp4" autoPlay loop muted />

            <div className="product-page">
                <Our_product />
                <Cards />
            </div>
        </>
    );
}

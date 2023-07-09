import React from "react";
import Carditem from "./Carditem";
import "./Cards.scss";

function Cards() {
    const products = [
        {
            src: "img-2/7.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Long Bameyeh",
            path: "/product",
        },
        {
            src: "img-2/30.jpg",
            text: "persian cookie with Pectase and some saffaron and more rose water and a lot of things inside of it",
            label: "pestei",
            path: "/product",
        },
        {
            src: "img-2/9.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Bameyeh",
            path: "/product",
        },
        {
            src: "img-2/12.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Karehi",
            path: "/product",
        },
        {
            src: "img-2/10.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Papyon",
            path: "/product",
        },
        {
            src: "img-2/11.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "shokolati",
            path: "/product",
        },
        {
            src: "img-2/13.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Tea & karei",
            path: "/product",
        },
        {
            src: "img-2/14.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Narges",
            path: "/product",
        },
        {
            src: "img-2/17.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Zafaroni",
            path: "/product",
        },
        {
            src: "img-2/19.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Zaban Cream",
            path: "/product",
        },
        {
            src: "img-2/20.jpg",
            // src="videos/video-1.mp4"
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Danmarki",
            path: "/product",
        },
        {
            src: "img-2/22.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Danmarki",
            path: "/product",
        },
        {
            src: "img-2/23.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Layei",
            path: "/product",
        },
        {
            src: "img-2/24.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Baghlava",
        },
        {
            src: "img-2/25.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Baghlava sontati",
        },
        {
            src: "img-2/5.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "ZABAN",
            // path="/product"
        },
        {
            src: "img-2/28.jpeg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis natus beatae!",
            label: "Asali",
            path: "/product",
        },
    ];
    return (
        <div className="cards">
            <ul className="cards__items">
                {products.map( item =>(

                <Carditem
                    src={item.src}
                    text={item.text}
                    label={item.label}
                    path={item.path}
                />
                ))}
            </ul>
        </div>
    );
}

export default Cards;

import React from "react";
import "./Our_product.scss";

export default function Our_product() {
    return (
        <div className="product_section">
            <div className="text_area">
                <img src="img-2/2.png" alt="ourProduct" />
                <h1>OUR Product</h1>
            </div>
            <ul className="icons">
                <li>
                    <img src="./img-2/2.svg" className="image" alt="" />
                    <h3>Freshness</h3>
                    <p>
                        All of our product made daily by hand with fresh
                        ingradient.
                    </p>
                </li>
                <li>
                    <img src="./img-2/3.svg" className="image" alt="" />
                    <h3>Gluten Free</h3>
                    <p>
                        our ingredient are lactose free and with out milk and
                        others, we our glad to make all of our customer happy
                        and everyone can test our product
                    </p>
                </li>
                <li>
                    <img src="./img-2/4.svg" className="image" alt="" />
                    <h3>Tradition</h3>
                    <p>
                        having the spacial drink(TEA), make your try completely
                        done and you tried all the things from other culture and
                        can feel how people enjoy them sweet moments.
                    </p>
                </li>
            </ul>
        </div>
    );
}

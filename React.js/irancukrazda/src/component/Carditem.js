import React from "react";

function Carditem(props) {
    return (
        <>
            <li className="card__item">
                <img src={props.src} className="cards__item__img" />

                <div className="cards__item__info">
                    <h5>{props.label}</h5>
                    <p className="cards__item__text">{props.text}</p>
                </div>
            </li>
        </>
    );
}

export default Carditem;

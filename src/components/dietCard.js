import React from "react"
import style from "../components/dietCard.module.css"
import Media from "react-bootstrap/Media"

export default function DietCard(props) {
    return (
        <div
            className={style.mainCard}
            style={{ width: props.cardWidth, height: props.cardHeight }}
        >
            <Media>
                <div className={style.icon}>
                    <img src={props.icon} alt="" width="32px" />
                </div>
                <Media.Body>
                    <h5 className="mb-3">{props.heading}</h5>
                    <p>{props.text}</p>
                </Media.Body>
            </Media>
        </div>
    )
}

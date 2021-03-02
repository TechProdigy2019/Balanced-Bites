import React, { useState } from "react"
import styles from "./externalCards.module.css"
import Toast from "react-bootstrap/Toast"

export default function FixedToast(props) {
    const [showA, setShowA] = useState(true)
    const toggleShowA = () => setShowA(!showA)

    return (
        <Toast
            show={!showA}
            className={`shadow-xl ${styles.mainCard}`}
            onClose={toggleShowA}
        >
            <Toast.Header>
                <strong className="mr-auto">{props.cardHeading}</strong>
            </Toast.Header>
            <Toast.Body>{props.children}</Toast.Body>
        </Toast>
    )
}

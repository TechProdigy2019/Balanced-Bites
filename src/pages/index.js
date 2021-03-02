import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import style from "./index.module.css"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import Button from "react-bootstrap/Button"
import Diet1 from "../images/Group.svg"
import FixedToast from "../components/fixedToast"
import DietWomen from "../images/diet_women.svg"

export default function Home() {
    return (
        <Layout>
            <FixedToast cardHeading="Covid - 19 Health Tips">
                <p>
                    Download are thorough guide to help you maintain health
                    during quarantine
                </p>
                <Button varient="dark" class="btn btn-dark">
                    Download
                </Button>
            </FixedToast>
            <section className="section-1">
                <Container>
                    <div className={style.sectionBox}>
                        <Row style={{ minHeight: "calc(100vh - 8.5rem)" }}>
                            <Col xs={12} md={6}>
                                <div>
                                    <h1 className="my-5">
                                        Start Your Next Day With a{" "}
                                        <span style={{ color: "#008465" }}>
                                            Healthier Meal
                                        </span>{" "}
                                        !
                                    </h1>
                                    <p className={`my-5 ${style.sectionText}`}>
                                        We provide diet plans related to{" "}
                                        <b>weightloss</b>, <b>weight gain</b>,{" "}
                                        <b>pcod</b>, <b>pcos</b>,{" "}
                                        <b>diabetes</b>, <b>hypertension</b> or
                                        any other <b>medical problem</b>.
                                    </p>
                                    <ButtonToolbar className="justify-content-center justify-content-md-start">
                                        <Button
                                            variant="primary"
                                            className="mr-5 mr-md-3"
                                        >
                                            Contact Us
                                        </Button>{" "}
                                        <Button
                                            varient="secondary"
                                            className="btn-secondary"
                                        >
                                            Know More
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row
                                    className="align-items-end justify-content-center justify-content-md-start"
                                    style={{
                                        height: "100%",
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        src={Diet1}
                                        alt=""
                                        className={`mt-5 ${style.secImg1}`}
                                    />
                                    <img
                                        src={DietWomen}
                                        alt=""
                                        className={`d-none d-md-block ${style.DietWomen}`}
                                    />
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

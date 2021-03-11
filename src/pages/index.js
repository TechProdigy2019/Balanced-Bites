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
import aboutMe from "../images/aboutme_1.png"
import DietCard from "../components/dietCard"
import WeightGainImg from "../images/diet_icons/Weight Loss (2).png"
import DietTable from "../images/dietTable.svg"

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
            <section className="section1">
                <Container>
                    <div className={style.sectionBox}>
                        <Row className={style.sectionBoxRow}>
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
            <section className={style.section2}>
                <Container>
                    <Row>
                        <Col xs={12} md={10} className="order-md-1">
                            <div className={style.sectionBox}>
                                <h2 className="mb-5">Dt. Gauri Anand</h2>
                                <p>
                                    Dt. Gauri Anand is a Clinical Nutritionist
                                    with a masters degree in food and nutrition.
                                    She is working as a diabetic educator,
                                    specialising in Diabetes Mellitus.{" "}
                                </p>
                                <p>
                                    Her main goal is to change the people’s
                                    lifestyle into a fit and healthy one. She
                                    looks forward to inspire people for stepping
                                    into a healthy routine.{" "}
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={2} className="text-right order-md-0">
                            <img
                                src={aboutMe}
                                alt=""
                                className={style.aboutMe}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={style.section3}>
                <Container>
                    <Row>
                        <Col
                            xs={12}
                            md={2}
                            className={
                                "d-flex flex-column justify-content-between"
                            }
                        >
                            <div>
                                <h2 className="mb-4 mb-md-5">
                                    Diet Plans
                                    <br />
                                    <span style={{ color: "#008465" }}>
                                        We Offer
                                    </span>
                                    <br />
                                </h2>
                                <p>
                                    Eat without worying as our diet plans our
                                    customised to your condition
                                </p>
                            </div>
                            <div className="d-none d-md-block">
                                <img
                                    src={DietTable}
                                    alt=""
                                    style={{
                                        position: "relative",
                                        width: "18rem",
                                        right: "10rem",
                                        bottom: "2rem",
                                    }}
                                />
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            md={10}
                            className="my-5 my-md-0"
                            style={{ paddingLeft: "0px", paddingRight: "0px" }}
                        >
                            <div className={style.dietCardOuter}>
                                <div className={style.dietCardInner}>
                                    <DietCard
                                        heading="Weight Lost"
                                        text="Our custom weight lost programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                    />
                                    <DietCard
                                        heading="Weight Gain"
                                        text="Our custom weight gain programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                    />
                                    <DietCard
                                        heading="PCOD/PCOS"
                                        text="Our custom weight lost programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                    />
                                    <DietCard
                                        heading="Diabetes Mellitus"
                                        text="Our custom weight lost programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                        cardWidth="20rem"
                                    />
                                    <DietCard
                                        heading="Pregnancy / Lactation"
                                        text="Our custom weight lost programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                        cardWidth="22rem"
                                    />
                                    <DietCard
                                        heading="Diet For Constipation"
                                        text="Our custom weight lost programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                        cardWidth="21rem"
                                    />
                                    <DietCard
                                        heading="Diet for Cholestrol / Blood Pressure manangment"
                                        text="Our custom weight lost programs can help you reach your goal fast"
                                        icon={WeightGainImg}
                                        cardWidth="24rem"
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} className={"d-block d-md-none"}>
                            <img
                                src={DietTable}
                                alt=""
                                style={{
                                    position: "relative",
                                    width: "18rem",
                                    right: "10rem",
                                    bottom: "2rem",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

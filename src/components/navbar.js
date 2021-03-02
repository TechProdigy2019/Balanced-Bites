import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import navbarStyles from "./navbar.module.css"
import { Container } from "react-bootstrap"

const Mainnav = () => {
    return (
        <Navbar className={`custom-navbar` || navbarStyles.customNavbar}>
            <Container>
                <Link to="/">
                    <Navbar.Brand as="span">
                        <img
                            alt="Balanced Bites By Gauri Logo"
                            src="https://api.balancedbitesbygauri.com/wp-content/uploads/2021/02/Group-14.png"
                            height="50px"
                        />
                    </Navbar.Brand>
                </Link>
                <Nav className="ml-auto d-none d-lg-flex">
                    <Link to="/about">
                        <Nav.Link as="span" className={navbarStyles.navLink}>
                            About
                        </Nav.Link>
                    </Link>
                    <Link to="/social">
                        <Nav.Link as="span" className={navbarStyles.navLink}>
                            Social
                        </Nav.Link>
                    </Link>
                    <Link to="/blog">
                        <Nav.Link as="span" className={navbarStyles.navLink}>
                            Blog
                        </Nav.Link>
                    </Link>
                </Nav>
            </Container>
            <header className="d-block d-lg-none">
                {/* <input type="checkbox" id="toggle" style="display:none;" />
                <label class="toggle-btn toggle-btn__cross" for="toggle">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </label> */}
                <div className="dot-menu">
                    <input
                        id="toggle"
                        type="checkbox"
                        style={{ display: "none" }}
                        className="dot-menu__checkbox"
                    />
                    <label
                        for="toggle"
                        className="toggle-btn toggle-btn__cross dot-menu__label"
                    >
                        <span>Menu</span>
                    </label>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact me</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Navbar>
    )
}

export default Mainnav

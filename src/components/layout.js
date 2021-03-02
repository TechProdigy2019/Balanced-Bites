import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Mainnav from "./navbar"
import Container from "react-bootstrap/Container"
import "@fontsource/raleway"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/600.css"
import "@fontsource/raleway/700.css"
import "@fontsource/playfair-display"
import "@fontsource/playfair-display/600.css"
import "@fontsource/playfair-display/700.css"
import "@fontsource/playfair-display/800.css"
import "@fontsource/playfair-display/900.css"

const Layout = ({ isHomePage, children }) => {
    const {
        wp: {
            generalSettings: { title },
        },
    } = useStaticQuery(graphql`
        query LayoutQuery {
            wp {
                generalSettings {
                    title
                    description
                }
            }
        }
    `)

    return (
        <div>
            <Mainnav></Mainnav>

            {/* <header className="global-header">
{isHomePage ? (
<h1 className="main-heading">
  <Link to="/">{parse(title)}</Link>
</h1>
) : (
<Link className="header-link-home" to="/">
  {title}
</Link>
)}
</header> */}

            <main>{children}</main>

            {/* <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
    {` `}
    And <a href="https://wordpress.org/">Tech Prodigy Co </a>
</footer> */}
        </div>
    )
}

export default Layout

// import { StaticQuery, graphql, Link } from "gatsby"
import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import "react-bulma-components/dist/react-bulma-components.min.css"
import Navbar from "react-bulma-components/lib/components/navbar"
// import Img from "gatsby-image"
// import { Image, Transformation } from "cloudinary-react"
// import BackgroundImage from "gatsby-background-image"
import HeaderImg from "./HeaderImg"

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = React.useState(false)
  // Header.toggleMenu = () => setShowMenu(!showMenu)
  // Header.handleClickOutside = () => setShowMenu(false)
  //  const menuActive = Header.showMenu ? "is-active" : ""
  //  const burgerActive = Header.showMenu ? "is-active" : ""

  return (
    <StaticQuery
      query={graphql`
        query {
          wordpressSiteMetadata {
            name
          }
          wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
            items {
              title
              object_slug
            }
          }
          wordpressWpMedia(localFile: {}) {
            id
            media_details {
              width
              height
              file
            }
            localFile {
              id
              childImageSharp {
                sizes(maxWidth: 1200) {
                  originalImg
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      `}
      render={data => (
        <header
          style={{
            padding: `0 1.08rem 0`,
          }}
        >
          {/*<Image publicId="tlmusic_logo_sepia2.wdp">
        <Transformation effect="sepia:80" quality="auto:eco" radius="30" />
      </Image>*/}

          {/*<Img
        sizes={data.wordpressWpMedia.localFile.childImageSharp.sizes}
        alt={data.wordpressWpMedia.id}
        style={{ maxHeight: 450 }}
      />*/}

          <HeaderImg
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              //  padding: `.45rem 1.0875rem .45rem 1.0875rem`,
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
            }}
          />
          {/*  <nav className="navbar">
              <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                  Timeline
                </Link>
                <div
                  className={`navbar-burger burger ${burgerActive}`}
                  onClick={Header.toggleMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className={`navbar-menu ${menuActive}`}>
                <div
                  className="navbar-start"
                  style={{
                    //  src: { logo },
                    margin: `0 auto`,
                    width: "100%",
                    maxWidth: 960,
                    //  padding: `.45rem 1.0875rem .45rem 1.0875rem`,
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                  }}
                >
                  <h1 style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}>
                    <Link
                      className="navbar-link"
                      to="/"
                      style={{
                        textDecoration: `none`,
                        color: "#b2b1b1",
                      }}
                      onClick={Header.toggleMenu}
                    >
                      {data.wordpressSiteMetadata.name}
                    </Link>
                  </h1>

                  <h1 style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}>
                    <Link
                      to="/page-2"
                      onClick={Header.toggleMenu}
                      style={{
                        color: "#b2b1b1",
                        textDecoration: `none`,
                      }}
                    >
                      Reviews
                    </Link>
                  </h1>
                  <h1 style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}>
                    <Link
                      className="navbar-link"
                      to="/page-3"
                      onClick={Header.toggleMenu}
                      style={{
                        color: "#b2b1b1",
                        textDecoration: `none`,
                      }}
                    >
                      Shows
                    </Link>
                  </h1>
                  <ul
                    style={{
                      listStyle: `none`,
                      display: `flex`,
                      margin: 0,
                      width: "30%",
                      justifyContent: "space-between",
                    }}
                  >
                    {data.wordpressWpApiMenusMenusItems.items.map(item => (
                      <li key={item.object_slug} style={{ margin: `0 10px` }}>
                        <Link
                          to={`/${item.object_slug}`}
                          style={{
                            color: "#b2b1b1",
                            textDecoration: `none`,
                            fontFamily: `sans-serif`,
                          }}
                        >
                          <h1
                            style={{
                              margin: 0,
                              fontSize: "1rem",
                              fontWeight: "bold",
                            }}
                          >
                            {item.title}
                          </h1>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>*/}

          <Navbar
            //  color={select("Color", colors)}
            //  fixed={select("Fixed", {
            //   default: null,
            //   top: "top",
            //   bottom: "bottom",
            // })}
            active={showMenu}
            transparent={false}
          >
            <Navbar.Brand>
              <Navbar.Item renderAs="div">
                <Link className="navbar-item" to="/">
                  Timeline
                </Link>
              </Navbar.Item>
              <Navbar.Burger
                active={showMenu}
                onClick={() => setShowMenu(!showMenu)}
              />
            </Navbar.Brand>
            <Navbar.Menu active={showMenu}>
              <Navbar.Container>
                <Navbar.Item href="#">
                  <h1
                    style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}
                  >
                    <Link
                      to="/page-2"
                      //  onClick={Header.toggleMenu}
                      style={{
                        color: "#b2b1b1",
                        textDecoration: `none`,
                      }}
                    >
                      Reviews
                    </Link>
                  </h1>
                </Navbar.Item>
              </Navbar.Container>
              <Navbar.Container>
                <Navbar.Item href="#">
                  <h1
                    style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}
                  >
                    <Link
                      to="/page-3"
                      onClick={Header.toggleMenu}
                      style={{
                        color: "#b2b1b1",
                        textDecoration: `none`,
                      }}
                    >
                      Shows
                    </Link>
                  </h1>
                </Navbar.Item>
              </Navbar.Container>
              <Navbar.Container>
                <Navbar.Item href="#">
                  <ul
                    style={{
                      listStyle: `none`,
                      display: `flex`,
                      margin: 0,
                      width: "30%",
                      justifyContent: "space-between",
                    }}
                  >
                    {data.wordpressWpApiMenusMenusItems.items.map(item => (
                      <li key={item.object_slug} style={{ margin: `0 10px` }}>
                        <Link
                          to={`/${item.object_slug}`}
                          style={{
                            color: "#b2b1b1",
                            textDecoration: `none`,
                            fontFamily: `sans-serif`,
                          }}
                        >
                          <h1
                            style={{
                              margin: 0,
                              fontSize: "1rem",
                              fontWeight: "bold",
                            }}
                          >
                            {item.title}
                          </h1>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Navbar.Item>
              </Navbar.Container>
              <Navbar.Container position="end">
                <Navbar.Item href="#">At the end</Navbar.Item>
              </Navbar.Container>
              <Navbar.Container position="end">
                <Navbar.Item href="#">4th</Navbar.Item>
              </Navbar.Container>
            </Navbar.Menu>
          </Navbar>
        </header>
      )}
    />
  )
}

export default Header

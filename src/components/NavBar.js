import React from "react"
import Link from "gatsby-link"
// import { Navbar } from "react-bulma-components/full"

class NavBar extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const data = this.props.data
    const menuActive = this.state.showMenu ? "is-active" : ""
    const burgerActive = this.state.showMenu ? "is-active" : ""
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Timeline
          </Link>
          <div
            className={`navbar-burger burger ${burgerActive}`}
            onClick={this.toggleMenu}
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
                onClick={this.toggleMenu}
              >
                {data.wordpressSiteMetadata.name}
              </Link>
            </h1>

            <h1 style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}>
              <Link
                to="/page-2"
                onClick={this.toggleMenu}
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
                onClick={this.toggleMenu}
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
      </nav>
    )
  }
}

export default NavBar

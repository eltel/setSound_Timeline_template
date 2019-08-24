// import { StaticQuery, graphql, Link } from "gatsby"
import { StaticQuery, graphql, Link } from "gatsby"
import { Navbar } from "react-bulma-components/full"
import React from "react"
// import Img from "gatsby-image"
// import { Image, Transformation } from "cloudinary-react"
// import BackgroundImage from "gatsby-background-image"
import HeaderImg from "./HeaderImg"

// import NavBar from "./NavBar"

const Header = ({ siteTitle }) => (
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
          padding: `0 1.08rem 1rem`,
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
        {/*THIS ONE
        <Image
          cloudName="setstate"
          publicId="tlmusic_logo_sepia2.jpg"
          style={{ height: "18vh", width: "100%" }}
        >
          <Transformation effect="cartoonify" quality="auto:eco" radius="4" />
        </Image> */}

        {/*  <Image
    cloudName="setstate"
    publicId="tlmusic_logo_sepia2.jpg"
    style={{ height: "18vh", width: "100%" }}
  >
    <Transformation effect="cartoonify" quality="auto:eco" radius="4" />
  </Image>*/}

        {/*<HeaderImg />*/}

        {/*<div
        style={{
          src: { logo },
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {data.wordpressSiteMetadata.name}
          </Link>
        </h1>
        <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
          {data.wordpressWpApiMenusMenusItems.items.map(item => (
            <li key={item.object_slug} style={{ margin: `0 10px` }}>
              <Link
                to={`/${item.object_slug}`}
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  fontFamily: `sans-serif`,
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>*/}
        <div
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
              to="/"
              style={{
                textDecoration: `none`,
                color: "#b2b1b1",
              }}
            >
              {data.wordpressSiteMetadata.name}
            </Link>
          </h1>
          <h1 style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}>
            <Link
              to="/page-2"
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
              to="/page-3"
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
                    style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}
                  >
                    {item.title}
                  </h1>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    )}
  />
)

export default Header

// import { StaticQuery, graphql, Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import React from "react"
// import Img from "gatsby-image"
// import { Image, Transformation } from "cloudinary-react"
// import BackgroundImage from "gatsby-background-image"
import HeaderImg from "./HeaderImg"
import NavBar from "./NavBar"

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
        <NavBar.js data={data} />
      </header>
    )}
  />
)

export default Header

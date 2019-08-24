import React from "react"
import { graphql } from "gatsby"
import "../app.scss"
// import "react-bulma-components/full"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{data.wordpressPage.title}</h1>
    {/*  <Img
        sizes={data.wordpressPage.featured_media.localFile.childImageSharp.sizes}
        alt={data.wordpressPage.title}
        style={{ maxHeight: 450, marginBottom: "1rem" }}
      />*/}

    <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query {
//     wordpressPage(title: { eq: "Home" }) {
//       id
//       content
//     }
//   }
// `

export const query = graphql`
  query {
    wordpressPage(title: { eq: "Home" }) {
      id
      content
      featured_media {
        localFile {
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
  }
`

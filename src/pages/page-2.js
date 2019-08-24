import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressPost.edges.map(post => (
        <li
          style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
          key={post.node.slug}
        >
          <Link
            to={`/post/${post.node.slug}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
          >
            {/*  <Img
              sizes={post.node.feat_img.localFile.childImageSharp.sizes}
              alt={post.node.title}
              style={{ width: "25%", marginRight: 20 }}
            />*/}
            <Img
              sizes={post.node.featured_media.localFile.childImageSharp.sizes}
              alt={post.node.title}
              style={{ width: "25%", marginRight: 20 }}
            />

            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.title }}
                style={{ marginBottom: 0 }}
              />
              {/*<p style={{ margin: 0, color: "grey" }}>
              Written by {post.node.author.name} on {post.node.date}
            </p>

            <div
              style={{ margin: 0, color: "grey" }}
              dangerouslySetInnerHTML={{ __html: post.node.acf.excerpt }}
            />

            */}

              <div
                style={{ margin: 0, color: "grey" }}
                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          slug
          author {
            name
          }
          date(formatString: "DD MMMM, YYYY")
          featured_media {
            id
            localFile {
              childImageSharp {
                id
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     allWordpressPost {
//       edges {
//         node {
//           title
//           slug
//           author {
//             name
//           }
//           date(formatString: "DD MMMM, YYYY")
//           featured_media {
//             id
//             localFile {
//               childImageSharp {
//                 id
//                 sizes {
//                   aspectRatio
//                   src
//                   srcSet
//                   sizes
//                   originalImg
//                 }
//               }
//             }
//           }
//           acf {
//             excerpt
//           }
//         }
//       }
//     }
//   }
// `

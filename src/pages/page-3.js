import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<span className="cat">
      {data.allWordpressPost.categories &&
        data.allWordpressPost.categories.category.name === "Reviews" &&
        data.allWordpressPost.categories.map(
          category => `${category.name}, `,
          console.log(data.allWordpressPost.categories.name)
        )}
    </span>
    <span className="cat">
      {data.edges.node.categories &&
        data.edges.node.categories.map(category => `${category.name}, `)}
    </span>

    */}

    <div className="blog-grids">
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug} className="grid">
          <div className="entry-media">
            {node.featured_media && (
              <Img
                src={node.featured_media.localFile.childImageSharp.sizes.src}
                sizes={node.featured_media.localFile.childImageSharp.sizes}
                alt="blog_image_one"
                className="img-fluid"
              />
            )}
          </div>
          <div className="entry-body">
            <span className="cat">
              {node.categories &&
                node.categories.map(category => `${category.name}, `)}
            </span>
            <h3>
              <Link
                to={`/blog/${node.slug}`}
                dangerouslySetInnerHTML={{ __html: node.title }}
              />
            </h3>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <div className="read-more-date">
              <Link to={`/blog/${node.slug}`}>Read More..</Link>
              <span className="date">{node.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
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

export default ThirdPage

export const query = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          date(formatString: "DD, MMM YYYY")
          title
          excerpt
          author {
            name
          }
          categories {
            id
            name
          }
          featured_media {
            localFile {
              childImageSharp {
                id
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          slug
        }
      }
    }
  }
`
//
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
//                 sizes(maxWidth: 1200) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//           }
//           excerpt
//           categories {
//             id
//             name
//           }
//         }
//       }
//     }
//   }
// `

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

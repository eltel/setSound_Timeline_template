import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <h1
      style={{
        textAlign: "center",
        color: "rgb(178, 177, 177)",
        fontSize: "1rem",
      }}
    >
      {data.wordpressPost.title}
      {console.log("image", data.wordpressPost)}
    </h1>

    {/*<p>
      Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
    </p>*/}
    {/*<Img
      sizes={data.wordpressPost.acf.feat_img.localFile.childImageSharp.sizes}
      alt={data.wordpressPost.title}
      style={{ maxHeight: 450 }}
    />*/}

    <Img
      sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes}
      alt={data.wordpressPost.title}
      style={{ maxHeight: 450 }}
    />

    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "DD, MMMM, YYYY")
      author {
        name
      }
      featured_media {
        id
        localFile {
          childImageSharp {
            id
            sizes {
              aspectRatio
              src
              srcSet
              sizes
              originalImg
            }
          }
        }
      }
    }
  }
`

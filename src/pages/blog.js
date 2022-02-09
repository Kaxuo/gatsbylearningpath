import { graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"

const Blog = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <div style={{ padding: "1rem 10rem" }}>
      <h1 style={{ textAlign: "center" }}>Latest Post</h1>
      <br />
      <br />
      {edges.map(post => (
        <div style={{ textAlign: "center" }} key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}> Read more </Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  )
}
export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`
export default Blog

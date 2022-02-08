import React from "react"
import Link from "gatsby-link"
import { graphql, useStaticQuery } from "gatsby"

const Template = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query BlogPostbypath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
          author
          date
        }
      }
    }
  `)
  return (
    <>
      <Link to="blog"> Go Back</Link>
      <hr />
      <h1>content</h1>
      <h4>posted by</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export default Template

import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, author, date },
      html,
    },
  } = data
  return (
    <>
      <Link to="blog"> Go Back</Link>
      <hr />
      <h1>{title}</h1>
      <h4>posted by {author} </h4>
      <h4>date : {date}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  )
}

export const query = graphql`
  query BlogPostbypath($pagePath: String!) {
    markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template

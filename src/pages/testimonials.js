import React from 'react'
import Link from 'gatsby-link'

const Testimonial = ({ node }) => (
  <li>
    <p>&quot;{node.quote.text}&quot;</p>
    <p>{node.customername.text} - {node.location.text}</p>
    <hr/>
  </li>
)

const TestimonialsPage = ({ data }) => (
  <div>
    <h1>This is the testimonials</h1>
    <Link to="/">Go to Home</Link>
    <ul>
    {data.allPrismicTestimonial.edges.map((edge) => <Testimonial node={edge.node.data} />)}
    </ul>
  </div>
)

export default TestimonialsPage

export const pageQuery = graphql`
  query TestimonialsQuery {
    allPrismicTestimonial(filter: {lang: {eq: "en-gb"}}) {
      edges {
        node {
          data {
            quote {
              text
            }
            customername {
              text
            }
            location {
              text
            }
          }
        }
      }
    }
  }
`
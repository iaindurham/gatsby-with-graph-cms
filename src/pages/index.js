import React from 'react'
import Link from 'gatsby-link'

const Reason = ({ reason }) => (
  <li dangerouslySetInnerHTML={{__html: reason.html}} />
)

const IndexPage = ({ data }) => (
  <div>
    <section>
      <h1>{data.prismicLandingpage.data.title.text}</h1>
      <p dangerouslySetInnerHTML={{__html: data.prismicLandingpage.data.introblurb.html}} />
      <button>{data.prismicLandingpage.data.introcalltoaction.text}</button>
      <div>
        <Link to="/testimonials/">Testimonials</Link>
      </div>
    </section>
    <section>
      <h2>{data.prismicLandingpage.data.whysharecover.text}</h2>
      <ul>
        {data.prismicLandingpage.data.reasons.map((reason) => <Reason reason={reason.reason} />)}
      </ul>
    </section>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query LandingPageQuery {
    prismicLandingpage {
      data {
        title {
          text
        }
        introblurb {
          html
        }
        introcalltoaction {
          text
        }
        whysharecover {
          text
        }
        reasons {
          reason {
            html
          }
        }
      }
    }
  }
`
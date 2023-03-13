import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle='About Marmalade AI, Inc.'>
      <Seo title="About" description="About Marmalade AI, Inc." />
      <br />
      <p>Hi there! We're the proud operators of this site, built with Gatsby and Tailwind. Original development work by Justin Blake and Jim Tyhurst. Updated in 2023 by Craig Fisk.</p>

      <section id="founders" className="pt-4">
      <div className="container mx-auto">
        <h2>Founders</h2>
        <div className="container">
          <p>
            Innovation is key to the future.
          </p>
          <p>
            Marmalade AI started with user research into the problems people have with
            networking. We decided to try to make it better.
          </p>
        </div>
        <div className="grid grid-cols-2">
            <div>
              <StaticImage
                src="../images/craig_fisk_headshot_150.jpg"
                alt="Photo of Craig Fisk."
                title="Craig Fisk, CEO"
              />
              <h3>Craig Fisk</h3>
              <p className="cardSubHeading text-sm slate">CEO<br/>
                Series A mobile CRM, new software products/channels at Intel.
                Chicago Booth MBA. (San Jose, CA).</p>
            </div>
            <div>
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot_150.jpg"
                alt="Photo of Jim Tyhurst."
                title="Jim Tyhurst, CTO"
              />
              <h3>Jim Tyhurst</h3>
              <p className="cardSubHeading text-sm">CTO< br/>
                Software architect, Machine Learning / Natural Language
                Processing (ML/NLP), Object Computing, Inc. UCLA PhD. (Portland, OR).</p>
            </div>
            <div>
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
                src="../images/vivian_tran_headshot_150.jpg"
                alt="Photo of Vivian Tran, Marketing Advisor."
                title="Vivian Tran, Marketing Advisor"
              />
              <h3>Vivian Tran</h3>
              <p className="cardSubHeading text-sm">Marketing Advisor<br />
              New segment marketing, healthcare focus marketing manager.
              UC Berkeley (Berkeley, CA).</p>
            </div>
            <div>
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
                src="../images/michael_porto_headshot_150.jpg"
                alt="Photo of Michael Porto, Product Advisor."
                title="Michael Porto, Product Management Advisor"
              />
              <h3>Michael Porto</h3>
              <p className="cardSubHeading text-sm">Product Management Advisor<br/>
              Big data, mobile, ML, Intel, Wells Fargo, EY. Princeton MS CS (Charlotte, NC).</p>
            </div>
        </div>
      </div>
    </section>
   
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
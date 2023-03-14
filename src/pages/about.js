import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Marmalade AI Networking - About</title>
    <meta 
      name="description"
      content="Marmalade AI - About 
      Marmalade AI, Inc. formed as a result on doing user research into the common problems people in various career 
      stages and professions encountered in networking: 
      1) Missed opportunity: You go to an event and learn later there was someone there you should have met. 
      2) Staying in touch: People you know from the past have no idea what you are doing now. They could be helpful, but they don't know. 
      3) Inefficiency: Networking can be powerful. There's only so much time you can put into it, however, because of efficiency. 
      We found each other through user research, then connected remotely and developed a prototype in Figma.
      Software development prototyping was done in React, then Flutter, and then finally Vue. We wanted a 
      component-orient software framework that be reponsive on phones, as well as laptops and desktops. We
      did not know what the backend data schema should look like, but did know that we did not want to develop
      an authentication framework. Consequently, Google Cloud Platform, especially Firebase and Firestore, fit
      the bill. 
      One of the co-founders, Craig Fisk (CEO), had raised classic Series A for a previous company. We wanted 
      to be able to get product available to solve problems in networking first, and then see where that led."
    />
  </>
);

const AboutPage = () => {
  return (
    <Layout pageTitle='About Marmalade AI, Inc.'>
      <Seo title="About Marmalade AI, Inc." />
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

// export const Head = () => <Seo title="About Me" />

export default AboutPage
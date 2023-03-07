import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
// import Card from '../components/Card';


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
        {/* mb-8 = 2rem of margin added to the bottom 
            w-32 = width 8rem
            mt-0 = margin top 0 px
            mb-4 = margin bottom 4 px
        */}
        <div className="grid grid-cols-2">
        {/* <div className="pt-8 grid grid-cols-1 flex-col -mx-3 md:grid-cols-2"> */}
          {/* <div className="flex-1 px-3"> */}
            <div>
            {/* <Card className="mb-4"> */}
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg"
                src="../images/craig_fisk_headshot_150.jpg"
                alt="Photo of Craig Fisk."
                title="Craig Fisk, CEO"
              />
              <h3>Craig Fisk</h3>
              {/* <h3 className="mt-0">Craig Fisk</h3> */}
              <p className="cardSubHeading text-sm slate">CEO<br/>
                Series A mobile CRM, new software products/channels at Intel.
                Chicago Booth MBA. (San Jose, CA).</p>
            </div>
          {/* </div> */}
          {/* <div className="flex-1 px-3"> */}
            <div>
            {/* <Card className="mb-4"> */}
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot_150.jpg"
                alt="Photo of Jim Tyhurst."
                title="Jim Tyhurst, CTO"
              />
              <h3>Jim Tyhurst</h3>
              {/* <h3 className="mt-0">Jim Tyhurst</h3> */}
              <p className="cardSubHeading text-sm">CTO< br/>
                Software architect, Machine Learning / Natural Language
                Processing (ML/NLP), Object Computing, Inc. UCLA PhD. (Portland, OR).</p>
            </div>
          {/* </div> */}
          {/* <div className="flex-1 px-3"> */}
            <div>
            {/* <Card className="mb-4"> */}
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
                src="../images/vivian_tran_headshot_150.jpg"
                alt="Photo of Vivian Tran, Marketing Advisor."
                title="Vivian Tran, Marketing Advisor"
              />
              <h3>Vivian Tran</h3>
              {/* <h3 className="mt-0">Vivian Tran</h3> */}
              <p className="cardSubHeading text-sm">Marketing Advisor<br />
              New segment marketing, healthcare focus marketing manager.
              UC Berkeley (Berkeley, CA).</p>
            </div>
          {/* </div> */}
          {/* <div className="flex-1 px-3"> */}
            <div>
            {/* <Card className="mb-4"> */}
              <StaticImage
                // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
                src="../images/michael_porto_headshot_150.jpg"
                alt="Photo of Michael Porto, Product Advisor."
                title="Michael Porto, Product Management Advisor"
              />
              <h3>Michael Porto</h3>
              {/* <h3 className="mt-0">Michael Porto</h3> */}
              <p className="cardSubHeading text-sm">Product Management Advisor<br/>
              Big data, mobile, ML, Intel, Wells Fargo, EY. Princeton MS CS (Charlotte, NC).</p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>



    
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
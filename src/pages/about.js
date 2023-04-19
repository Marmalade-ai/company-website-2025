import * as React from 'react'
import Layout from '../components/layout'
import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const Head = () => (
  <> 
    <meta lang="en" />
    <meta charSet="utf-8" />
    <title>Professional Networking virtually - Why?</title>
    <meta 
      name="description"
      content="Why do this? We started with user research into the common problems people in various 
      career stages and professions encounter in networking:
      1) Missed opportunity: You go to an event and learn later there was someone there you should have met.
      2) Staying in touch: People you know from the past have no idea what you are doing now. They could be helpful, but they don't know.
      3) Inefficiency: Networking can be powerful. But there's only so much time you can put into it.
      We found each other through user research into networking, then connected remotely, and developed a prototype in Figma.
      Software development prototyping for a web subscription service was done in Vue with a GCP backend. We wanted an exceptionally easy-to-use,
      &quot;responsive&quot; interaction that could work equally well on phones, laptops, and desktops. We wanted
      to see how we could solve problems like the above in networking, and then see where that led."
    />
  </>
);

const AboutPage = () => {
  return (

    <Layout>
      <main>
      <body>
        <h1 className="pt-3 pb-3">About Marmalade AI, Inc.</h1>
        <p>Hi there! We're the proud operators of this site. Original development work by Justin Blake and Jim Tyhurst. 
          Updated in 2023 by Craig Fisk.</p>

        <div class="max-w-screen-lg mx-auto">
          <h2 className="pt-3 pb-3">Why?</h2>
          <div>
            <p>Why do this? We started with user research into the common problems people encounter in networking:</p><br/>
            <ol class="list-decimal list-inside">
            <li><u>Missed opportunity</u>: You go to an event and learn later there was someone there you should have met.</li>
            <li><u>Staying in touch</u>: People you know from the past have no idea what you are doing now. They could be helpful, but they don't know.</li>
            <li><u>Inefficiency</u>: Networking can be powerful. But there's only so much time you can put into it.</li>
            </ol>
            <br/>
            <p>We found each other through user research into networking, connected remotely, and developed a prototype in Figma.
            Our development aimed for easy-to-use, <i>responsive</i> interaction that could work equally well on phones, laptops, and desktops.
            </p>
          </div>
        </div>
        <h2 className="pt-3 pb-3">Founders</h2>

        <div class="grid gap-4 grid-cols-2 grid-rows-2">

          <div>
            <figure class="w-48">
              <StaticImage
                src="../../images/craig_fisk_headshot_150.jpg"
                alt="Photo of Craig Fisk."
                title="Craig Fisk, CEO"
                width="150"
                height="150"
              />
              <figcaption className="text-sm py-3">
                <b>Craig Fisk</b>, CEO<br/>
                Series A mobile CRM, Intel software products / channels.
                Univ. Chicago Booth MBA. (San Jose, CA).
              </figcaption>
            </figure>
          </div>  

          <div>
            <figure class="w-48">
              <StaticImage
                src="../../images/jim_tyhurst_headshot_150.jpg"
                alt="Photo of Jim Tyhurst."
                title="Jim Tyhurst, CTO"
                width="150"
                height="150"
              />
              <figcaption className="text-sm py-3">
                <b>Jim Tyhurst</b>, CTO<br/>
                Software architect, ML/NLP, Python, GCP, Object Computing, Inc. UCLA PhD. (Portland, OR).
              </figcaption>
            </figure>
          </div>  

          <div>
            <figure class="w-48">
              <StaticImage
                src="../../images/vivian_tran_headshot_150.jpg"
                alt="Photo of Vivian Tran, Marketing Advisor."
                title="Vivian Tran, Marketing Advisor"
                width="150"
                height="150"
              />
            <figcaption className="text-sm py-3">
              <b>Vivian Tran</b>, Marketing Advisor<br />
              New segment marketing, healthcare marketing manager.
              UC Berkeley (Berkeley, CA).
            </figcaption>
          </figure> 
          </div>  
          
          <div>
            <figure class="w-48">
              <StaticImage
                src="../../images/michael_porto_headshot_150.jpg"
                alt="Photo of Michael Porto, Product Advisor."
                title="Michael Porto, Product Management Advisor"
                width="150"
                height="150"
              />
              <figcaption className="text-sm py-3">
                <b>Michael Porto</b>, Product Advisor<br/>
                Big data, mobile, machine learning, Intel, Wells Fargo, EY. Princeton MS CS (Charlotte, NC).
              </figcaption>
            </figure>
          </div>

        </div>

        <div className="container flex flex-col items-center">
          <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule a demo (Zoom)</button>
        </div>


      </body>
      </main>
    </Layout>

  )
}

export default AboutPage
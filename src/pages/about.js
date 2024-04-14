import * as React from 'react'
import Layout from '../components/layout'
// import { navigate } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

export const Head = () => (
  <> 
    <html lang="en" />
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
        
        <p>
           Last reviewed: <time dateTime="2024-4-11">April 11, 2024.</time>
        </p>
        <br/>
        <div class="max-w-screen-lg mx-auto">
          <div>
            <p>Hi there! We're the proud operators of this site.</p>
            <br/>
            <p>Why do this? We started with user research into issues people encounter in networking:</p><br/>
            <p>By far the biggest problem: <u><b>Inefficiency</b></u>. Networking can be powerful. But there's only so much time you can put into it. 
            It takes a lot of work for meager results. It just seemed like  there had to be a better way with AI.</p>
            <br/>

            <p>Remote work blossomed initially in the pandemic. More recently, many companies require returning to the office.
              However, remote has levelled off at 28% of all work; a big increase and it is no longer going up or down. 
            </p>
            <br/>

            <p>The <b>big picture</b> is that we need to dramatically reduce our ecological footprint and increase our ability to work with different cultures. 
              It just takes time to assimilate a change this big into work. We want to help that to happen.</p>
            <br/>
            <p>We found each other through user research into networking, connected remotely, developed a prototype, and then started working on the application.
              Sounds good. However, there have been hiccups. Venture capital has dried up. And the tech industry discovered it could 
              increase profits by cutting workforces.
              Meanwhile, people individually tailor hundreds of applications and get crickets. On the flip side, perfect resumes get past the ATS to 
              deluge hiring managers. 
              </p>
          </div>
        </div>

      </body>
      </main>
    </Layout>

  )
}

export default AboutPage

import * as React from 'react'
import Layout from '../components/layout'

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>About Marmalade AI peer groups</title>
    <meta 
      name="description"
      content="We started with user research into the common problems people in various 
      career stages and professions encounter with peer groups:
      1) Missed opportunity: You go to an event, for example, and later learn there was someone there you should have met.
      2) Staying in touch: People you know from the past have no idea what you are doing now. They could be helpful, but they don't know.
      3) Inefficiency: Peer groups can be powerful. But there's only so much time you can put into it.
      We found each other through our research, connected remotely, and developed a prototype online.
      The beta runs a Vue front end with a GCP backend and cloud functions. We wanted an easy-to-use,
      &quot;responsive&quot; and ubiquitous interaction that could work on phones, laptops, and desktops. We wanted
      to see how we could solve problems like the above, and then see where that led."
    />
  </>
);

const AboutPage = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">About Marmalade AI, Inc.</h1>
        <article className="pt-5">
          <div className="mx-auto">
            <p>
              Last reviewed: <time dateTime="2025-1-1">January 1, 2025.</time>
            </p>
            <p>-</p>
            <p>Hi there! We're the company behind Marmalade AI.
            </p>
            <br/>
            <p>Why do this? To use AI to do something useful for people:</p><br/>
            <p>The problem: <i>Inefficiency</i>! Peer groups can be powerful for staying up-to-date. But there is only so much time you can put into it? 
               It can be a lot of work for meager results. It just seemed like there had to be a better way with AI.
            </p>
            <br/>

            <p>The <b>big picture</b>: We need to reduce our ecological footprint and 
            increase our connection with people. 
              It just takes time to assimilate a change this big. We want to help make it happen.
            </p>
            <br/>
            {/* <p>We found each other through user research into networking, connected remotely, developed a prototype, and then started working on the application.
              Sounds good. However, there have been hiccups. Venture capital has dried up. And the tech industry discovered it could 
              increase profits by cutting workforces.
              Meanwhile, people individually tailor hundreds of applications and get crickets. On the flip side, perfect resumes get past the ATS to 
              deluge hiring managers. 
            </p> */}
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default AboutPage

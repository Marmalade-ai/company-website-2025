import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>About</title>
    <meta 
      name="description"
      content="People have lots of problems with networking:
      They attend an event and later find out there was someone they should have met.
      Also, people in your past have no idea what you are doing now.
      Networking is great but it is so random. There's only 24 hours in the day.
      Co-founders of Marmalade AI found each other like this and thought they could work together 
      to make it better for everyone else. Then AI/LLMs/MCP, yada, yada, happened
      So Marmalade AI is really a platform for trying out better networking.  
      The Beta has a Vue frontend, a Google Cloud backend, and uses cloud functions."
    />
  </>
);

const AboutPage = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">About</h1>
        <article className="pt-5">
          <div className="mx-auto">
            <p>Hi there! We&apos;re the company behind Marmalade AI.
            </p>
              <div>
                  <StaticImage
                    alt="Marmalade AI gives you a peer network."
                    src="../../images/cartoon_image.jpg"
                  />
              </div>

            <br/>
            <p class="mb-8">A peer network that&apos;s relevant, automatic, and effortless?</p>
            <p>Why do this? Well, it seemed like it should be possible to have great peer networks, 
              learn from others, teach others, and move everything forward.</p><br/>
            <p>Networks can be powerful, but there is only so much time for networking. 
               It seemed very inefficient. There had to be a better way.
            </p>
            <br/>

            <p>Also, we really  to learn how to work remotely: it is just more efficient, 
            reduces our ecological footprint, and increases our connection with other people. 
            We want to help make it happen.
            </p>
            <br/>
            <p>
              Last reviewed: <time dateTime="2025-9-16">September 16, 2025.</time>
            </p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default AboutPage

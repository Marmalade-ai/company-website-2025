import * as React from 'react'
import Layout from '../components/layout'

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>About</title>
    <meta 
      name="description"
      content="We started with the problems people encounter with networking:
      You go to an event, and later find out you missed someone you should have met.
      People you know from the past have no idea what you are doing now.
      Networking can be powerful. But there's only 24 hours in the day.
      We found each other through research, connected remotely, and developed a prototype.
      The beta runs Vue with a Google Cloud backend and cloud functions.."
    />
  </>
);

const AboutPage = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">About</h1>
        <article className="pt-5">
          <div className="mx-auto">
            <p>Hi there! We're the company behind Marmalade AI.
            </p>
            <br/>
            <p>Why do this? To use AI to do something useful for people:</p><br/>
            <p>The problem: <b>Network effortlessly</b>! Peer groups are powerful for staying up-to-date, 
            but there is only so much time you can put into it. 
               It is a lot of work for meager results. It just seemed like there had to be a better way with AI.
            </p>
            <br/>

            <p>The <b>big picture</b>: We need to reduce our ecological footprint and 
            increase our connection with people. 
              It takes time to assimilate a change this big. We want to help make it happen.
            </p>
            <br/>
            <p>
              Last reviewed: <time dateTime="2025-1-9">January 9, 2025.</time>
            </p>
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default AboutPage

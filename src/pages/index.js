import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// import Seo from '../components/seo'
import { navigate } from 'gatsby'
import "../styles/global.css"

export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Marmalade Networking</title>
    <meta 
      name="description"
      content="Marmalade AI, Inc. provides an easy way for every specialist in UX design, digital marketing, and machine learning
      to network virtually. It targets people who really need to connect to each other and find traditional
      networking through meetups or one-on-ones, or through online services like Linkedin, TopTal, UpWork, or Indeed
      to be not all that useful, too expensive for the value received, and too time-consuming. Using their profiles, 
      Marmalade AI automatically creates a network of specialists that is virtual, by using NLP (natural language processing) and 
      ML (machine learning) to suggest relevant connections. When, where, and with who you connect is under your 
      control. Marmalade AI is a subscription web-based service in the U.S. on phones, laptops, and desktops."
    />
  </>
);


const IndexPage = () => {
  return (
    <Layout>
    <main><h1>Networking Virtually</h1>
      <p style={{fontFamily: "Sans-serif"}} className="base-text">Marmalade AI introduces <b>networking</b> for specialists that is <b>virtual</b> &mdash; starting
      with specialists in <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b> &mdash; who really need to connect 
      with each other and find traditional networking to be slow and irrelevant. Based on profiles, Marmalade 
        matches specialists with specialists using NLP and machine learning. When, where, and with whom you connect is up to you.
      </p>
      <div className="container flex flex-col items-center">
      <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule a demo over Zoom</button>
      </div>
      <div className="grid grid-cols-2">
        <h3>User profile</h3>
        <h3>Networking virtually</h3>
      </div>
      <div className="grid grid-cols-2">
        <p style={{fontFamily: "Sans-serif"}} className="base-text">Create a profile describing your work.</p>
        <p style={{fontFamily: "Sans-serif"}} className="base-text">Connect with a network of virtual matches.</p>
      </div>
      <div className="grid grid-cols-2">

        <StaticImage
          src="../../images/emily_profile.png" 
          alt="Emily screen from Marmalade AI" 
          width={280}
        />
        <StaticImage
          src="../../images/emily_profiles.png" 
          alt="Profiles from Marmalade AI" 
          width={320}
        />
      </div>
      <h2>Accurate</h2>
      <h3>Your network should reflect what you do</h3>
      <StaticImage
        alt="Marmalade AI gives you a network that reflects you."
        src="../../images/iStockphoto-1220226086-400.jpg"
      />
      <h2>Automatic</h2>
      <h3>Your network should be effortless</h3>
      <StaticImage
        alt="Using your profile, Marmalade AI automatically provides a network that is virtual."
        src="../../images/matching.jpg"
      />
    </main>
    </Layout>
  )
}

// export const Head = () => <Seo title="Home Page" />

export default IndexPage
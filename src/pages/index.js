import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// import Seo from '../components/seo'
import { navigate } from 'gatsby'
import "../styles/global.css"

export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Professional Networking in UX Design, Digital Marketing, and Machine Learning</title>
    <meta 
      name="description"
      content="How do I do professional networking in UX design, digital marketing, and machine learning? The best result
      would be: just have a profile, and automatically create a professional network based on your profile. That is
      what the professional networking subscription service by Marmalade AI, Inc. does. Marmalade provides an easy way for every specialist in UX design, digital marketing, and machine learning
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
    <main><h1>Professional Networking Virtually for Specialists Using AI</h1>
      <p style={{fontFamily: "Sans-serif"}} className="base-text">How do I do professional networking in specialist areas like UX design, 
      digital marketing, or machine learning? The best result would be: just have a profile, and automatically create
      a professional network based on my description of what I do. That is what the professional networking service
      by Marmalade AI, Inc. does. Marmalade provides an easy way to network virtually to other specialists by specialists
      in <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b> &mdash; who really need to connect 
      with each other, and find traditional networking to be slow and irrelevant. Based on profiles, behind the scenes Marmalade 
      matches specialists with specialists by using NLP and machine learning. When, where, and who you connect with is up to you.
      </p>
      <div className="container flex flex-col items-center">
      <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule a demo over Zoom</button>
      </div>
      <div className="grid grid-cols-2">
        <h3>User profile &#8594;</h3>
        <h3>Networking virtually</h3>
      </div>
      <div className="grid grid-cols-2">
        <p style={{fontFamily: "Sans-serif"}} className="base-text">Create a profile describing your work.</p>
        <p style={{fontFamily: "Sans-serif"}} className="base-text">Open a matching professional network.</p>
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
      <p style={{fontFamily: "Sans-serif"}} className="base-text">Accuracy is what you want in a professional network. You don't have time for inaccuracy. Specialists need to connect with
        other specialists to share work and stay up to date. Seredipidty? We have nothing against it. But accuracy comes first.</p>
      <StaticImage
        alt="Marmalade AI gives you a network that reflects you."
        src="../../images/iStockphoto-1220226086-400.jpg"
      />
      <h2>Automatic</h2>
      <h3>Your network should be effortless</h3>
      <p style={{fontFamily: "Sans-serif"}} className="base-text">You can't spend half your time in professional networking. It should &quot;just happen.&quot; Frankly, we started with the idea
        that people should rate their matches. Who has time for that? If you want your network to change because you're doing something
        new, just put it in your profile, and your network will automatically change to reflect that.
      </p>
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
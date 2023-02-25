import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <p style={{fontFamily: "Sans-serif"}}>Marmalade AI is an app that provides <u>virtual networking</u> for software devs in <b>UX design</b>, 
         <b>digital marketing</b>, or <b>machine learning</b> who really need to connect with each other and are 
        dissatisfied with traditional networking. Those are the areas where we're starting. Based on profiles, Marmalade 
        matches specialists with specialists using NLP and machine learning. When, where, and with whom you connect is up to you.
      </p>
      <Link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <a href="https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes'});return false;">
          <button class="bg-green-500 text-white px-5 py-2 mt-4 mb-4 rounded">Schedule a demo over Zoom</button></a>
      </Link>
      <StaticImage
        src="../images/emily_screen_640.png" 
        alt="Emily screen from Marmalade AI" 
        width="600"
      />
      <h2>Accurate</h2>
      <h3>A Marmalade network reflects what you do.</h3>
      <StaticImage
        alt="Marmalade AI gives you a network that reflects you."
        src="../images/iStockphoto-1220226086-400.jpg"
      />
      <h2>Automatic</h2>
      <h3>A Marmalade network is effortless.</h3>
      <StaticImage
        alt="Marmalade AI requires no effort to match you with people."
        src="../images/matching.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
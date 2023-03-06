import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { navigate } from 'gatsby'
import "../styles/global.css";
// 

const IndexPage = () => {
  return (
    <Layout class="layout" pageTitle="">
      <br />
      <p style={{fontFamily: "Sans-serif"}} class="base-text">Marmalade AI provides <b>virtual 
        networking</b> for specialists -- starting with <b>UX design</b>, <b>digital marketing</b>, and <b>machine 
          learning</b> -- who really need to connect with each other and are 
        dissatisfied with traditional networking. Based on profiles, Marmalade 
        matches specialists with specialists using NLP and machine learning. When, where, and with whom you connect is up to you.
      </p>
      {/* <Link to="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <a href="https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes" onClick="Calendly.initPopupWidget({url: 'https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes'});return false;">
          {/* <button class="bg-green-500 text-white px-5 py-2 mt-4 mb-4 rounded">Schedule a demo over Zoom</button></a> */}
          {/* <button className="bg-red-500 text-white px-4 py-2 mt-3 mb-4 rounded">Schedule a demo over Zoom</button></a> */}
      {/* </Link> */}
      <div class="container flex flex-col items-center">
      <button class="bg-green-500 mt-2 mb-2 px-4 py-0 rounded items-center hover:bg-green-600 font-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule a demo over Zoom</button>
      </div>
      <StaticImage
        src="../images/emily_screen_640_3.png" 
        alt="Emily screen from Marmalade AI" 
        width={600}
      />
      <h2>Accurate</h2>
      <h3>Your network should reflect what you do</h3>
      <StaticImage
        alt="Marmalade AI gives you a network that reflects you."
        src="../images/iStockphoto-1220226086-400.jpg"
      />
      <h2>Automatic</h2>
      <h3>Your network should be effortless</h3>
      <StaticImage
        alt="Marmalade AI provides a virtual network from your profile."
        src="../images/matching.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
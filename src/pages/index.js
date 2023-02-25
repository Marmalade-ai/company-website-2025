// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'
// import { InlineWidget } from 'react-calendly'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <p style={{fontFamily: "Sans-serif"}}>Marmalade AI is virtual networking for software people in UX design, 
        digital marketing, or machine learning who really need to connect with each other and are 
        dissatisfied with traditional networking. Those are the areas where we're starting. Based on profiles, Marmalade 
        matches specialists with specialists using NLP and machine learning. When, where, and with whom you connect is up to you.
      </p>
<Link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes'});return false;">Schedule time with me</a>
</Link>
      {/* <InlineWidget 
          url='https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes' 
          // text='Schedule one-on-one demo' 
          // color='#01fe3c' 
          // textColor='#ffffff' 
      />  */}
      <StaticImage
        src="../images/emily_screen.png" 
        alt="Emily screen from Marmalade AI" 
        width="600"
        // alt="People waiting for an event"
        // src="https://www.craigfisk.com/programming/images/linkedin_screen.png"
      />
      <h2>Accurate</h2>
      <h3>A Marmalade network reflects what you do.</h3>
      <StaticImage
        // width="400"
        alt="Marmalade AI gives you a network that reflects you."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/iStockphoto-1220226086-400.jpg"
      />
      <h2>Automatic</h2>
      <h3>A Marmalade network is effortless.</h3>
      <StaticImage
        // width="400"
        alt="Marmalade AI requires no effort to match you with people."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/matching.jpg"
      />
      {/* <h2>Appropriate</h2>
      <h3></h3>
      <StaticImage
        // width="400"
        alt="Marmalade AI enables appropriate networking."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/chatting.jpg"
      /> */}
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
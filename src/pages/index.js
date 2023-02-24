// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <h2>Accurate 
      </h2>
      <StaticImage
        // width="400"
        alt="Marmalade AI gives you a network that reflects you."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/iStockphoto-1220226086-400.jpg"
      />
      <h2>Automatic 
      </h2>
      <StaticImage
        // width="400"
        alt="Marmalade AI automatically matches you with people."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/matching.jpg"
      />
      <h2>Appropriate 
      </h2>
      <StaticImage
        // width="400"
        alt="Marmalade AI enables appropriate networking."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/chatting.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
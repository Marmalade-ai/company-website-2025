// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Following the Gatsby Tutorial at 
        <a href='https://gatsbyjs.com/docs/tutorial'>https://gatsbyjs.com/docs/tutorial</a>.
      </p>
      <StaticImage
        // width="400"
        alt="People looking for opportunities to network."
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        // src="https://craigfisk.com/programming/images/linkedin_screen.png"
        src="../images/linkedin_screen.png"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage
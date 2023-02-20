import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>Hi there! We're the proud operators of this site, built with Gatsby 5.x. Original development work by Justin Blake and Jim Tyhurst. Updated in 2023 by Craig Fisk.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
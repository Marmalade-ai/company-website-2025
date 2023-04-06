import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  siteTitle,
} from './layout.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log("data is: " + JSON.stringify(data))
  console.log("data.site.siteMetadata is: " + JSON.stringify(data.site.siteMetadata))

  return (
    // <div>
    <div className={container}>
      <Header> 
         className={siteTitle}{data.site.siteMetadata.title}
      </Header> 
      
      <main>
        <div className={heading}>{pageTitle}</div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
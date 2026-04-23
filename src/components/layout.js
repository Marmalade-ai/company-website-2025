import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  siteTitle,
} from './layout.module.css'
import Header from './Header'
import Footer from './Footer'
import "../styles/global.css"

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

  return (
    <div className={container}>
      <Header />
      
      <main>
        <div className={heading}>{pageTitle}</div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
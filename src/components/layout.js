import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
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
      <nav class="m-4">
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/faq" className={navLinkText}>
              FAQ
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/newabout" className={navLinkText}>
              NewAbout
            </Link>
          </li> */}
        </ul>
      </nav>
      
      <main>
        <div className={heading}>{pageTitle}</div>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
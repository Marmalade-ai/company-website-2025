import React from 'react';
import { Link } from 'gatsby';
import {
  // container,
  // heading,
  // navLinks,
  navLinkItem,
  navLinkText,
  // siteTitle,
} from './layout.module.css'

import "../styles/global.css"


const Footer = () => (
  <footer>
    <br />
    <div className="grid grid-cols-2 gap-5">
    {/* <ul className={navLinks}> */}
        <div>
        <ul>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/userresearch" className={navLinkText}>
              User Research
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
        </div>
        <div>
        <ul>
          <li><a href="mailto:info@marmalade.ai">Contact Us</a></li>
          <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
        </div>

    </div>
    <br />
    <h4>Copyright © 2021-2023 Marmalade AI, Inc.</h4>
  </footer>
);

export default Footer;

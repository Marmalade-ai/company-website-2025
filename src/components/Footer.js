import { Link } from 'gatsby';
import React from 'react';
import {
  // container,
  // heading,
  // navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css';

import "../styles/global.css";


const Footer = () => (
  <footer>
    <br />
    <div className="grid grid-cols-2 gap-5 bg-gray-300 black-border p-4">
        <div>
        <ul>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/products" className={navLinkText}>
              Products
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
        </ul>
        </div>

        <div>
        <ul>
          <li><a href="mailto:info@marmalade.ai" className={navLinkText}>Contact Us</a></li>
          <li><Link to="/code-of-conduct" className={navLinkText}>Code of Conduct</Link></li>
          <li><Link to="/privacy-policy" className={navLinkText}>Privacy Policy</Link></li>
          <li><Link to="/terms-and-conditions" className={navLinkText}>Terms and Conditions</Link></li>
        </ul>
        </div>

    </div>
    <br />
    <h4>Copyright © 2021-2024 Marmalade AI, Inc.</h4>
  </footer>
);

export default Footer;

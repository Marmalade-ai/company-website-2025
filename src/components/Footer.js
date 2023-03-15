import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <br />
    <div>
        <ul>
          <li><a href="mailto:info@marmalade.ai">Contact Us</a></li>
          <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
        <br />
        <h4 className="base-text">Copyright © 2021-2023 Marmalade AI, Inc.</h4>
    </div>
  </footer>
);

export default Footer;

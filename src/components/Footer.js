import React from 'react';
import { Link } from 'gatsby';
// import { FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer>
  {/* <footer className="container mx-auto pt-10 md:pt-20 pb-8 text-gray-800"> */}
    {/* <hr /> */}
    {/* <div className="flex flex-col md:flex-row -mx-3"> */}
    <div>
      {/* <section className="flex-1 px-3 order-last md:order-first">
        <h2 className="text-lg font-semibold">Marmalade AI, Inc.</h2>
        <ul className="mt-4 leading-loose list-none">
          {/* <li>Virtual networking.</li> */}
          {/* <li>Copyright © 2021-2023</li>
        </ul>/}
      {/* <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Resources</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            {/* <li>
              <a href="https://forum.marmalade.ai/">Forum</a>
            </li> */}
            {/* <li>
              <Link to="/communities">Communities</Link>
            </li> */}
            {/* <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </section> */}
      {/* <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <a href="https://twitter.com/MarmaladeAI">
                <div className="flex flex-row">
                  <FaTwitter />
                  &nbsp; Twitter
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </section> */}
      {/* <section className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Policies</h2>
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <Link to="/code-of-conduct">Code of Conduct</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </section> */}
      {/* <section> */}
        <ul>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/code-of-conduct">Code of Conduct</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
        <h4>Copyright © 2021-2023 Marmalade AI, Inc.</h4>
      {/* </section> */}
    </div>
  </footer>
);

export default Footer;

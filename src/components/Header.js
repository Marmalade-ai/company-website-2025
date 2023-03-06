import React from 'react';
// import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header>
  {/* <header className="sticky top-0 bg-white shadow z-50"> */}
    <nav>
    {/* <nav className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8"> */}
      {/* <div className="flex items-center text-2xl"> */}
        {/* <div className="w-12 mr-3"> */}
          {/* <Link> */}
            <h1><StaticImage
              src="../images/marmalade-logo-sm.jpg"
              alt="The Marmalade AI Logo."
              title="Marmalade AI, Inc."
              width={40}
            /> Marmalade AI</h1>
          {/* </Link> */}
        {/* </div> */}
        {/* <Link to="/#">Marmalade AI</Link> */}
      {/* </div> */}
      {/* <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/#">
          Home
        </Link>
        <Link className="px-4" to="/communities">
          Communities
        </Link>
        <Link className="px-4" to="/faq">
          FAQ
        </Link>
        <Link className="px-4" to="/about">
          About
        </Link>
      </div> */}
    </nav>
  </header>
);

export default Header;

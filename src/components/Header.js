import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header>
    <nav>
      <div className="largeText titleStyle"><StaticImage
        src="../../images/Marmalade_Logo_trans_white_M_100.webp"
        alt="The Marmalade AI Logo."
        title="Marmalade AI, Inc."
        width={60}
      /> Marmalade AI</div>
    </nav>
  </header>
);

export default Header;

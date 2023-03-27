import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header>
    <nav class="black-border">
      <div class="black-border" className="titleStyle"><StaticImage
        src="../../images/Marmalade_Logo_trans_white_M_100.webp"
        alt="The Marmalade AI Logo."
        title="Marmalade AI, Inc."
        width={40}
      /> Marmalade AI</div>
    </nav>
  </header>
);

export default Header;

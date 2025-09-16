import React from 'react';
import { navigate } from 'gatsby'

// import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header>
    <nav>
      <div className="text-xl">
        <span class="text-[#ff7f00] font-bold">Marmalade AI</span> - <b>peer networking</b>

        <button 
                  className="w-30 bg-[#ff7f00] bg-opacity-100 border border-width-1 hover:underline px-1 py-0 rounded-lg text-black float-right" 
                  onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                    beta
        </button>

      </div>
    </nav>
  </header>
);

export default Header;

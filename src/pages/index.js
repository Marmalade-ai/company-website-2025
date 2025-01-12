import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/global.css"

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Marmalade AI - effortless</title>
    <meta 
      name="description"
      content="Marmalade AI - effortless networks. Please tell us what you
      need for automatic peer groups. Beta starts with automatic 
      peer groups in UX design, digital marketing, and machine learning 
      on April 1, 2025. How does it work: 
      Marmalade AI runs cloud functions to create peer groupa. 
      When, where, and with who you connect is under your 
      control. Marmalade AI is a subscription web-based service 
      in the U.S. on phones, laptops, and desktops."
    />
  </>
);


const IndexPage = () => {
  return (
    <Layout>
      <main>
        <body>
          <div className="container flex flex-col">
            <div className="grid sm:grid-cols-2 gap-5">
            
               
              </div>
            <br/>
            <div className="grid sm:grid-cols-1 gap-5">
        
            </div>
            <div  className="grid sm:grid-cols-1 gap-5">
              <p>  
                <b>Effortless networks.</b> How does it work? You create (or update)
                your profile, then we run a cloud function against it and use AI to 
                create a peer group! You change 
                your profile and your network changes.
              </p>
              <p><button 
                                className="w-30 bg-[#ff7f00] bg-opacity-100 border border-width-1 hover:underline px-1 py-0 rounded-lg text-black float-left" 
                                onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                                  Free beta
                      </button>
                April 1, 2025 only in <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b>.</p>
                <p>And please tell us how to improve it!
              </p>
            
            </div>
            <br/>
  
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h2 className="py-2">Accurate</h2>
                  <h3>Networking</h3>
                    <p class="mb-8">Write your profile or copy/paste it. Be in touch to share work and stay current.</p>
                      <StaticImage
                        alt="Marmalade AI gives you a network that reflects you."
                        src="../../images/Screenshot at 2023-04-16 23-52-28.png"
                      />
              </div>
              <div>
                <h2 class="py-2">Automatic</h2>
                 <h3>Effortlessly</h3>
                    <p class="mb-8">Change your profile and  
                      your virtual network automatically changes.</p>
                      <StaticImage
                        alt="Using your profile, Marmalade AI automatically creates an accurate virtual network."
                        // src="../../images/matching_565.png"
                        src="../../images/pexels-jane-trang-doan-1024248_565x399.jpg"
                      />
              </div>
            </div>
          </div>
          <p>
          <button 
                                className="w-30 bg-[#ff7f00] bg-opacity-100 border border-width-1 hover:underline px-1 py-0 rounded-lg text-black float-left" 
                                onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                                  Free beta
                      </button>
  </p>
  <br/><br/>
  <p>Last reviewed: <time dateTime="2025-1-9">January 9, 2025.</time>
</p>

        </body>
      </main>
    </Layout>
  )

};

export default IndexPage
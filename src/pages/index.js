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
      content="Marmalade AI - effortless networking. 
      Please tell us what we should do to better support your networking. 
      Beta starts later in 2025 in NYC, focused on people in UX design, 
      digital marketing, and machine learning. How does it work? 
      Marmalade AI runs cloud functions to create peer groupa. 
      When, where, and with who you connect is up to you. 
      We show who is nearby that you should know. 
      Marmalade AI is a subscription web-based service 
      on phones, laptops, and desktops."
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
                {/* <b>Effortless networking</b>.  */}
                How does it work?</p> <p>Say what you do  
                and the app creates a peer group of people who can help you
                and you can help. 
              </p>
              <p>
                {/* <button 
                                className="w-30 bg-[#ff7f00] bg-opacity-100 border border-width-1 hover:underline px-1 py-0 rounded-lg text-black float-left" 
                                onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                                  Beta signup
                      </button> */}
                 Beta will be in NYC for people in <b>machine learning</b>, <b>digital marketing</b>, and <b>UX design</b>.</p>
                <p>And please tell us how to improve it!
              </p>
            
            </div>
            <br/>
  
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h2 className="py-2">What do I do?</h2>
                  {/* <h3>Networking</h3> */}
                    <p class="mb-8">Write what you do, or copy/paste it. Default is your area.</p>
                      <StaticImage
                        alt="Marmalade AI just asks you to say what you do."
                        src="../../images/Screenshot at 2023-04-16 23-52-28.png"
                      />
              </div>
              <div>
                <h2 class="py-2">What's the result?</h2>
                 {/* <h3>Effortless</h3> */}
                    <p class="mb-8">A peer network that's relevant, automatic, and effortless.</p>
                      <StaticImage
                        alt="Marmalade AI automatically creates an accurate virtual network."
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
                                  {/* Beta Signup */}
                      </button>
  </p>
  <br/><br/>
  <p>Last reviewed: <time dateTime="2025-9-16">September 16, 2025.</time>
</p>

        </body>
      </main>
    </Layout>
  )

};

export default IndexPage
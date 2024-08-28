import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/global.css"

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Peer groups in UX Design, Digital Marketing, and Machine Learning</title>
    <meta 
      name="description"
      content="How do I create and use peer groups in UX design, digital marketing, and machine learning to stay up-to-date? 
      Nice would be: just have a profile, and automatically create a peer group based on tahat. That is
      what the Marmalade AI app does. In beta, for specialists in UX design, digital marketing, and machine learning, it 
      peer groups for people who really need to connect to each other to stay up-to-date. Traditional
      networking (through meetups, one-on-ones, or services like Linkedin, TopTal, UpWork, or Indeed
      are not all that useful. They're also too expensive and time-consuming. Using your profile, 
      Marmalade AI runs cloud functions to create a peer group for you. When, where, and with who you connect is under your 
      control. Marmalade AI is a subscription web-based service in the U.S. on phones, laptops, and desktops."
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
              <div>
                <h1 className="largeText gap-5"><i>Automatic</i> Peer Groups</h1>
              </div>
                <button 
                  className="w-32 bg-[#ff7f00] bg-opacity-50 border border-width-1 hover:underline px-2 py-1 rounded-lg text-black float-right" 
                  onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                    Beta signup!
                </button>
                {/* button hover:underline px-2 bg-marmalade-200 float-right */}
            </div>
            <br/>
            <div className="grid sm:grid-cols-1 gap-5">
        
            </div>
            <div  className="grid sm:grid-cols-1 gap-5">
              <p>What if, given my profile, an app could automatically and accurately network me?</p>
              
              <p>How does it work? The Marmalade AI app runs cloud functions against your profile to do just that. 
              All you need is your profile. It is automatic and accurate. </p>
              
              <p><b>Beta</b>: Subscriptions start in late 2024. 
              After beta, <i>active subscribers</i> can contact anyone only if, and when, someone is open to it. 
              You control the timing and the topic.
              Monetization? Eventually it will be <i>pay for use</i> and a minimum. 
              </p>
            
              <p>The beta is for people 
                in <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b>. 
              Yes, we will open it up later. The beta has a narrow focus. So if that is not you, please mention us to
              friends who are. </p>
            
            </div>
            <br/>
  
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h2 className="py-2">Accurate</h2>
                  <h3>Peer group!</h3>
                    <p class="mb-8">Write your profile or copy/paste it. Be in touch to share work and stay current.</p>
                      <StaticImage
                        alt="Marmalade AI gives you a network that reflects you."
                        src="../../images/Screenshot at 2023-04-16 23-52-28.png"
                      />
              </div>
              <div>
                <h2 class="py-2">Automatic</h2>
                 <h3>Effortless!</h3>
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
  Last reviewed: <time dateTime="2024-4-18">August 28, 2024.</time>
</p>

        </body>
      </main>
    </Layout>
  )

};

export default IndexPage
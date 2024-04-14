import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/global.css"

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Virtual Networking in UX Design, Digital Marketing, and Machine Learning</title>
    <meta 
      name="description"
      content="How do I do virtual networking in UX design, digital marketing, and machine learning? The best result
      would be: just have a profile, and automatically create a professional network based on your profile. That is
      what the virtual networking subscription service by Marmalade AI, Inc. does. Marmalade provides an easy way for every specialist in UX design, digital marketing, and machine learning
      to network virtually. It targets people who really need to connect to each other and find traditional
      networking through meetups or one-on-ones, or through online services like Linkedin, TopTal, UpWork, or Indeed
      to be not all that useful, too expensive for the value received, and too time-consuming. Using their profiles, 
      Marmalade AI automatically creates a network of specialists that is virtual, by using NLP (natural language processing) and 
      ML (machine learning) to suggest relevant connections. When, where, and with who you connect is under your 
      control. Marmalade AI is a subscription web-based service in the U.S. on phones, laptops, and desktops."
    />
  </>
);

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <body>
          <h1 className="largeText gap-5"><i>Virtual</i> Networking</h1>
            <div  className="grid sm:grid-cols-1 gap-5">
              <p>What if, given my profile, a specialist network could automatically and accurately exist for me <i>virtually</i>?</p>
            
              <p>Marmalade AI is <i>automatic</i> and <i>accurate</i>. 
              Marmalade AI runs ML/NLP cloud functions against your existing profile to create a virtual network. 
              All you need is your profile. It is automatic and accurate.</p>
            
              <p>Marmalade AI is starting with people in three software-disrupted specializations: 
                <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b>. 
              Yes, there will be other specializations. So if that is not you, please mention us to
              friends who do specialize in these fields. We'll expand later, but to get started, there
              needs to be focus both in the technology and in the markets.</p>
            
            </div>
            <br/>

            <div className="container flex flex-col items-center">
              <button className="hover:bg-slate-200 bg-slate-100 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold orangeButton" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Waitlist me!</button>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <h2 className="py-2">Accurate</h2>
                  <h3>Your network should reflect what you do</h3>
                    <p class="mb-8">Specialists are connected virtually with
                      other specialists to share work and stay up to date.</p>
                      <StaticImage
                        alt="Marmalade AI gives you a network that reflects you."
                        src="../../images/Screenshot at 2023-04-16 23-52-28.png"
                      />
              </div>
              <div>
                <h2 class="py-2">Automatic</h2>
                 <h3>Your network should be effortless</h3>
                    <p class="mb-8">It should be automatic. Change your profile and  
                      your virtual network automatically changes.</p>
                      <StaticImage
                        alt="Using your profile, Marmalade AI automatically creates an accurate virtual network."
                        src="../../images/matching_565.png"
                      />
              </div>
            </div>
        </body>
      </main>
    </Layout>
  )
};

export default IndexPage
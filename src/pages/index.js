import { navigate } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import "../styles/global.css"

export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Professional Networking in UX Design, Digital Marketing, and Machine Learning</title>
    <meta 
      name="description"
      content="How do I do professional networking in UX design, digital marketing, and machine learning? The best result
      would be: just have a profile, and automatically create a professional network based on your profile. That is
      what the professional networking subscription service by Marmalade AI, Inc. does. Marmalade provides an easy way for every specialist in UX design, digital marketing, and machine learning
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

{/* class="w-96 pt-6 pb-6 text-5xl font-extrabold" */}
    <main>
      <h1 className="largeText gap-5">Networking</h1>

      <div  className="grid sm:grid-cols-1 gap-5">
        <p>What if, given my profile, a specialist network could just <i>happen</i>?</p>
      
        <p>Marmalade is <i>automatic</i> and <i>accurate</i>. 
        Beneath a simple UI, it runs NLP cloud functions to create your network. 
        All you need is your profile.</p>
      
        <p>Marmalade will become available in 2023, starting in <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b>.</p>
      
      </div>
      <br/>

      <div className="container flex flex-col items-center">
        <button className="hover:bg-slate-200 bg-slate-300 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule Demo</button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <h2 className="py-2">Accurate</h2>
          <h3>Your network should reflect what you do</h3>
          <p class="mb-8">Specialists want to connect with
            other specialists to share work and stay up to date.</p>
          
          <StaticImage
            alt="Marmalade AI gives you a network that reflects you."
            src="../../images/Link to istockphoto-1404293231-170667a.jpg"
          />
        </div>
        <div>
          <h2 class="py-2">Automatic</h2>
          <h3>Your network should be effortless</h3>
            <p class="mb-8">It should &quot;just happen.&quot; Change your profile and  
            your network automatically changes.
          </p>
          
          <StaticImage
            alt="Using your profile, Marmalade AI automatically creates an accurate virtual network."
            src="../../images/matching_640.png"
          />
        </div>
      </div>


      <div className="container flex flex-col items-center">
        <button className="hover:bg-slate-200 bg-slate-300 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule Demo</button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 py-10">
        <div>
        <h3>Your Profile</h3>  
        <p className="smallText">Create a profile describing your work.</p>
        {/* StaticImage is responsive by default */}
        <StaticImage
          src="../../images/emily_profile_a_800.png" 
          alt="Emily screen from Marmalade AI" 
          // width={280}
          width={600}
        />
        </div><div>
        <h3>Your Virtual Network<span className="text-xl hover:bg-orange-600"></span></h3>
        <p className="smallText">Open a matching professional network.</p>
        <StaticImage
          src="../../images/emily_profiles_800.png" 
          alt="Profiles from Marmalade AI" 
          // width={310}
          width={600}
        />
        </div>
      </div>

      <div className="container flex flex-col items-center">
        <button className="hover:bg-slate-200 bg-slate-300 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule Demo</button>
      </div>

    </main>
    </Layout>
  )
}

export default IndexPage
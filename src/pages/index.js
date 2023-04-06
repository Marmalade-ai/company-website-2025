import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby'
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

    <main>
      <p class="pt-6 pb-6 text-5xl font-extrabold">Professional Networking for Specialists</p>
      <hr/>
      <p>What if, given my profile, I automatically had an accurate virtual network? 
      </p>
      <br/>
      <hr/>
      <p>Marmalade enables specialists to do just that, starting in 2023 with people
      in <b>UX design</b>, <b>digital marketing</b>, and <b>machine learning</b>. Traditional networking 
      is too much work for too little gain. Marmalade is automatic. Beneath a simple 
      UI, it runs NLP cloud functions to create your network. All you need is a profile.
      </p>
      <br/>
      <div className="container flex flex-col items-center">
      <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule a demo (Zoom)</button>
      </div>
      {/* <div className="grid sm:grid-cols-2 md_grid-cols-3 gap-5"> */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
        <h3>Your Profile <span className="text-xl hover:bg-orange-600">&#8594;</span></h3>  
        <p class="smallText">Create a profile describing your work.</p>
        <StaticImage
          src="../../images/emily_profile.png" 
          alt="Emily screen from Marmalade AI" 
          width={280}
        />
        </div><div>
        <h3>Your Virtual Network<span className="text-xl hover:bg-orange-600"></span></h3>
        <p class="smallText">Open a matching professional network.</p>
        <StaticImage
          src="../../images/emily_profiles.png" 
          alt="Profiles from Marmalade AI" 
          width={310}
        />
        </div>
      </div>
      <h2 class="mt-6 border-t-8">Accurate</h2>
      <h3>Your network should reflect what you do</h3>
      <p class="mb-8">Accuracy is what you want in a professional network. You don&apos;t have time for inaccuracy. Specialists need to connect with
        other specialists to share work and stay up to date. Seredipidty? Fine. But accuracy comes first.</p>
      <StaticImage
        alt="Marmalade AI gives you a network that reflects you."
        src="../../images/iStockphoto-1220226086-400.jpg"
      />
      <h2 class="mt-6 border-t-8">Automatic</h2>
      <h3>Your network should be effortless</h3>
      <p class="mb-8">You can&apos;t spend half your time in networking. It should &quot;just happen.&quot; Who has time to rate their matches? Instead, 
        if you want your network to change - maybe you have a new skill - just put it in your profile. Your network automatically changes.
      </p>
      <StaticImage
        alt="Using your profile, Marmalade AI automatically creates an accurate virtual network."
        src="../../images/matching.jpg"
      />
    </main>
    </Layout>
  )
}

export default IndexPage
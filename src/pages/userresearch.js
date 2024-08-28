import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import "../styles/global.css";


export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Generate peer groups for people in UX Design, Digital Marketing, and Machine Learning</title>
    <meta 
      name="description"
      content="Understand peer groups for people in UX design, digital marketing, or machine learning.
      Understand what accuracy and automatic mean to people, 
      how people want to a set geographical context, how people want to be contacted
      or contact others, and how they want to work with their history, which will
      changes to reflect any changes to their profile."
    />
  </>
);


const UserResearch = () => {
  return (

    <Layout>

      <main>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage height={200} alt="User Research" src="../../images/ux-indonesia-w00FkE6e8zE-unsplash_800.png"/>
          <div>
            <h1 className="largeText gap-5" style={{ color: '#ff7f00' }}><b>User Research</b> on &quot;networking&quot;</h1><p>(Meaning: &quot;professional networking&quot;)<br /><br />
            
            {/* <div className="container flex flex-col items-center">
              <button className="hover:bg-slate-200 bg-slate-300 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule (Zoom)</button>
            </div> */}
            
            <b>Please tell us your networking challenges.</b></p>
            <p>If you are in:</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2">
          <p className="p-2 sm:text-lg p-12"><b><input type="checkbox"/> UX Design</b></p>
          <StaticImage height={200} alt="UX design" src="../../images/alvaro-reyes-KxVlKiqQObU-unsplash_800.png"/>
        </div>

        <div className="grid sm:grid-cols-2">
          <p className="p-2 sm:text-lg p-12"><b><input type="checkbox"/> Digital Marketing</b></p>
          <StaticImage height={200} alt="digital marketing" src="../../images/jason-goodman-Oalh2MojUuk-unsplash_800.png"/>
        </div>
{/* gap-4 p-4 */}
        <div className="grid sm:grid-cols-2">
          <p className="p-2 sm:text-lg p-12"><b><input type="checkbox"/> Machine Learning</b></p>
          <StaticImage height={200} alt="machine learing" src="../../images/andy-kelly-0E_vhMVqL9g-unsplash_800.png"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4">

          <div>
            <p className="largeText"><b>Click to schedule!</b></p>
            <p>And please forward to people you know who work in those areas.</p>
          </div>

        </div>

        <div className="container flex flex-col items-center">
            <button className="hover:bg-slate-200 bg-slate-300 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule (Zoom)</button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={200} height={200} alt="Free subscription" src="../../images/erik-mclean-cYQtW1HTpbg-unsplash_800.png"/>
          <p className="py-2 sm:py-10"><b>Free Subscription</b>: Thank you!</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={200} height={200} alt="Input into the design" src="../../images/med-badr-chemmaoui-ZSPBhokqDMc-unsplash_800.png"/>
          <p className="py-2 sm:py-10"><b>Make it work for you!</b></p>
        </div>

        <div>
          <p className="largeText py-10 gap-5"><b>What is the problem?</b></p>
        </div>

        <div>
          <StaticImage alt="Networking is absurdly inefficient" src="../../images/Marmalade_AI_banner_1200.png"/>
        </div>
        <div>
          <p className="largeText p-5" style={{ color: 'red' }}><b>Networking is inefficient!</b></p>
        </div>

        <div className="grid sm:grid-cols-3">
          <div><StaticImage width={200} alt="Accurate" src="../../images/pexels-iconcom-226569_534.png"/></div>
          <div className="bg-slate-300 col-span-2"> 
            <p className="largeText px-2 gap-5"><b>Accurate</b></p>
            <p className="px-2 pb-4">Let&apos;s make networking really <b>accurate</b>.</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-3">
          <div><StaticImage width={200} alt="Automatic" src="../../images/pexels-ivan-kazlouski-12175741_800.png"/></div>
          <div className="bg-slate-300 col-span-2">
            <p className="largeText px-2 gap-5"><b>Automatic</b></p>
            <p className="px-2 pb-4">It should &quot;just happen&quot; from your profile.</p>
          </div>
        </div>

        <div className="largeText p-10">
          <b>That's a start. But what do &quot;accurate&quot; and &quot;automatic&quot; mean? Also...</b>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="What geographical scope?" src="../../images/pexels-photomix-company-5921677_800.png"/>
          <p className="py-4"><b>Geographical scope?</b> If the default is a metropolitan area, how would you want to narrow or expand the scope? How should the UI work?</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="How to contact people?" src="../../images/pexels-alteredsnaps-12699062_800.png"/>
          <p className="py-4 m-py-16"><b>How to contact people?</b> Video calls? Scheduling? Disable contact by default? Set the filter? -- more questions!</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="What about your &quot;history&quot;?" src="../../images/pexels-mikhail-nilov-7887040_800.png"/>
          <p className="py-4"><b>History?</b> &quot;Affective reality&quot;? If your network changes when you change your profile? How to contact someone from your &quot;old network&quot;?</p>
        </div>

        <div className="largeText p-5">
          <b>Piqued your curiosity? Book a conversation!</b>
        </div>

        <div className="container flex flex-col items-center">
          <button className="hover:bg-slate-200 bg-slate-300 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule (Zoom)</button>
        </div>

        <div className="grid sm:grid-cols-6 py-10">
          <div></div>
          {/* <div></div> */}
          <div className="col-span-4">
            <p className="px-2 gap-5"><b>Who are we?</b><br />Marmalade AI has <Link to="/about">a founding team</Link> that is all remote, fascinated by networking, and has worked in freelancing, focus groups, and all kinds of software. We are passionate about making this useful! We know we can't do it without your help!</p>
            <p className="px-2"></p>
          </div>
          {/* <div></div> */}
          <div></div>
        </div>

        {/* <div>
          <StaticImage alt="Who are we?" src="../../images/Screenshot at 2023-04-14 19-16-47_834.png"/>
        </div> */}


      </main>

    </Layout>

  )
}

export default UserResearch;
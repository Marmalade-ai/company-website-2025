import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import "../styles/global.css";


export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Professional Networking in UX Design, Digital Marketing, and Machine Learning</title>
    <meta 
      name="description"
      content="User research for people in UX design, digital marketing, or machine learning."
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
            <h1 className="largeText gap-5"><b>User Research</b> on &quot;networking&quot;</h1><p>(Meaning: "professional networking")<br /><br /><b><span className="purpleFont">Please help!!</span></b></p>
            <p>If you are in:</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 p-4">
          <p className="p-2 sm:text-lg p-12"><b><input type="checkbox"/> UX Design?</b></p>
          <StaticImage height={200} alt="UX design" src="../../images/alvaro-reyes-KxVlKiqQObU-unsplash_800.png"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4">
          <p className="p-2 sm:text-lg p-12"><b><input type="checkbox"/> Digital Marketing?</b></p>
          <StaticImage height={200} alt="digital marketing" src="../../images/jason-goodman-Oalh2MojUuk-unsplash_800.png"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4">
          <p className="p-2 sm:text-lg p-12"><b><input type="checkbox"/> Machine Learning?</b></p>
          <StaticImage height={200} alt="machine learing" src="../../images/andy-kelly-0E_vhMVqL9g-unsplash_800.png"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4">

          <div>
            <p className="largeText"><b>Please click to schedule!</b></p>
            <p>If &quot;no,&quot; please forward.</p>
          </div>

          <div className="container flex flex-col items-center">
            <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule (Zoom)</button>
          </div>

        </div>
        {/* <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={303} alt="button" src="../../../images/Marmalade_user_research_button.png"/>
          <p className="largeText py-5 gap-5"><b>What's in it for you?</b></p>
        </div>
         */}
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={200} height={200} alt="Free subscription" src="../../images/erik-mclean-cYQtW1HTpbg-unsplash_800.png"/>
          <p className="py-2 sm:py-10"><b>Free Subscription</b>: We appreciate your help.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={200} height={200} alt="Input into the design" src="../../images/med-badr-chemmaoui-ZSPBhokqDMc-unsplash_800.png"/>
          <p className="py-2 sm:py-10"><b>Make it work for you!</b> Here's your chance.</p>
        </div>

        <div>
          <p className="largeText py-10 gap-5"><b>What is the problem?</b></p>
        </div>

        <div>
          <StaticImage alt="Networking is absurdly inefficient" src="../../images/Marmalade_AI_banner_1200.png"/>
          {/* <p><b>Networking is absurdly inefficient</b>: Lorem ipsum dolor sit amet...</p> */}
        </div>
        
        <div>
          <p className="bg-orange-400 largeText p-5"><b>Networking is absurdly inefficient!</b></p>
        </div>

        <div className="grid sm:grid-cols-2 py-2">
          <div><StaticImage width={200} alt="Accurate" src="../../images/pexels-iconcom-226569_534.png"/></div>
          <div className="bg-slate-200"> 
            <p className="largeText px-2 gap-5"><b>Accurate</b></p>
            <p className="px-2">It should be possible to make networking <b>accurate</b>.</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 py-2">
          <div><StaticImage width={200} alt="Automatic" src="../../images/pexels-ivan-kazlouski-12175741_800.png"/></div>
          <div className="bg-slate-200">
            <p className="largeText px-2 gap-5"><b>Automatic</b></p>
            <p className="px-2">It should &quot;just happen&quot; from your profile.</p>
          </div>
        </div>

        <div className="largeText p-10">
          <b>Ok, that's a start. But what do &quot;accurate&quot; and &quot;automatic&quot; mean to you? Also, here are further questions</b>:
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="What geographical scope?" src="../../images/pexels-photomix-company-5921677_800.png"/>
          <p className="py-4"><b>What&apos;s the geographical scope?</b> Should it be a city, a metropolitan area, a state, a region (like &quot;Upper Midwest&quot; or &quot;West Coast&quot;)? What is the UI?</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="How to contact people?" src="../../images/pexels-alteredsnaps-12699062_800.png"/>
          <p className="py-4"><b>How to contact people?</b> Video calls? Calendar scheduling? What about whether you can be contacted at all, or about what? -- more questions!</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="What about your &quot;history&quot;?" src="../../images/pexels-mikhail-nilov-7887040_800.png"/>
          <p className="py-4"><b>History?</b> &quot;Affective reality&quot;? If your network changes when you change your profile? How to contact someone from your &quot;old network&quot;?</p>
        </div>

        <div className="largeText p-10">
          <b>Piqued your curiosity? Please book a time to talk!</b>
        </div>

        <div className="container flex flex-col items-center">
          <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule (Zoom)</button>
        </div>

        <div>
          <p className="py-10 gap-4"><b>Who are we?</b><br />Marmalade AI was started by people who are all remote, fascinated by networking, and have done a ton of freelancing, focus groups, and all kinds of software, and are passionate about making this useful! We know we can't do it without your help!</p>
        </div>
        <div>
          <StaticImage alt="Who are we?" src="../../images/Screenshot at 2023-04-14 19-16-47_834.png"/>
        </div>


      </main>

    </Layout>

  )
}

export default UserResearch;
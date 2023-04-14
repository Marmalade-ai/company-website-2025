import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
// import { navigate } from 'gatsby'
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
          <StaticImage height={200} alt="User Research" src="../../images/ux-indonesia-w00FkE6e8zE-unsplash.jpg"/>
          <p className="largeText gap-5 "><b>User Research</b> on networking ("professional networking")<br /><br />Please help!!</p>
          <p>Are you a specialist in:</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 p-4">
          <p className="sm:text-lg"><b><input type="checkbox"/> UX Design?</b></p>
          <StaticImage height={200} alt="UX design" src="../../images/alvaro-reyes-KxVlKiqQObU-unsplash.jpg"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4">
          <p className="sm:text-lg"><b><input type="checkbox"/> Digital Marketing?</b></p>
          <StaticImage height={200} alt="digital marketing" src="../../images/jason-goodman-Oalh2MojUuk-unsplash.jpg"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 p-4">
          <p className="sm:text-lg"><b><input type="checkbox"/> Machine Learning?</b></p>
          <StaticImage height={200} alt="machine learing" src="../../images/andy-kelly-0E_vhMVqL9g-unsplash.jpg"/>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={303} alt="button" src="../../images/Marmalade_user_research_button.png"/>
          <p><b>Compensation?</b></p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={200} height={200} alt="Free subscription" src="../../images/erik-mclean-cYQtW1HTpbg-unsplash.jpg"/>
          <p><b>Free Subscription</b>: We appreciate your help.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage width={200} height={200} alt="Input into the design" src="../../images/med-badr-chemmaoui-ZSPBhokqDMc-unsplash.jpg"/>
          <p><b>Make it work for you!</b> Here's your chance.</p>
        </div>

        {/* className="grid sm:grid-cols-2 gap-4" */}
        <div>
          <StaticImage alt="Networking is absurdly inefficient" src="../../images/Marmalade_AI_banner.png"/>
          {/* <p><b>Networking is absurdly inefficient</b>: Lorem ipsum dolor sit amet...</p> */}
        </div>
        
        <div>
          <p><b>Networking is absurdly inefficient</b>: Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage height={200} alt="Accurate" src="../../images/pexels-iconcom-226569.jpg"/>
          <p><b>Accurate: Connect with the people you want to connect with.</b>: Lorem ipsum dolor sit amet...</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage height={200} alt="Automatic" src="../../images/pexels-ivan-kazlouski-12175741.jpg"/>
          <p><b>Automatic: just have a profile of what you do.</b>: Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="What geographical scope?" src="../../images/pexels-photomix-company-5921677.jpg"/>
          <p><b>What geographical scope?</b>: Lorem ipsum dolor sit amet...</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="How to contact people?" src="../../images/pexels-alteredsnaps-12699062.jpg"/>
          <p><b>How to contact people?</b>: Lorem ipsum dolor sit amet...</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          <StaticImage alt="How to work with your history?" src="../../images/pexels-mikhail-nilov-7887040.jpg"/>
          <p><b>How to work with your history?</b>: Lorem ipsum dolor sit amet...</p>
        </div>

        <div>
          <p><b>Who are we?</b>: Lorem ipsum dolor sit amet...</p>
        </div>
        <div>
          <StaticImage alt="Who are we?" src="../../images/Screenshot at 2023-04-11 22-53-36.png"/>
          <p><b>Who are we?</b>: Lorem ipsum dolor sit amet...</p>
        </div>

      </main>

    </Layout>

  )
}

export default UserResearch;
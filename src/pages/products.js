import { navigate } from 'gatsby'
import React from 'react';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Marmalade Professional Networking - Products</title>
    <meta 
      name="description"
      content="Products for virtual networking using the Marmalade AI platform.
      In the beta, we are working closely with specialists in UX design,
      digital marketing, and machine learning to understand networking problems and make this
      really work for people."
    />
  </>
);


const Faq = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">Products</h1>
        <article className="pt-5">
          <div className="mx-auto">
            <p>
              Last reviewed: <time dateTime="2024-4-17">April 17, 2024.</time>
            </p>
            <br/>
                  
            <h2>Beta</h2>
              <button 
                className="button border border-3 hover:underline px-2 bg-white" 
                onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                  Waitlist me!
              </button>
    
            <h2>Production</h2>
    
              <p>Passive (Not yet! receive calls only) Free</p>
              <p>Premium (Not yet! receive and initiate calls) $19.95 per month, month to month subscription</p>
    
          </div>
        </article>
      </main>
    </Layout>
  )
};

export default Faq;

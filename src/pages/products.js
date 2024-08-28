import { navigate } from 'gatsby'
import React from 'react';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Marmalade Peer Groups - Beta</title>
    <meta 
      name="description"
      content="Peer groups using the Marmalade AI SaaS app service.
      In the beta, we are working with people in UX design,
      digital marketing, and machine learning to understand their issues and make this
      really work for people."
    />
  </>
);


const Faq = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3"></h1>
        <article className="pt-5">
          <div className="mx-auto">
            <p>
              Last reviewed: <time dateTime="2024-4-18">August 28, 2024.</time>
            </p>
            <br/>
                  
            <h2>Beta:</h2>
              {/* <p>- <i>Free</i></p> */}
              <button 
                className="w-34 bg-[#ff7f00] bg-opacity-50 border border-width-1 hover:underline px-2 py-1 rounded-lg text-black" 
                onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                 Signup (free)
              </button>
    
            <h2>Production:</h2>
    
              <p>- <i>Passive</i>: You can be contacted on topics and at times you control.</p>
              <p>- <i>Active</i>: You can initiate contact on a <i>pay for use</i> basis.</p>
    
          </div>
        </article>
      </main>
    </Layout>
  )
};

export default Faq;

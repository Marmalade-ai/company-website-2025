import { navigate } from 'gatsby'
import React from 'react';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Beta</title>
    <meta 
      name="description"
      content="In the beta, we are working with people in UX design,
      digital marketing, and machine learning to understand their issues and make this
      really work for people."
    />
  </>
);


const Faq = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">Beta</h1>
        <article className="pt-5">
          <div className="mx-auto">
                  
            <h3>Beta:</h3>

            <button 
                  className="w-30 bg-[#ff7f00] bg-opacity-100 border border-width-1 hover:underline px-1 py-0 rounded-lg text-black" 
                  onClick={()=>{navigate("https://docs.google.com/forms/d/1eu_w17ssDesxl9iYB2DYgmg_sldKc3q_qBu0EuSAz1g/")}}>
                    Try for free
            </button>
    
            <h3>Production:</h3>
    
              <p>- <i>Passive</i>: You can be contacted on topics and at times you control.</p>
              <p>- <i>Active</i>: You can initiate contact on a <i>pay for use</i> basis.</p>
    
            <br/>
              <p>
              Last reviewed: <time dateTime="2025-1-9">January 9, 2025.</time>
            </p>
          </div>
        </article>
      </main>
    </Layout>
  )
};

export default Faq;

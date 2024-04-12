import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
// import { navigate } from 'gatsby'

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Marmalade Professional Networking - Product</title>
    <meta 
      name="description"
      content="Product offerings for virtually networking using the Marmalade AI platform.
      In the beta, we are working closely with specialists in UX design,
      digital marketing, and machine learning to understand networking problems and make this
      really work for people."
    />
  </>
);


const Faq = () => (
  <Layout>
    <div><h1 className="pt-3 pb-3">Product</h1>
        <div className="container mx-auto">

            <div className="pt-5">

              <h2>Beta</h2>

              <p>subscribe (Free! Please bring others to the platform!)</p>

              <h3>Production</h3>

              <p>Passive (receive calls only) Free</p>
              <p>Premium (initiate calls) $19.95 per month, month to month subscription</p>
              
            </div>

        </div>

        <br />

    </div>
  </Layout>
);

export default Faq;

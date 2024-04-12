import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/layout';
// import { navigate } from 'gatsby'

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


const Faq = () => (
  <Layout>
    <div><h1 className="pt-3 pb-3">Products</h1>
        <div className="container mx-auto">

            <div className="pt-5">

              <h2>Beta</h2>

              <p>Subscribe (Free! Please bring others to the platform!)</p>

              <h2>Production</h2>

              <p>Passive (receive calls only) Free</p>
              <p>Premium (receive and initiate calls) $19.95 per month, month to month subscription</p>
              
            </div>

        </div>

        <br />

    </div>
  </Layout>
);

export default Faq;

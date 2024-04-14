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
      <main>
        <body>
          <div>
            <h1 className="pt-3 pb-3">Products</h1>
              <p>
                Last reviewed: <time dateTime="2024-4-11">April 11, 2024.</time>
              </p>
              <br/>
              <div class="max-w-screen-lg mx-auto">
                <div>
                  <h2>Beta</h2>
                    <p>Subscribe (Free! Please bring others to the platform!)</p>
                  <h2>Production</h2>
                    <p>Passive (receive calls only) Free</p>
                    <p>Premium (receive and initiate calls) $19.95 per month, month to month subscription</p>
                  </div>
              </div>
          </div>
        </body>
      </main>
    </Layout>
  )
};

export default Faq;

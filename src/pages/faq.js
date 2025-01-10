import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>FAQ</title>
    <meta 
      name="description"
      content="FAQ for the Marmalade networking app
    beta for UX design,
      digital marketing, and machine learning."
    />
  </>
);


const Faq = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">FAQ</h1>
        <article className="pt-5">
          <div className="mx-auto">
              <p>
                Last reviewed: <time dateTime="2025-1-1">January 1, 2025.</time>
              </p>
              <br/>
              {/* <div class="max-w-screen-lg mx-auto"> */}
              <div>
                <div>
                  <h2>Getting Started</h2>
                    <h3>How do I network?</h3>
                      <p>You register and based on your profile a peer group is created for you. 
                        If you change your profile, your peer group changes. 
                        </p>
                    <h3>What is the cost?</h3>
                      <p>Free for beta. After beta, probably freemium.</p>
                    <h3>Is this global?</h3>
                      <p>No. The beta is only in the U.S.</p>
                </div>
                <div>
                  <h2>Building Your network</h2>
                    <h3>How do I network?</h3>
                      <p>Fill out your profile, and you get a peer group with people are registered. 
                        Please check back regularly as people join.</p>
                    
                    <h3>Can I find a job through this?</h3>
                      <p>Our focus is networking.  
                        80% of jobs are found by networking, so yes, being on the platform helps build 
                        your professional network. We're actually hearing from hiring managers that they now get
                        deluged by resumes tailored to match a job description and get 
                        past the ATS. All the more reason to network!</p>

                    <h3>What can I learn through this?</h3>
                      <p>You share and learn whatever is new or relevant in your work.</p>
                    
                    <h3>What if I want to be mentored? Or to mentor?</h3>
                      <p>Indicate that.</p>

                    <h3>How do I contact people?</h3>
                      <p>We want to incorporate video chat, including calls and 
                        scheduled calls, indicating you are not available (default), and                     (when), 
                        about what topics.</p>
                    
                    <h3>What if my area is not supported?</h3>
                      <p>In beta, however, the focus is on 
                        a small number of specific fields. If your area is not covered,
                        you may not find the matching to be as good.</p>
                </div>
                <div>
                  <h2>Your Information</h2>
                    <h3>Will my information be protected?</h3>
                      <p>Yes. See our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

                    <h3>Will my information be sold to third parties?</h3>
                      <p>No.</p>
                    
                    <h3>Will there be advertising on the website?</h3>
                      <p>No.</p>
                    
                    <h3>How do you plan to make money?</h3>
                      <p>As a freemium subscription service.</p>

                    <h3>Where else can I ask questions about Marmalade AI?</h3>
                      <p>Please contact us at <a href="mailto:info@marmalade.ai">info@marmalade.ai</a></p>

                </div>
              </div>                
          </div>
          </article>
        </main>    
    </Layout>
  )
};

export default Faq;

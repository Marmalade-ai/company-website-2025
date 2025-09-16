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
      content="FAQ for the Marmalade app."
    />
  </>
);


const Faq = () => {
  return (
    <Layout>
      <main><h1 className="pt-3 pb-3">FAQ</h1>
        <article className="pt-5">
          <div className="mx-auto">
              <div>
                <div>
                  <h2>Getting Started</h2>
                    <h3>How do I network?</h3>
                      <p>Register. Based on your profile, you get a peer group. 
                        If you change your profile, your peer group changes. 
                        </p>
                    <h3>What is the cost?</h3>
                      <p>Free for beta.</p>
                    <h3>Is this global?</h3>
                      <p>No. The beta is the <i>New York Metropolitan Area</i>.</p>
                    <h3>What is the <i>New York Metropolitan Area</i></h3>
                      <p>Counties in the <i>New York Metropolitan Area</i> (U.S. Census Bureau):</p>
                        <p><u>New York</u>: Bronx, Dutchess, Kings, Nassau, New York, Orange, Putnam, Queens, Richmond, Rockland, Suffolk, Sullivan, Ulster, and Westchester</p>
                        <p><u>New Jersey</u>: Bergen, Essex, Hudson, Hunterdon, Mercer, Middlesex, Monmouth, Morris, Ocean, Passaic, Somerset, Sussex, and Union</p>
                        <p><u>Connecticut</u>: Fairfield, Litchfield, and New Haven</p>
                        <p><u>Pennsylvania</u>: Pike</p>
                                                
                </div>
                <div>
                  <h2>Building Your network</h2>
                    <h3>How do I network?</h3>
                      <p>Register. You can contact anyone in your peer group at times and on topics you control, if that person chooses to set times and topics when they can be contacted (default is none).  
                        Please check back regularly as the network changes.</p>

                         
                    
                    <h3>Can I find a job through this?</h3>
                      <p>80% of jobs are found by networking, so yes, being on the platform helps build 
                        your network and find jobs. We hear that hiring managers now get
                        deluged by resumes tailored to match a job description. All the more reason to network!</p>

                    <h3>What can I learn through this?</h3>
                      <p>You can learn whatever is new or relevant in your peer group.</p>
                    
                    <h3>What if I want to be mentored? Or to mentor?</h3>
                      <p>Indicate it and see what happens.</p>

                    <h3>How do I contact anyone?</h3>
                      <p>Email, text. You can indicate if you are not available (the default), and when and about what.</p>
                    
                    <h3>What if my area is not supported?</h3>
                      <p>Beta is limited to  
                        specific fields in New York Metro Area. If your specialization is not included,
                        you may not find the matching to be very good.</p>
                </div>
                <div>
                  <h2>Your Information</h2>
                    <h3>Is my information protected?</h3>
                      <p>Yes. See our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

                    <h3>Will my information be sold to third parties?</h3>
                      <p>No.</p>
                    
                    <h3>Will there be advertising?</h3>
                      <p>No plan. If we add that later, we would say so.</p>
                    
                    <h3>How do you plan to make money?</h3>
                      <p>As a freemium subscription service.</p>

                    <h3>Where else can I ask questions about Marmalade AI?</h3>
                      <p>Please contact us at <a href="mailto:info@marmalade.ai">info@marmalade.ai</a></p>
                  <br/>
                      <p>
                Last reviewed: <time dateTime="2025-9-16">September 16, 2025.</time>
              </p>

                </div>
              </div>                
          </div>
          </article>
        </main>    
    </Layout>
  )
};

export default Faq;

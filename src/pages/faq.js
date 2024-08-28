import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Marmalade peer groups - FAQ</title>
    <meta 
      name="description"
      content="FAQ for peer groups that use the Marmalade app.
      The beta is for people in UX design,
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
                Last reviewed: <time dateTime="2024-8-28">August 28, 2024.</time>
              </p>
              <br/>
              {/* <div class="max-w-screen-lg mx-auto"> */}
              <div>
                <div>
                  <h2>Getting Started</h2>
                    <h3>How do I create a peer group?</h3>
                      <p>You register and based on your profile a peer group is created for you. It is dynamic, in the sense that 
                        if you change your profile, your peer group will change. We'd love to listen to your needs and 
                        have you actively involved.</p>
                    <h3>What does it cost?</h3>
                      <p>Free for beta users. The beta page talks about what to expect after beta.</p>
                    <h3>Is this a global service?</h3>
                      <p>No. The beta is only available in the U.S.</p>
                </div>
                <div>
                  <h2>Building Your Network</h2>
                    <h3>How do I connect with other people?</h3>
                      <p>Fill out your profile, and you get a peer group with a subset of other people that have registered. 
                        So please check back regularly as people join.</p>
                    
                    <h3>Can I find a job through this?</h3>
                      <p>Our primary focus is enabling you to stay up-to-date by enabling your peer group, but 
                        80% of jobs are found by networking, so sure, being on the platform helps build 
                        your professional network. We're actually hearing from hiring managers that they now get
                        deluged by resumes tailored to match a job description and get 
                        past the ATS. All the more reason to network!</p>

                    <h3>What can I learn through this?</h3>
                      <p>Your peer group is a resource for learning and sharing whatever is new or relevant in your work.</p>
                    
                    <h3>What if I want to be mentored? Or to mentor?</h3>
                      <p>Indicate that in your profile.</p>

                    <h3>How do I contact people?</h3>
                      <p>For now, set up a Zoom call. We plan to incorporate video chat, including calls and 
                        scheduled calls, indicating you are not available (default) or are available (when), 
                        about what topics.</p>
                    
                    <h3>What if my area is not supported?</h3>
                      <p>Peer groups can be helpful for everyone. In beta, however, the focus has to be on 
                        a small number of specific fields. If your area is something else not covered in beta,
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
                      <p>As a subscription service.</p>

                    <h3>Where else can I ask questions about Marmalade AI?</h3>
                      <p>Please <a href="mailto:info@marmalade.ai">contact us</a></p>

                </div>
              </div>                
          </div>
          </article>
        </main>    
    </Layout>
  )
};

export default Faq;

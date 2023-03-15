import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
// import Seo from '../components/seo';

export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Marmalade Networking - FAQ</title>
    <meta 
      name="description"
      content="Marmalade Networking - FAQ 
      Marmalade AI, Inc. is focused in 2023 on working closely with specialists in UX design,
      digital marketing, and machine learning to understand networking problems."
    />
  </>
);


const Faq = () => (
  <Layout>
  <main><h1>About Marmalade Networking - FAQ</h1>
    <article className="pt-5">
      <div className="container mx-auto">
          <div>
            <h2>Getting Started</h2>
            <h3>How do I get started?</h3>
            <p>
              Click the &quot;book a demo&quot; button on the homepage.
            </p>
            <h3>What does it cost?</h3>
            <p>Free for Early Access users who register now.</p>
            <h3>Is this a global service?</h3>
            <p>
              No. The Early Access program is only available in the U.S.
            </p>
            <div className="pt-5" />
          </div>
          <div>
            <h2>Building Your Network</h2>
            <h3>How do I connect with other people?</h3>
            <p>
              Based on your profile, Marmalade AI creates automatically a network that is virtual. You control communications.
            </p>
            <h3>Can I find a job through this?</h3>
            <p>
              Not directly. Marmalade AI helps build your professional network, which is how 75-80% of work is found.
            </p>
            <h3>What can I learn through this?</h3>
            <p>
              A professional network is a great resource for learning and
              sharing whatever is new or relevant in your work.
            </p>
            <h3>What if I want to be mentored? Or to mentor?</h3>
            <p>Indicate that in your profile.</p>

            <h3>How do I contact people?</h3>
            <p>
              For now, we suggest you set up a Zoom or similar call. 
              We plan to incorporate video chat, including immediate calls, scheduled calls, indicating you are or are not available, and so forth.
            </p>
            <h3>
              What if my specialization is not supported?
            </h3>
            <p>
              Networking applies to everyone. For "Early Access" with Marmalade AI, 
              the focus is on specific areas. If outside of those,
              you are welcome to participate, but you may not find the
              matching to be as good. We expect to expand over time.
            </p>
            <div className="pt-5" />
          </div>
          <div>
            <h2>Your Information</h2>
            <h3>Will my information be protected?</h3>
            <p>
              Yes. See our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
            <h3>Will my information be sold to third parties?</h3>
            <p>No.</p>
            <h3>Will there be advertising on the website?</h3>
            <p>No.</p>
            <h3>How do you plan to make money?</h3>
            <p>As a subscription service.</p>
            <div className="pt-5" />
          </div>
          <div />{' '}
        </div>
        <div>
        <h2>Questions?</h2>
        <div>
          <h3>Where else can I ask questions about Marmalade AI?</h3>
          <p>
            Please <a href="mailto:info@marmalade.ai">contact us</a> or schedule a demo call.
          </p>
        </div>
        </div>
        <br />
    </article>
  </main>
  </Layout>
);

export default Faq;

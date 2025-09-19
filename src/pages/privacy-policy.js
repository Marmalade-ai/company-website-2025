import React from 'react';
import Layout from '../components/layout';

export const Head = () => (
  <> 
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Privacy Policy</title>
    <meta 
      name="description"
      content="Marmalade AI does not currently do advertising on the website."
    />
  </>
);


const PrivacyPolicy = () => {
  return (
    <Layout>
    <main><h1 className="pt-3 pb-3">Privacy Policy</h1>
      <article className="pt-5">
      <div className="mx-auto">

          <p>
            Marmalade AI has created this Privacy Notice to explain why we
            collect particular information and how we will protect your personal
            privacy when you visit our website or otherwise engage with Marmalade
            AI (e.g., web browsing, online chatting, and online messaging)
            including through our company website and the Marmalade AI web
            application.
          </p>
          <p>
            The following discloses information collection, use, storage, and
            other data processing practices by Marmalade AI.
          </p>

          <h2>Collection of Personal Information</h2>
          <p>
            Personal information is any information that personally identifies you
            or from which you could be identified. This may include your name,
            physical address, telephone number, email address, social security
            number or other numerical identifier, and IP address.
          </p>
          <p>
            Marmalade AI may collect your personal information through your access
            and use of websites, web-based applications, or mobile applications,
            during conversations or correspondence with Marmalade AI
            representatives, or when you complete an online application or inquiry
            form.
          </p>

          <h2>We use various technologies to collect information</h2>
          <h3>Cookies</h3>
          <p>
            The Marmalade AI website uses cookies. Cookies are text files that are
            stored in a computer system via an Internet browser.
          </p>
          <h3>Internet Protocol (IP) Address</h3>
          <p>
            We collect an IP address from visitors to our site. An IP address
            is a number that is automatically assigned to your computer when you
            use the Internet. We use IP addresses to help diagnose problems with
            our server, administer our site, analyze trends, and gather broad
            demographic information for aggregate use in order for us to improve
            the site, and deliver customized, personalized content. In some cases
            we may use your IP address to customize content based on your
            location.
          </p>

          <h2>Third Parties</h2>
          <p>We may disclose your information to third parties as follows:</p>
          <h3>Third-Party Service Providers and Partners</h3>
          <p>
            At times Marmalade AI will use third parties to process your
            information on our behalf, for example to provide services, analysis,
            research and development, optimization and other internal purposes,
            including, without limitation, to compile usage data.
          </p>
          <h3>Required by Law</h3>
          <p>
            We may share your information with third parties to the extent we are
            required to do so by law, court order, or subpoena.
          </p>
          <h3>Consent</h3>
          <p>
            We may seek your consent to disclose your information to third parties
            if we are required to do so. Where we have sought, and you have
            provided, your express consent for a particular purpose, please note
            you have the right to withdraw your consent at any time by notifying
            us through the contact information shown below.
          </p>
          <h3>De-Identified and Aggregate Information</h3>
          <p>
            We may use and disclose information about our applicants in
            de-identified or aggregate form without limitation.
          </p>
          <h3>International Transfers</h3>
          <p>
            We may transfer your information to third parties located in other
            countries. These transfers are made subject to appropriate technical
            safeguards and contractual provisions to ensure the security of your
            information.
          </p>
          <p>
            Occasionally, we may contract with a third party to communicate on our
            behalf to third-party contacts. We do not collect the email
            addresses or contact information from these third parties, and we do
            not have access to their mailing lists.
          </p>
          <p>
            We may provide third-party mailers with a suppression list of contacts
            to exclude from their email distribution list. In this situation, the
            third party does not have permission to keep or market to contacts
            contained in these suppression lists, or to use them in any way other
            than as a suppression list for a mailing they are providing on our
            behalf.
          </p>
          <p>
            Other than as described above, we will not share your personal
            information with any third parties.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Marmalade AI does not knowingly collect information from children as
            defined by local law, and does not target its websites or mobile
            applications to children under these ages. We encourage parents and
            guardians to take an active role in their children's online and
            mobile activities and interests.
          </p>

          <h2>Data Retention</h2>
          <p>
            The need to retain data varies depending on the type of data.
            Marmalade AI will retain your personal data as long as necessary for
            the purpose of processing (e.g., archival, data analysis). We may also
            retain and use your information in order to comply with our legal
            obligations, resolve disputes, prevent abuse, and enforce our
            agreements.
          </p>

          <h2>Security</h2>
          <p>
            Marmalade AI takes seriously the trust you place in us. All
            information provided to Marmalade AI is transmitted using SSL (Secure
            Socket Layer) encryption. SSL is a proven coding system that allows
            your browser to automatically encrypt, or scramble, data before you
            send it to us. To prevent unauthorized access or disclosure, to
            maintain data accuracy, and to ensure the appropriate use of the
            information, Marmalade AI utilizes reasonable and appropriate
            technical and administrative procedures to safeguard the information
            we collect and process. We protect account information by placing it
            on a secure portion of our website that is only accessible by certain
            qualified employees of Marmalade AI. Unfortunately, however, no data
            transmission over the internet is 100 percent secure. While we strive
            to protect your information, we cannot ensure or warrant the security
            of such information. We strongly advise you not to share your password
            with anyone.
          </p>

          <h2>Changes to the Privacy Notice</h2>
          <p>
            Changes may be made to this Privacy Notice and personal information
            may be used for new purposes. When significant changes are made to our
            privacy practices, they will be disclosed here. For your convenience
            please refer to the last updated date displayed on this page.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Privacy Notice, the practices of
            this site, or your dealings with this site, you can send email to{' '}
            <a href="mailto:privacy@marmalade.ai">privacy@marmalade.ai</a>.
          </p>
          <br/><br/>          <p>
            Last reviewed: <time dateTime="2025-9-16">September 16, 2025.</time>
          </p>
        </div>
      </article>
    </main>
    </Layout>
  );
}

export default PrivacyPolicy;

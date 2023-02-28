import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const PrivacyPolicy = () => (
  <Layout>
    <h1 className="text-3xl font-bold underline">
        Hello world!
    </h1>
    <Seo title="Privacy Policy" description="Privacy Policy" />
    <div class="flex">
      <div class="p2 bg-yellow-100">block 1</div>
      <div class="p2 bg-blue-100">block 2</div>
      <div class="p2 bg-green-200">block 3</div>
      <div class="p2 bg-red-300">block 4</div>
    </div>
  </Layout>
);

export default PrivacyPolicy;

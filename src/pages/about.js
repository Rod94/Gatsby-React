import React from 'react';
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About page</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage;


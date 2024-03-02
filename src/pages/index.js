import React from "react";
import Hero from "../components/Hero";
import "../assets/css/main.css";
import FeaturesList from "../components/FeaturesList";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { SEO } from "../components/seo";
const index = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="fcfa-container">
        <div>
          <FeaturesList />
        </div>
        <div>
          <CallToAction />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;

export const Head = () => <SEO />;

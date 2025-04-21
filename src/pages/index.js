import React from "react";
import "../assets/css/main.css";

import Hero from "../components/Hero";
import FeaturesList from "../components/FeaturesList";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Seo } from "../components/Seo";
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

export const Head = () => <Seo />;

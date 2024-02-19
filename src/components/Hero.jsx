import React from "react";
import Navbar from "./Navbar";

import { StaticImage } from "gatsby-plugin-image";
import WaitListForm from "./WaitListForm";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-container">
        <section className="hero-text">
          <div className="text">
            <h1 className="headline">
              Unlock Limitless Learning with DiscussBox!
            </h1>
            <h3 className="sub-headline">
              Collaborate with a vibrant community, access diverse high-quality
              resources, learn offline.
            </h3>
          </div>
          <div>
            <WaitListForm />
          </div>
        </section>

        <section className="hero-image-container">
          <StaticImage
            className="hero-image"
            src="../assets/images/hero-image.png"
            placeholder="blurred"
            alt="Two 3D prototypes for DiscussBox Platform"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;

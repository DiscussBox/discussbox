import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Feature = ({ features = [] }) => {
  return (
    <div className="card-container">
      {features.map((feature) => {
        const {
          id,
          heading,
          description,
          image: {
            asset: { gatsbyImageData: image, filename },
          },
        } = feature;
        const pathToImage = getImage(image);

        return (
          <div key={id} className="card">
            <div className="card__text">
              <div className="card__title">
                <h5 className="title">{heading}</h5>
              </div>
              <div className="card__description">
                <p className="description">{description}</p>
              </div>
            </div>
            <div className="card__image">
              <GatsbyImage className="feature-image" image={pathToImage} alt={filename} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feature;

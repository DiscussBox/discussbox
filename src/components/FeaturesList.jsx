import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Feature from "./Feature";

const query = graphql`
  query {
    allSanityFeatures(sort: {_createdAt: ASC}) {
      nodes {
        id
        heading
        description
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout:CONSTRAINED)
            filename
          }
        }
      }
    }
  }
`;

const FeaturesList = () => {
  const {
    allSanityFeatures: { nodes: features },
  } = useStaticQuery(query);
  return (
    <div className="features-container">
      <div className="heading-section">
        <h4>Features</h4>
        <div className="line"></div>
      </div>
      <div>
        <Feature features={features} />
      </div>
    </div>
  );
};

export default FeaturesList;

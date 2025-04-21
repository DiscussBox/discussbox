import React from "react";
import WaitListForm from "./WaitListForm";

const CallToAction = () => {
  return (
    <div className="cta">
      <div className="cta__text">
        <h4 className="cta__title">
          Eager To Embark on This Learning Journey?
        </h4>
      </div>
      <div className="cta__signup">
        <div className="cta__signup-text">
          <p>Sign Up To Our WaitList!</p>
        </div>
        <div className="cta__signup-form">
          <WaitListForm colorClass="dialog-button" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

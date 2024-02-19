import React, { useRef } from "react";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";
import SubmitDialog from "./SubmitDialog";

const WaitListForm = ({ colorClass }) => {
  const [state, handleSubmit, reset] = useForm("xpzvdowz");
  const inputRef = useRef(null);

  return (
    <div className="cta-form">
      <form className="input-container" onSubmit={handleSubmit}>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          ref={inputRef}
          className="input"
          name="email"
          type="email"
          placeholder="me@example.com"
          required
        />
        <p className="input-footnote">
          *Sign up for our waitlist to get notified once we launch!
        </p>
        <div className="cta-btn">
          <Button
            text={state.submitting ? "Joining..." : "Join The Waitlist"}
            disabled={state.submitting}
            colorClass={colorClass}
          />
        </div>
      </form>
      {state.succeeded && <SubmitDialog formReset={reset} elRef={inputRef} />}
    </div>
  );
};

export default WaitListForm;

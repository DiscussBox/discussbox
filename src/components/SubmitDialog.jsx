import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const SubmitDialog = ({ formReset, elRef }) => {
  const [isOpen, setIsOpen] = useState(true);
  const setAction = () => {
    setIsOpen(false);
    elRef.current.value = "";
    formReset();
  };
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog">
      <div className="backdrop" aria-hidden="true" />
      <div className="dialog-body">
        <Dialog.Panel className="dialog-panel">
          <Dialog.Title className="dialog-title">Thank You!</Dialog.Title>
          <Dialog.Description className="dialog-description">
            Successfully joined the waitlist!
          </Dialog.Description>
          <p className="dialog-text">A Big Hearty Welcome!🎉</p>
          <Button
            colorClass="dialog-button"
            onClick={setAction}
            text="All Done!"
          />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SubmitDialog;

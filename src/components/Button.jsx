import React from "react";

const Button = ({ text, disabled,colorClass, onClick = () => {},  }) => {
  return (
    <div className="button">
      <button type="submit" className={`btn + ${colorClass}`} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;

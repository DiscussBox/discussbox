import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <footer className="footer">
      <div className="footer__text">
        <div className="footer__line" />
        <p>&copy; {year} DiscussBox. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;

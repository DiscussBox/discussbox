import React from "react";

import Button from "./Button";
import logo from "../assets/images/nav-logo.png";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="DiscussBox Landing Page" />
          </Link>
        </div>
        <div className="nav-button">
          <a href="https://www.figma.com/proto/5sCKKCxEJtc3lukVWgmRqw/Major-Design-Tutorial?type=design&node-id=105-132&t=SWxIDnGCUkUuY7ge-9&scaling=scale-down&page-id=0%3A1&starting-point-node-id=105%3A132&show-proto-sidebar=1">
            <Button text="View Demo" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

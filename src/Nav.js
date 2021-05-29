// Navbar Component

import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    // the below return removes the listener if the useEffect is fired off again avoiding multiple listeners
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      {/* Logo */}
      <img
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      ></img>

      {/* User Avatar */}
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        className="nav__avatar"
        alt="User Avatar"
      ></img>
    </div>
  );
}

export default Nav;

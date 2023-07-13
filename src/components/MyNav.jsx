import React from "react";
import imglogo from "../assets/image/png/karmiclogo.png";
const MyNav = () => {
  return (
    <section className="Homepage-css">
      <div></div>
      <header className="py-3">
        <div className="container_css">
          <nav className="d-flex justify-content-between align-items-center">
            <a href="#logo">
              <img src={imglogo} alt="logo" />
            </a>
            <input type="checkbox" id="menuIcon" className="d-none" />
            <label for="menuIcon" className="d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className="d-flex justify-content-center align-items-center p-0 mb-0 gap-5 nav_bar">
              <li>
                <a className="name1" href="#">
                  HOME
                </a>
              </li>
              <li>
                <a className="name1" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="name1" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="name1" href="#">
                  About
                </a>
              </li>
              <li>
                <button className="d-lg-none B-connect">Connect Wallet</button>
              </li>
            </ul>
            <button className="d-lg-block d-none B-connect">
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default MyNav;

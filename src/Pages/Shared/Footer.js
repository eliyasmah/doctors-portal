import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer style={{ background: `url(${footer})`, backgroundSize: "cover" }}>
      <div className="footer p-10">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">our address</span>
          <a className="link link-hover">1216-Dhaka,Mirpur-2</a>
        </div>
      </div>
      <div className="text-center my-10">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../Components/style.css";
import icon1 from "../Images/icon1.png";
import icon3 from "../Images/icon3.png";
import icon4 from "../Images/icon4.png";
import icon5 from "../Images/icon5.png";
import icon6 from "../Images/icon6.png";
import icon2 from "../Images/icon2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="whatsapp-icon">
        <a>
          <img src={icon2} width={75} alt="img" />
        </a>
      </div>

      <div className="footer-sec">
        <div className="company">
          <h3 className="footer-heading">About Company</h3>
          <div className="conpany-info">
            <p>
              Prish Auditors and Consultants, UAE is an extended version of
              Prish in India providing comprehensive financial services to its
              clients with the aim of delivery the best quality services on time
              in regard to the client's requirements and the business
              operations.
            </p>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Our Links</h3>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/team">Team</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/reach">Reach us</Link>
            <Link>Career</Link>
          </div>
        </div>

        <div className="footer-social-links">
          <h3 className="footer-heading">Follow us</h3>
          <div className="follow-links">
            <a target="blank">
              <img src={icon1} width={50} alt="img" />
            </a>
            <a target="blank">
              <img src={icon3} width={50} alt="img" />
            </a>
            <a target="blank">
              <img src={icon4} width={50} />
            </a>
            <a target="blank">
              <img src={icon5} width={50} />
            </a>
            <a target="blank">
              <img src={icon6} width={50} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

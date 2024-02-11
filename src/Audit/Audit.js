import React from "react";
import img from "../Images/trusthandshake.jpg";
import { IoCheckmark } from "react-icons/io5";
import ".//audit.css";

const Audit = () => {
  return (
    
    <>
      <section className="audit-sec-1">
        <div className="info">
          <h1 className="text">Audit</h1>
          </div>
        <div className="audit-info-container">
          <div className="info-paragraphs">
            <p className="text">
              Welcome to Prish Auditors, a distinguished auditing and advisory
              firm dedicated to serving a diverse clientele of large and
              middle-market businesses and organizations. Our team of
              multi-disciplinary professionals is committed to delivering
              unparalleled audit and assurance services across various
              industries.
            </p>
            <p className="text">
              At Prish Auditors, we take pride in our unwavering commitment to
              upholding the highest standards of integrity, objectivity, and
              independence. These principles form the bedrock of our robust
              quality control measures, which consistently surpass industry
              requirements. Our relentless pursuit of quality has positioned us
              as a premier provider of assurance services, trusted by numerous
              industries.
            </p>
            <p className="text">
              Choose Prish Auditors for a steadfast partner in navigating the
              complexities of the business world. Our commitment to excellence
              ensures that your organization receives the highest level of
              assurance and financial clarity.
            </p>
          </div>
          <div className="audit-img">
            <img src={img} alt="img" width={500} />
          </div>
        </div>

        <div className="more-audit-info">
          <div className="audit-key-points-heading">
            <h1>
              Area of specialization include : 
            </h1>
          </div>
          <div className="audit-key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} color="#0a446c" />
            </span>
            <p className="text">Audits - External and Internal audits</p>
          </div>
          <div className="audit-key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} color="#0a446c" />
            </span>
            <p className="text">Compilations and Reviews</p>
          </div>

          <div className="audit-key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} color="#0a446c" />
            </span>
            <p className="text">Agreed Upon Procedures </p>
          </div>

          <div className="audit-key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} color="#0a446c" />
            </span>
            <p className="text">(AUP) Financial Due Diligence</p>
          </div>

          <div className="audit-key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} color="#0a446c" />
            </span>
            <p className="text">
              Fraud Prevention, Detection, and Investigation
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Audit;

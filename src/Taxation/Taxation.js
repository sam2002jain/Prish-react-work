import React from "react";
import ".//taxation.css";
import img from "../Images/main-img.jpeg";

const Taxation = () => {
  return (
    <>
      <section className="taxation-sec-1">
      <div className="info">
        <h1 className="text">Taxation</h1>
      </div>
        <div className="taxation-info-container">
          <div className="info-paragraphs">
            <p className="text">
              Welcome to Prish Auditors, where we recognize the indispensable
              nature of tax implications in today's business landscape. We
              understand the challenges faced by taxable entities, be they
              companies or individuals, in managing tax matters and resolving
              issues with the concerned authority (FTA).
            </p>
            <p className="text">
              Our adept experts at Prish Auditors specialize in navigating the
              intricate world of taxation, staying abreast of regulatory changes
              both locally and internationally. Operating within the UAE and
              beyond, our goal is to ensure your compliance, regardless of your
              operational geography.
            </p>
            <p className="text">
              Explore our comprehensive range of tax services, encompassing both
              compliance and advisory aspects. Whether you need assistance with
              tax registration, filing returns, structuring your affairs, or
              strategic tax planning, our dedicated tax experts are here to
              guide you through the process.
            </p>

            <p className="text">
              At Prish Auditors, we pride ourselves on our commitment to keeping
              up with evolving trends and changes. Our aim is to help you
              successfully navigate the complexities of both the commercial and
              legislative landscapes, providing you with the insights and
              expertise needed for effective tax management.
            </p>
          </div>
          <div className="taxation-img">
            <img src={img} alt="img" width={500} />
          </div>
        </div>

        <div className="taxation-2-container">
          <h1>Corporate tax:</h1>
          <p className="text">
            The UAE is set to implement Corporate Tax, effective for financial
            years commencing on or after June 1, 2023. Corporate Tax represents
            a direct tax imposed on the net profit of corporations and other
            businesses, signaling a significant development in the fiscal
            landscape.
          </p>
        </div>

        <div className="taxation-2-container">
          <h1>Indirect tax: </h1>
          <p className="text">
            Prish Auditors boasts a team of proficient and seasoned VAT
            specialists dedicated to enhancing the efficiency of your business
            operations. We provide precise and dependable VAT services tailored
            to meet the unique needs of businesses in the United Arab Emirates.
          </p>
        </div>
      </section>
    </>
  );
};

export default Taxation;

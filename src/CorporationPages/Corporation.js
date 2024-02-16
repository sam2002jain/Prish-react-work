import React from "react";
import ".//corporation.css";
import CorporationCard from ".//CorporationCards";
import { Data } from ".//CorporationData";
import img from "../Images/img8.jpeg";

const Corporation = () => {
  return (
    <section className="corporation-sec">
      <div className="corporation-container">
        <div className="info-paragraphs">
          <p className="text">
            Prish Auditors specializes in a comprehensive range of corporation
            services aimed at facilitating every stage of your business journey.
            Our expert team is dedicated to providing seamless solutions
            tailored to your specific needs, ensuring smooth operations and
            compliance with regulatory requirements.
          </p>
          <br />
          <p className="text">
            With Prish Auditors as your trusted partner, you can confidently
            navigate the intricacies of corporation services, secure in the
            knowledge that you have the support of experienced professionals
            dedicated to your success.
          </p>
        </div>
        <div className="corporation-img">
          <img src={img} alt="img" width={500} />
        </div>
      </div>

      <div className="corporation-container-2">
        <div className="corporation-cards">
          {Data.map((Data) => (
            <CorporationCard
              key={Data.id}
              image={Data.image}
              heading={Data.heading}
              paragraph={Data.paragraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corporation;

import React from "react";
import ".//corporation.css";

const CorporationCards = (props) => {
  return (
    <>
      <div key={props.id} className="corporation-card">
        <div className="corporation-card-img">
          <img src={props.image} width={450} />
        </div>
        <div className="corporation-info">
          <h2 className="corporation-heading"> {props.heading}</h2>
          <p className="text corporation-para">{props.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default CorporationCards;

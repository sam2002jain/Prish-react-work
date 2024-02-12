import React from "react";
import ".//corporate.css";

export default function CorporateCard(props) {
  return (
    <>
      <div key={props.id} className="corporate-cards">
        <div className="corporate-card-img">
          <img src={props.image} width={500} />
        </div>
        <div className="corporate-info">
          <h2 className="corporate-heading"> {props.heading}</h2>
          <p className="corporate-para">{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}

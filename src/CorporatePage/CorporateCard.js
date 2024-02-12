import React from "react";
import ".//corporate.css";

export default function CorporateCard(props) {
  return (
    <>
      <div key={props.id} className="corporate-card">
        <div className="corporate-card-img">
          <img src={props.image} width={450} />
        </div>
        <div className="corporate-info">
          <h2 className="corporate-heading"> {props.heading}</h2>
          <p className="text corporate-para">{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}

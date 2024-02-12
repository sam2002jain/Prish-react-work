import React from "react";
import ".//corporate.css";
import { Data } from ".//CorporateData";
import CorporateCard from ".//CorporateCard";

function Corporate() {
  return (
    <>
      <section className="corporate-sec">
        <div className="corporate-sec-1  ">
          <div className="info-paragraphs">
            <p className="text">
              Prish Auditors offers invaluable expertise in business advisory
              and consulting. Whatever challenges your business encounters, rest
              assured that we've likely encountered them before. Our seasoned
              team possesses the perfect blend of technical prowess and
              practical wisdom to propel your business towards success.
            </p>
            <p className="text">
              Clients turn to us for advisory services for various reasons. We
              boast a team of specialists who excel in strategic planning
              sessions, meticulously identifying areas within your business that
              may be hindering its progress. Through insightful discussions and
              comprehensive analysis, we provide tailored solutions to unleash
              your business's full potential.
            </p>
            <p className="text">
              At Prish Auditors, we pride ourselves on offering a comprehensive
              suite of advisory services, constantly pushing the boundaries with
              our technical expertise and staying abreast of the latest industry
              trends. Our multidisciplinary team comprises specialists from
              diverse sectors, ensuring that we can address the unique needs of
              every client.
            </p>
            <p className="text">
              With our extensive network of five offices spanning across the
              UAE, Prish Auditors delivers a wide array of advisory services
              tailored to your business's specific requirements.
            </p>
          </div>

          <div className="corporate-img">
            <img src="./CorporateImage/img1.jpeg" alt="img" width={500} />
          </div>
        </div>

        <div className="corporate-sec-2">
          <div className="corporate-sec-cards">
            <h1 className="corporate-sec-2-heading">
              Explore the range of services offered by our Consultancy division:
            </h1>
            <div className="corporate-cards">
              {Data.map((Data) => (
                <CorporateCard
                  key={Data.id}
                  image={Data.image}
                  heading={Data.heading}
                  paragraph={Data.paragraph}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Corporate;

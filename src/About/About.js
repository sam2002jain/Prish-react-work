import React from "react";
import "../About/about.css";
import { IoCheckmark } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import img from "../Images/img5.jpg";

const About = () => {
  return (
    <>
      <section className="sec1">
      <div className="info">
          <h1 className="text">About Us</h1>
          </div>
      </section>
      <section className="sec2">
        <div className="row">
          <div className="row-img">
            <img src={img} alt="img" width={550} />
          </div>
          <div className="row-info">
            <h1>A Trusted Name For Accounting and Business Needs.</h1>
            <p className="text">
              PRISH AUDITORS, a distinguished firm specializing in professional
              services, stands at the forefront of excellence in various domains
              such as Audit & Assurance, Tax Consultancy, Business Advisory &
              Consulting.
            </p>
            <p className="text">
              Headquartered in the vibrant city of Dubai, United Arab Emirates,
              Prish Auditors extends its services across all emirates of the UAE
              through a network of strategically located offices. As a prominent
              member of The Institute of Chartered Accountants, our
              international presence is complemented by a wealth of professional
              expertise amassed over decades.
            </p>
            <p className="text">
              Embracing each client relationship as a partnership, we firmly
              believe that our success mirrors the success of our clients.
              Dedicated to making lasting improvements to their performance,
              Prish Auditors boasts a uniquely equipped firm, guided by a team
              with extensive training, technical proficiency, and financial
              acumen acquired over the years.
            </p>
          </div>
        </div>
        <div className="more-info">
          <p className="text">
            Prish Auditors' culture is dynamic, adapting seamlessly to the
            evolving business landscape while remaining steadfast in our
            dedication to attracting and retaining the finest talent We invest
            substantial resources in identifying exceptional individuals,
            nurturing their skills, and cultivating an environment that propels
            their growth as leaders. Our commitment to excellence is evident at
            every stage of engagement, ensuring our clients receive unparalleled
            professional attention. We go beyond the ordinary, continually
            seeking innovative ways to serve our clients. Anticipating future
            needs and addressing them promptly, we play a pivotal role in
            fostering sustained business growth and organizational development.
          </p>
        </div>
      </section>

      <section className="sec3">
        <div className="container-about">
          <div className="-sec3-heading">
            <h1>why prish auditors.</h1>
          </div>
          <div className="sec3-para">
            <p className="text-sec3">
              At Prish Auditors, our team of audit specialists brings a wealth
              of knowledge and extensive experience to the auditing process. We
              are dedicated to upholding a standard of excellence, placing high
              audit quality at the core of our services. This commitment ensures
              that you can trust in the meticulous delivery of the audit
              process, adhering to stringent standards, agreed-upon timelines,
              and surpassing your expectations, providing you with the peace of
              mind you deserve.
            </p>
          </div>
        </div>
        <div className="key-points">
          <div className="key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} />
            </span>
            <p className="text">
              Service you never forget - Office in UAE & INDIA
            </p>
          </div>

          <div className="key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} />
            </span>
            <p className="text">Personalized attention & timely assistance</p>
          </div>

          <div className="key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} />
            </span>
            <p className="text">Highest quality of Professional Service</p>
          </div>

          <div className="key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} />
            </span>
            <p className="text">Innovative solutions to meet business needs</p>
          </div>

          <div className="key-points-info">
            <span className="icon-span">
              <IoCheckmark size={30} />
            </span>
            <p className="text">More than 250 happy clients over the period</p>
          </div>
        </div>
      </section>

      <section className="sec4">
        <div className="mission-sec">
          <div className="statement">
            <h1>vision & mission statement</h1>
            <p>
              Prish Auditors, has committed it's experirence ans skill to
              provide high quality professional surveces to the clients with the
              promise of keeping up highest standard of ethics and integrity
            </p>
          </div>
          <div className="sec4-info">
            <div className="icon">
              <FiSend size={40} color="#0a446c" />
            </div>
            <div className="sec4-content">
              <h1>Vision & Mission</h1>
              <p>
                Our vision is to be the most highly respected professional firm
                where we seek to build strong andlasting relationships with our
                clients by providing them with quality services that are
                personalized,reliable, and value-driven.
                <br />
                We will at all times be mindful of our professional independence
                and our duty of confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

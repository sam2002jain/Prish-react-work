import React from "react";
import "../Reach/reach.css";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";

const Reach = () => {
  return (
    <>
     <div className="info">
          <h1 className="typo">Reach Us</h1>
          </div>
      <div className="contact-form">
        <h1 className="contact-form-heading">
          Give us a call or drop a message
        </h1>

        <div className="contact-container">
          <div className="contact-form-info">
            <div className="contact-box">
              <div className="contact-box-icons">
                <IoLocationSharp size={60} />
              </div>
              <div className="more-info">
                <p>2 Office (Abu dubai & Delhi)</p>
              </div>
            </div>

            <div className="contact-box">
              <div className="contact-box-icons">
                <IoCall size={55} />
              </div>
              <div className="more-info">
                <p>Call Us at (+971 567244122)</p>
              </div>
            </div>

            <div className="contact-box">
              <div className="contact-box-icons">
                <IoMail size={55} />
              </div>
              <div className="more-info">
                <p>prishauditors@outlook.com</p>
              </div>
            </div>
          </div>

          {/*contact us form*/}

          <div className="reach-us-form">
            <form className="form" method="post" action="#">
              <div className="form-input">
                <input
                  className="contact-form-name  input-field"
                  type="text"
                  id="form-name"
                  placeholder="Enter your name"
                  required={true}
                />
                <input
                  className="contact-form-email input-field"
                  type="email"
                  id="form-email"
                  placeholder="Enter your Email"
                  required={true}
                />
                <input
                  className="contact-form-phone input-field"
                  type="number"
                  id="form-phone"
                  placeholder="Enter your phone number"
                  required={true}
                />
              </div>
              <div className="input-message">
                <textarea
                  className="contact-form-message"
                  rows={8}
                  cols={20}
                  placeholder="Leave A Message.........."
                ></textarea>
              </div>
              <div className="contact-form-btn">
                <button type="submit" className="submit-button">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reach;

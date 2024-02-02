import React from "react";
import "../Home/Home.css";
import TeamData from "./TeamData";
import { TeamList } from "../Components/Data";
import Img3 from "../Images/img3.jpg";
import { useNavigate } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="sec-1">
        <div className="content">
          <div className="para">
            <h1 className="heading">Who are we</h1>
            <h3 className="intro">
              A small accounting and bookkeeping firm provinding full survive to
              small business
            </h3>
            <p>
              Our team will provide you with the confidence that comes from our
              complete suit business survoices and other business surveces you
              need most. if plkay roll is weighting you down. lets talk about
              proprietary and bookkeeping software that can help steamline
              playroll and take the worry off your shoulder. Quickbook question?
              our experts can help you get the most out of your software and
              resolve those naggiong issue.
            </p>
            <button onClick={() => navigate("/about")} className="btn-2">
              Read more
            </button>
          </div>
          <div className="image">
            <img src={Img3} alt="img" />
          </div>
        </div>
      </section>

      <section className="sec-2">
        <h1 className="main-heading">Core Values</h1>
        <div className=" value-list">
          <div className="item">
            <span>
              <MdCheckCircle size={60} />
            </span>
            <h1 className="heading-2">Client first</h1>
            <p>
              We put our clients intrests and treat them the way we'd like be
              treated.
            </p>
          </div>

          <div className="item">
            <span>
              <MdCheckCircle size={60} />
            </span>
            <h1 className="heading-2">Always getting better</h1>
            <p>
              We look fo the knowladge, skill and tools to become more efficient
              and improve our survices.
            </p>
          </div>

          <div className="item">
            <span>
              <MdCheckCircle size={60} />
            </span>
            <h1 className="heading-2">Look out for the team</h1>
            <p>
              we spend great work product to one another and lift each other up.
            </p>
          </div>

          <div className="item">
            <span>
              <MdCheckCircle size={60} />
            </span>
            <h1 className="heading-2">Adaptable</h1>
            <p>
              We know accounting evolves and small business can be messy but we
              make it heppend.
            </p>
          </div>

          <div className="item">
            <span>
              <MdCheckCircle size={60} />
            </span>
            <h1 className="heading-2">Keep it simple</h1>
            <p>
              We give clients clear and practicle advice, not accounting lessons
              or muddy answers.
            </p>
          </div>

          <div className="item">
            <span>
              <MdCheckCircle size={60} />
            </span>
            <h1 className="heading-2">Consistent process</h1>
            <p>
              We're disciplines with a timely, consistent accounting process to
              protect pur clients
            </p>
          </div>
        </div>
      </section>

      <section className="sec-3">
        <div className="card-sec">
          <h1>Our Team Members</h1>
          <div className="cards">
            {TeamList.map((TeamList) => (
              <TeamData
                key={TeamList.id}
                image={TeamList.image}
                name={TeamList.name}
                para={TeamList.para}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sec-4">
        <h2 className="tital-heading">Here we do business</h2>
        <div className="info-box">
          <div className="box">
            <div className="box-icons">
              <BsFillBuildingsFill size={70} />
            </div>
            <div className="box-content">
              <p>2 Office (Abu dubai & Delhi)</p>
            </div>
          </div>

          <div className="box">
            <div className="box-icons">
              <IoLocationSharp size={70} />
            </div>
            <div className="box-content">
              <p>Servicing in Middle East </p>
            </div>
          </div>

          <div className="box">
            <div className="box-icons">
              <IoCall size={70} />
            </div>
            <div className="box-content">
              <p>Call Us at (+971 56 724 4122)</p>
            </div>
          </div>

          <div className="box">
            <div className="box-icons">
              <IoMail size={70} />
            </div>
            <div className="box-content">
              <p>prishaudit@godaddy.com</p>
            </div>
          </div>

          <div className="box">
            <div className="box-icons">
              <FaPeopleGroup size={70} />
            </div>
            <div className="box-content">
              <p>1,000+ Clients Globally</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

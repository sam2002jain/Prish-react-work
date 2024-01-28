import icon1 from "../Images/icon1.png";
import icon2 from "../Images/icon2.png";
import icon3 from "../Images/icon4.png";
import "./Home.css";

function TeamData(props) {
  return (
    <>
      <div key={props.id} className="card">
        <div className="card-img">
          <img src={props.image} width={400} />
        </div>
        <div className="card-info">
          <h2 className="card-heading"> {props.name}</h2>
          <p className="card-para">{props.para}</p>
        </div>
        <div className="card-icons">
          <a>
            <img src={icon1} width={45} />
          </a>
          <a>
            <img src={icon2} width={45} />
          </a>
          <a>
            <img src={icon3} width={45} />
          </a>
        </div>
      </div>
    </>
  );
}

export default TeamData;

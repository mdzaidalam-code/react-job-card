import React from "react";
import { Bookmark } from "lucide-react";
function Cards(prop) {
  return (
    <div className="cardWrapper">
      <div className="Card">
        <div className="top">
          <img className="img" src={prop.logo} alt="" />
          <button className="savebtn">
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="centre">
          <h3>
            {prop.name}
            <span> {prop.days}</span>
          </h3>
          <h3>Senior UI/UX Designer</h3>
          <div className="tag">
            <h5>Part time</h5>
            <h5>Senior level</h5>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div>
            <h3>{prop.earning}</h3>

            <p>{prop.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

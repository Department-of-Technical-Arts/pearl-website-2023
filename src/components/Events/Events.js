import { React, useEffect } from "react";
import "./Events.css";

const Events = () => {
  useEffect(() => {
    document.title = "Events - ATMOS";
  }, []);

  return (
    <div>
      <div className="background-container-events">
        <div className="background-events">
          <div className="image-events"></div>
          <div className="content-events">
            <h1>EVENTS</h1>
          </div>
          <div className="card-container">
            <a href="/competitions">
              <div className="hover-cards-one">
                <p>Competitions</p>
              </div>
            </a>
            <a href="/workshops">
              <div className="hover-cards-two">
                <p>workshops</p>
              </div>
            </a>
            {/* <a href="/talks">
              {" "}
              <div className="hover-cards-three">
                <p>talks</p>
              </div>
            </a>
            <a href="/proshows">
              <div className="hover-cards-four">
                {" "}
                <p>pro-shows</p>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

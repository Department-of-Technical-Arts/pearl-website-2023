import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import Standout from "../Standout/Standout";
import { useScroll } from "framer-motion";

const Landing = () => {
  // const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var count = 1;
  const elementRef = useRef(null);
  const [leaving, setLeaving] = useState(true);
  const [scrolling, setScrolling] = useState(true);
  const { scrollYProgress } = useScroll();
  let isMobile = window.matchMedia("(max-width: 480px)");
  let isTouch = window.matchMedia("(max-width: 1024px)");

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMins] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      var deadline = new Date("Nov 25, 2022 0:00:00").getTime();
      var now = new Date().getTime();
      var distance = deadline - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      console.log(seconds);
    }, 1000);
  }, []);

  // const passesClicked = () => {
  //   navigate("/passes");
  // };

  return (
    <div>
      <div className="landing-container" ref={elementRef}>
        <div className="bg"></div>
        {/* <h4 className="dates">25-27 November</h4> */}
        {/* {scrolling && (
              <p className="scroll-text">
                {isTouch.matches ? "SWIPE UP" : "SCROLL DOWN"}
              </p>
            )} */}
        {/*<h4 className="countdown">{`${days}d : ${hours}h : ${minutes}m`}</h4>*/}
        {/* <Standout /> */}
        <div className="landing-desc-container">
          <p className="landing-desc">
            Pearl is the annual national cultural fest of BITS Pilani, Hyderabad
            Campus. Incepted in 2009 as an intra-college festival, a year after
            the foundation of BITS Pilani, Hyderabad, the fest grew into a
            national level college cultural fest with participation from more
            than 50 colleges across India. This year's travel theme is just one
            more reason to look forward to the annual cultural fest that we know
            and adore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
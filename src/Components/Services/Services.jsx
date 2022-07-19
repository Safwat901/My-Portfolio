import React from "react";
import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Cards/Card";
import resume from "./resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* leftside */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          I am a Full Stack Web Developer and Business Analyst with <br />
          experience in coding, designing, developing, problem solving <br />
          and software marketing. I'm proficient in JavaScript, <br /> React Js,
          Node Js, HTML, CSS, Bootstrap, Python,Django.
        </span>
        <a href={resume} style={{ textDecoration: "none" }} download>
          <div className="button s-button">Download CV</div>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* rightside */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={"Front-End"}
            detail={"HTML, CSS, BOOTSTRAP, REACT JS"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Back-End"}
            detail={"NODE JS, EXPRESS JS"}
          />
        </motion.div>

        <div style={{ top: "19rem", left: "12rem" }}>
          <Card emoji={humble} heading={"Database"} detail={"MONGO DB"} />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="work">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Projects and Clients</span>
        <span>Project Type: Website, Web application</span>
        <br />
        <span>Clients: Property on Map, Nahiyan's, ISP Mart</span>
        <br />

        <div className="button s-button">Download CV</div>

        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-maincircle"
        >
          <div className="w-seCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-seCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-seCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-seCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-seCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>

        <div className="w-backcircle bluecircle"></div>
        <div className="w-backcircle yellowcircle"></div>
      </div>
    </div>
  );
};

export default Work;

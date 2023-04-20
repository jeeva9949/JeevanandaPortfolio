import React from "react";
import "./ABOUTBANNER.css";
import { Typewriter } from "react-simple-typewriter";
import JeevaResume from "./Jeeva Resume.pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ABOUTBANNER() {
  const notifiy_aboutpage = () => {
    toast(" Downloaded sucessfully", {
      position: "top-right",
      theme: "dark",
    });
  };
  return (
    <>
      <div className="entery-container">
        <div class="row">
          <div className="col-lg-6  col-sm-12 pt-3 first-col">
            <div className="insidefirstcol">
              <h1 className="name mynameis" style={{ color: "#f1f5f8" }}>
                My name is
              </h1>
              <h2 className="name">
                <span
                  style={{ color: "#52d1da", fontWeight: "bold" }}
                  className="name-in-about"
                >
                  <Typewriter
                    words={["Jeevananda Goddumarri"]}
                    loop={100000}
                    typeSpeed={70}
                    deleteSpeed={50}
                    cursor
                    className="nameType"
                  />
                </span>
              </h2>
              <p className="about-few-information">
                Hi There, I am Jeevananda, a skilled frontend developer with
                experience in React JS and Python. Currently, I am expanding my
                knowledge in backend development to become a full-stack
                developer. I have developed several projects and am eager to
                broaden my skillset by becoming proficient in both frontend and
                backend development.
              </p>
              <a
                href={JeevaResume}
                download="Jeeva Resume"
                className="DOWNLOAD-BTN"
                onClick={notifiy_aboutpage}
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* first-container */}
          <div className="col-lg-6  col-sm-12 Second-col">
            <div className="">
              <img
                src="/projectsImages/newcrop.png"
                // src="/images/bannerimgjeeva.png"
                alt="img"
                className="CropImage"
              />
            </div>
          </div>
          {/* seconds container */}
        </div>
        {/* row ends */}

        {/* conatiner ends  */}
      </div>
      {/* container-fluid end */}
      <ToastContainer/>
    </>
  );
}

export default ABOUTBANNER;

import React from "react";
import "./banner.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Typewriter, Cursor } from "react-simple-typewriter";
import Socialmedia from "./socialmedia";
import { Link } from "react-router-dom";

const BannerSection = () => {
  const about_page = () => {
    toast("Welcometo About Section", {
      position: "top-right",
      theme: "dark",
    });
  }
  
  return (
    <>
      <div className="conatiner-fluid background-col">
        <div className="container main-container">
          <div className="row ">
            <div className="col-lg-8  col-sm-12 pt-5  text-center content">
              <h2 className="text-white display-4 name">
                Hi,I'm <span style={{ color: "#13b9c8" }}>Jeevananda G</span>
              </h2>
              <p className="text-white  display-7">
                <span className="text-white" style={{ fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Engineer Graduate",
                      "Front-end Developer",
                      "Web Developer",
                    ]}
                    loop={100000}
                    typeSpeed={70}
                    deleteSpeed={50}
                  />
                </span>
                <span style={{ color: "#37bcc8" }}>
                  <Cursor />
                </span>
              </p>
              <p className="text-white description">
                As a fresh developer with strong development skills & coding
                skills, I am highly motivated to apply my knowledge and create
                innovative solutions. With a passion for continuous learning and
                a willingness to collaborate, I am eager to contribute to
                dynamic teams and make a positive impact in the field of
                development.
              </p>
              <Socialmedia />
              <Link
                to="/about"
                className="btn btn-outline-dark readmore"
                onClick={about_page}
              >
                More About Jeeva
              </Link>

              <div style={{ backgroundcolor: "white" }}></div>
            </div>
            <div className="col-lg-4  col-sm-12 banner-img">
              <img
                // src="\images\bannerimgjeeva.png"
                src="/projectsImages/newcrop.png"
                alt=""
                className="img-fluid "
              />
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default BannerSection;

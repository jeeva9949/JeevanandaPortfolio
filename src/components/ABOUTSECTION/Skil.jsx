import React from "react";
import "./Skills.css";

function Skil() {
  return (
    <div className="">
      <div className="technicalskills">
        <h1 className="Technical-skills">Technical Skills</h1>
        <div className="row">
          <div className="col-lg-6  col-sm-12 ">
            <div className="skills-container-1">
              <h4 className="skils-title">Web Development Skills</h4>
              <div className="skills-center">
                <p className="skils-name">HTML</p>
                <p className="skils-name">CSS</p>
                <p className="skils-name">Bootstrap</p>
                <p className="skils-name">JavaScript</p>
                <p className="skils-name"> ReactJs</p>
                <p className="skils-name">Redux</p>
                <p className="skils-name">SQL</p>
                <p className="skils-name">GitHubs</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-sm-12 ">
            <div className="skills-container-1 programming-skills-block">
              <h4 className="skils-title">Programming Skills</h4>
              <div className="skills-center1">
                <p className="skils-name">Python</p>
                <p className="skils-name">JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skil;

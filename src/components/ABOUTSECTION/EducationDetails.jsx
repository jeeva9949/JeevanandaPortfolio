import React from "react";
import "./Education.css";

function EducationDetails() {
  return (
    <>
      <div className="main-Eduaction-cards">
        <h1 className="eduaction-heading">Education</h1>
        <div className="row">
          <div className="col-sm-12 col-lg-4 col-md-6 first-btect-card">
            <div className="card  card-main">
              <img src="/images/mitslogo.png" alt="img" className="card-img" />

              <div className="card-body custom-body">
                <h5 className="card-title ">
                  Madanapalle Institute of Technology & Science
                </h5>
                <h5
                  className="year-education"
                  style={{ letterSpacing: "0.1rem" }}
                >
                  2020-2024
                </h5>
                <p className="cgpa" style={{ letterSpacing: "0.1rem" }}>
                  CGPA:8.7
                </p>
                <h4 style={{ letterSpacing: "0.1rem" }}>B Tech (Ece)</h4>
                <h6 style={{ letterSpacing: "0.1rem" }}>
                  Madanapalle , Ananmaya dist , Ap{" "}
                </h6>
              </div>
            </div>
          </div>
          {/* btect-education */}
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="card  card-main">
              <img src="/images/nrilogo.png" alt="img" className="card-img" />

              <div className="card-body custom-body">
                <h4 className="card-title "style={{fontSize:"1.5rem"}}>
                  NRI academy junior college tirupati
                </h4>
                <h5
                  className="year-education"
                  style={{ letterSpacing: "0.1rem" }}
                >
                  2018-2020
                </h5>
                <p className="cgpa" style={{ letterSpacing: "0.1rem" }}>
                  CGPA:9.7
                </p>
                <h4 style={{ letterSpacing: "0.1rem" }}>Intermediate (mpc)</h4>
                <h6 style={{ letterSpacing: "0.1rem" }}>
                  Tirupati , Chittoor dist , Ap{" "}
                </h6>
              </div>
            </div>
          </div>

          {/* intermediate eduaction */}
          <div className="col-sm-12 col-lg-4 col-md-6">
            <div className="card  card-main">
              <img
                src="/images/bhashyamlogo.png"
                alt="img"
                className="card-img"
              />

              <div className="card-body custom-body">
                <h5 className="card-title ">Bhashyam Public English medium High school</h5>
                <h5
                  className="year-education"
                  style={{ letterSpacing: "0.1rem" }}
                >
                  2017-2018
                </h5>
                <p className="cgpa" style={{ letterSpacing: "0.1rem" }}>
                  CGPA:9.8
                </p>
                <h4 style={{ letterSpacing: "0.1rem" }}>SSC</h4>
                <h6 style={{ letterSpacing: "0.1rem" }}>
                  Dharmavaram , Anantapur dist , Ap{" "}
                </h6>
              </div>
            </div>
          </div>
          {/* scc education */}
        </div>
      </div>
    </>
  );
}

export default EducationDetails;

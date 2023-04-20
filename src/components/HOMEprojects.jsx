import React from "react";
import "./projectinfo.css";
import { Link } from "react-router-dom";

const live = (
  <svg
    stroke="currentColor"
    fill="none"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const HomeProjects = () => {
  return (
    <>
      <div className="container-fluid main-projectinfo">
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/jeevaportfolio.png"
                  className="card-img-top"
                  alt="jeeva"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Jeeva Portfolio</h4>
                  <div className="technolgys">
                    <p>React js </p>
                    <p>Bootstrap</p>
                    <p>Auth 0</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="/">Live {live}</a>
                    </p>
                    <p className="btn ">
                      <a href="/">Github {live}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/linkidin.png"
                  className="card-img-top"
                  alt="jeeva"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Linkedin</h4>
                  <div className="technolgys">
                    <p>React js </p>
                    <p>styled components</p>
                    <p>Firebase</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="/">Live {live}</a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/linkdin.git">
                        Github {live}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/chatapplication.png"
                  className="card-img-top"
                  alt="jeeva"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Chat Application</h4>
                  <div className="technolgys">
                    <p>React js </p>
                    <p>Css</p>
                    <p>Chat Engine</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://chatappjeeva.netlify.app">Live {live}</a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/ChatApp.git">
                        Github {live}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  alt="jeeva"
                  src="/projectsImages/ntflix.png"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Netflix</h4>
                  <div className="technolgys">
                    <p>React js </p>
                    <p>css</p>
                    <p>Local storage</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeflix.netlify.app">Live {live}</a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/Netflix_clone.git">
                        Github {live}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  alt="jeeva"
                  src="/projectsImages/formvalidation.png"
                  className="card-img-top"
                  //   style={{height:"200px"}}
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Form validation</h4>
                  <div className="technolgys">
                    <p>Javascript </p>
                    <p>Css</p>
                    <p>Html</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a
                        href="https://jeeva9949.github.io/Form_validation_js/
"
                      >
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/Form_validation_js.git">
                        Github {live}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row ends */}
          <h2>
            <Link
              to="/project"
              style={{ color: "#f1f5f8", textDecoration: "none" }}
            >
              All Projects
            </Link>
          </h2>
        </div>
        {/* container end s */}
      </div>
      {/* conatiner fluid is ends  */}
    </>
  );
};
export default HomeProjects;

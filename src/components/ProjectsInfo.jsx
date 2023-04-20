import React from "react";
import "./projectinfo.css";

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

const ProjectsInfo = () => {
  return (
    <>
      <div className="container-fluid main-projectinfo">
        <div className="container  ">
         
          <div className="row">
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/jeevaportfolio.png"
                  alt="img"
                  className="card-img-top"
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
                      <a href="#">Live {live}</a>
                    </p>
                    <p className="btn ">
                      <a href="#">Github {live}</a>
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
                      <a href="#">Live {live}</a>
                    </p>
                    <button className="btn ">
                      <a href="https://github.com/jeeva9949/linkdin.git">
                        Github {live}
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/chatapplication.png"
                  alt="img"
                  className="card-img-top"
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
                  src="/projectsImages/ntflix.png"
                  className="card-img-top"
                  alt="img"
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
                  src="/projectsImages/develop.png"
                  className="card-img-top"
                  alt="img"
                  //   style={{height:"200px"}}
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Devlop Course</h4>
                  <div className="technolgys">
                    <p>Javascript </p>
                    <p>Css</p>
                    <p>Html</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://developacedemey.netlify.app">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/Develop-course.git">
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
                  src="/projectsImages/balajiportfolio.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Balaji Portfolio</h4>
                  <div className="technolgys">
                    <p> Javascript </p>
                    <p>Bootstrap</p>
                    <p>HTML</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeeva9949.github.io/Balaji_portfolio/">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/Balaji_portfolio.git">
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
                  src="/projectsImages/mits-website.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">College website</h4>
                  <div className="technolgys">
                    <p>HTML </p>
                    <p>css</p>
                    <p>Animations</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeeva9949.github.io/mitswebsite/">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/mitswebsite.git">
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
                  src="/projectsImages/formvalidation.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Form Validation</h4>
                  <div className="technolgys">
                    <p>HTML </p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeeva9949.github.io/Form_validation_js/">
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
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/todolist.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Simple HTML page</h4>
                  <div className="technolgys">
                    <p>React js</p>
                    <p>CSS</p>
                    <p>Hooks</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeeva9949.github.io/Todolist_reactjs/">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/Todolist_reactjs.git">
                        Github {live}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row ends */}
          <div className="row">
            <div className="col-lg-4 col-sm-12 mt-4">
              <div className="card ">
                <img
                  src="/projectsImages/balagicv.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Simple HTML page</h4>
                  <div className="technolgys">
                    <p>HTML </p>
                    <p>CSS</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href=" https://jeeva9949.github.io/balajicv_2/">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/balajicv_2.git">
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
                  src="/projectsImages/desert.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Simple HTML page</h4>
                  <div className="technolgys">
                    <p>HTML </p>
                    <p>CSS</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeeva9949.github.io/desertpage/">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/desertpage.git">
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
                  src="/projectsImages/vidoeanimation.png"
                  alt="img"
                  className="card-img-top"
                />
                <div className="card-body custom-body">
                  <h4 className="card-title ">Video Animation</h4>
                  <div className="technolgys">
                    <p>HTML </p>
                    <p>CSS</p>
                    <p>Mediaquerys</p>
                  </div>
                  <div className="live ">
                    <p className="btn">
                      <a href="https://jeeva9949.github.io/vidoe_animation/">
                        Live {live}
                      </a>
                    </p>
                    <p className="btn ">
                      <a href="https://github.com/jeeva9949/vidoe_animation.git">
                        Github {live}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container end s */}
      </div>
    </>
  );
};
export default ProjectsInfo;

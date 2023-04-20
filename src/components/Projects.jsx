import React from "react";
import ProjectsInfo from "./ProjectsInfo";
import Footer from "./Footer";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import "./Projects.css";

export const Projects = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div
        className="container-fluid main-container-project-section"
        style={{ backgroundColor: "#00171a" }}
      >
        <h1 className="project-section-title">Projects</h1>
        <div className="continer">
          {isAuthenticated ? (
            <>
              {" "}
              <ProjectsInfo />
            </>
          ) : (
            <>
              <div
                className="login-projects"
                style={{ backgroundColor: "#00171a" }}
              >
                <Login />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Projects;

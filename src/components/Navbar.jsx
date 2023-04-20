import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div className="con">
      <div className="container-fluid p-0 m-0  Navbar_container ">
        <div className="navbar navbar-dark navbar-expand-lg logo-conatiner">
          <Link to="/">
            <img
              className="logopic"
              src="\images\JeevaLogo.png"
              alt=""
              styles={{ width: "20px", height: "30px" }}
            />
          </Link>
          <Link
            className="navbar-brand ps-3 jeevaname"
            style={{ color: "#37bcc8" }}
            to="/"
          >
            Jeeva
          </Link>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link  home descriptions" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link   descriptions items"
                  id="#menu"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/project"
                  className="nav-link   descriptions items"
                  id="#menu"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactus"
                  className="nav-link   descriptions items"
                >
                  Contact me
                </NavLink>
              </li>
              {isAuthenticated ? (
                <li className="nav-item">
                  <NavLink
                    to="/userdetails"
                    className="nav-link   descriptions items log"
                  >
                    {user.name}
                  </NavLink>
                </li>
              ) : (
                <li></li>
              )}
              {isAuthenticated ? (
                <li className="nav-item">
                  <NavLink
                    // to="/logout"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className="nav-link  descriptions "
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    // to="/login"
                    className="nav-link  descriptions log"
                    onClick={() => loginWithRedirect()}
                  >
                    Login{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path>
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* hi and pics container starts from here */}
    </div>
  );
};
export default Navbar;

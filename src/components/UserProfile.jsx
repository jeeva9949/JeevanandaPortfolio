import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./userprofiledetails.css";
import Footer from "./Footer";

const Userdetails = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in.</div>;
  }

  const userName = user && user.name ? user.name : "Anonymous";
  const userEmail = user && user.email ? user.email : "";
  return (
    <>
      <div className="container-fluid main-conatiner">
        <div className="conatiner">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="user-log-name">
                <p className="user-logo">{userName[0].toUpperCase()}</p>
                <div className="user-name">
                  <h2>{userName}</h2>
                </div>
              </div>
            </div>
            {/* first cloumn */}
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div className="main-details-container">
                <div className="details-display">
                  <h2 className="details-name"> {userName}</h2>
                  <h4 className="user-details-name">
                    <span className="userdetails-name-heading">Name </span> : {" "}
                    <span className="userdetails-name"> {user.name}</span>
                  </h4>
                  <h4>
                    <span className="userdetails-email-heading">Email</span> : {" "}
                    <span className="userdetails-email"> {userEmail}</span>
                  </h4>
                  <h4>
                    <span className="verified-account">
                      Verified with email
                    </span>{" "}
                    : <span className="verified-true"> Yes</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* main due end */}
          </div>
          {/* row ends */}
        </div>
        <button
          onClick={() =>
            logout({
              logoutParams: { returnTo: window.location.origin },
            })
          }
          style={{ marginBottom: "1rem" }}
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Userdetails;

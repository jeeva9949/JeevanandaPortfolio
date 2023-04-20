import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import "./email.css";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_su75tyg",
        "template_hfagtme",
        form.current,
        "9o2OVe6lxY9mSfFY2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const notification = () => {
    toast("sucessfully send", {
      position: "top-right",
      theme: "dark",
    });
  };

  return (
    <div className=" mb-4 email-contaioner">
      <h2 className="mb-3 context-text-heading">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3 email-section-container">
          <label className="form-label">Name </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3 email-section-container">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Mail id"
            required
          />
        </div>
        <div className="mb-3 email-section-container">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <button className="btn btn5" type="submit" onClick={notification}>
          Send
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Email;

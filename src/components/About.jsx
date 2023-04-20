import React from 'react'
import ABOUTBANNER from './ABOUTSECTION/ABOUTBANNER';
import EducationDetails from './ABOUTSECTION/EducationDetails';
import Skil from './ABOUTSECTION/Skil';
import Footer from './Footer';
import "./About.css"

import ContactInfo from "./Contact/contactInfo";


export const About = () => {
  return (
    <>
      <div className="container-fluid entery-container">
        <div className="container">
          <ABOUTBANNER />

          <div className="skils-section">
            <Skil />
          </div>
          <div className="">
            <EducationDetails />
          </div>
          <div className="contact-section">
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About
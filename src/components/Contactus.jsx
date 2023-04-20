import React from 'react'
import Footer from "./Footer";
import Email from './Contact/Email';
import ContactInfo from './Contact/contactInfo';
import "./CONTACT.CSS"

export const Contactus = () => {
  return (
    <>
      <div className="container-fluid main-container-contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 ">

              <ContactInfo />
            </div>
            <div className="col-sm-12 col-lg-6   ">
              <Email />
            </div>
          </div>
        </div>
       
          <Footer/>
    
      </div>
    </>
  );
}
export default Contactus
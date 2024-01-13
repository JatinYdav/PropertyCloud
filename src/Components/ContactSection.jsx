import React from "react";
import "../Styles/ContactSection.css";
const ContactSection = () => {
  return (
    <div className="contactsection">
      <div className="contactimgcontainer">
        <div className="contactcard">
          <div className="inf12">
            <div className="contactcardinfo1">
              <h2>PROPERTY CLOUD BY</h2>
              <h1>DHIRAJ KUMAR</h1>
            </div>
            <div className="contactcardinfo2">
              <h1>+91 978 540 0065</h1>
            </div>
          </div>
          <div className="contactcardinfo3">
            <h3>Made By @ydav_Jatin</h3>
          </div>
        </div>
      </div>
      <div className="contactheading">
        <div className="headingsubcontainer">
          <h1 className="heading1">Contact</h1>
          <h1 className="heading2">Us</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

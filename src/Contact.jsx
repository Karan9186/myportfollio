import React from "react";
import "./contact.css";
export default function Contact() {
  return (
    <div className="container">
      <div>
        <div className="container main_about_container">
          <h2 data-aos="fade-left">Contact Me</h2>
        </div>

        <div className="container main_about_container">
          <input type="text" placeholder="Enter Your Name" data-aos="fade-left"/>
          <input type="email" placeholder="Enter Your Email" data-aos="fade-left"/>
          <textarea name="" id="" placeholder="Message" data-aos="fade-left"></textarea>
          <button data-aos="fade-left">submit</button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

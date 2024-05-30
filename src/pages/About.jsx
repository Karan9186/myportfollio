import React from "react";
import Nav from "../Nav";
import "./about.css"
import Footer from "../Footer"
function About() {
  return (
    <div>
      <Nav />

      <div className="container mt-5">
        <div className="pt-4">
          <h1 data-aos="fade-left">About Me</h1>
        </div>

        <div className="container d-flex align-items-center gap-5 main_about_cont" data-aos="fade-left">
          <h5 className="ps-4" data-aos="fade-left">
            I am a dedicated MERN stack developer with expertise in MongoDB,
            Express.js, React, and Node.js. I create dynamic, responsive web
            applications with a focus on user-friendly interfaces, robust APIs,
            and scalable databases. My journey began with a passion for web
            technologies, leading to extensive experience in full-stack
            development. I prioritize clean, maintainable code and continuous
            learning. Let's connect if you're looking to build or enhance a web
            application or simply want to discuss tech. Thank you for visiting
            my site!
          </h5>

          <img src="src/assets/myprofile.png" alt="" data-aos="fade-left"/>
        </div>
      </div>
<br /><br /><br />
      <Footer />
    </div>
  );
}

export default About;

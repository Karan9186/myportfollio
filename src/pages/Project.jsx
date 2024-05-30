import React from "react";
import Nav from "../Nav.jsx";
import { GoPlus } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import "./project.css";
import { projectData } from "./Project_datas.jsx";

export default function Project() {
  let allData = projectData.map((v, i) => {
    return (
      <div className="p-3 main_back_con">
        <img src="src/assets/project.jpg" alt="" data-aos="fade-left"/>
        <br />
        <br />
        <h3 data-aos="fade-left">{v.name}</h3>
        <p data-aos="fade-left">{v.description}</p>
        <button className="project_view_btn" data-aos="fade-left">View</button>
      </div>
    );
  });
  return (
    <div>
      <Nav />
      <div className="">
        <div className=" container pt-3 background_color">
          <div>
            <h2 data-aos="fade-left">My Offrerings For You</h2>
          </div>
          <div>
            <div className="container pt-3 ul_and_li">
              <ul>
                <li className="d-flex gap-4 align-items-baseline remove_flex_pro p-4 ">
                  <h4 data-aos="fade-left">
                    <BsDot />
                    Front End Developer
                  </h4>
                  <div className="responsive_cont container gap-4 d-flex justify-content- space-between">
                    <p data-aos="fade-left">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sunt, minus voluptatibus reprehenderit
                      nobis sapiente quasi officia excepturi error inventore
                      adipisci asperiores in sint pariatur quae aspernatur
                      voluptates labore! Amet, non!
                    </p>
                    <span data-aos="fade-left">
                      <GoPlus fontSize="50px" />
                    </span>
                  </div>
                </li>
                <hr />
                <li className="d-flex gap-4 align-items-baseline remove_flex_pro p-4 ">
                  <h4 data-aos="fade-left">
                    <BsDot />
                    Back End Developer
                  </h4>
                  <div className="responsive_cont container gap-4 d-flex justify-content- space-between">
                    <p data-aos="fade-left">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sunt, minus voluptatibus reprehenderit
                      nobis sapiente quasi officia excepturi error inventore
                      adipisci asperiores in sint pariatur quae aspernatur
                      voluptates labore! Amet, non!
                    </p>
                    <span data-aos="fade-left">
                      <GoPlus fontSize="50px" />
                    </span>
                  </div>
                </li>
                <hr />
                <li className="d-flex gap-4 align-items-baseline remove_flex_pro p-4 ">
                  <h4 data-aos="fade-left">
                    <BsDot />
                    Full Stack Developer
                  </h4>
                  <div className="responsive_cont container gap-4 d-flex justify-content- space-between">
                    <p data-aos="fade-left">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Sunt, minus voluptatibus reprehenderit
                      nobis sapiente quasi officia excepturi error inventore
                      adipisci asperiores in sint pariatur quae aspernatur
                      voluptates labore! Amet, non!
                    </p>
                    <span data-aos="fade-left">
                      <GoPlus fontSize="50px" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* after the  */}

      <div className="container pt-5">
        <h2>Projects</h2>
        <div className="d-flex remove_flex_pro height_width container gap-3 pt-4">
          {allData}
        </div>
      </div>
      <br />
      <br />
      <br />

      <div>
        <div className="d-flex align-items-center justify-content-center footer">
          <p>Design by Karan @copyright</p>
        </div>
      </div>
    </div>
  );
}

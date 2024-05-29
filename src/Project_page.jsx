import React from "react";
import "./project.css";
import { FaCodeBranch, FaLongArrowAltRight } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { MdFastfood, MdOutlineTravelExplore } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
function Project_page() {
  return (
    <div className="main_div_for_content">
      <div className="container p-1">
        <div className="p-3 mt-4">
          <div
            data-aos="fade-left"
            className="d-flex align-items-center gap-2 troubleshoot"
          >
            <FaCodeBranch />
            <h6 className="m-1">Troubleshoot & Debug</h6>
          </div>
          <h2 data-aos="fade-left" className="pt-3">
            Project Showcase
          </h2>
          <p data-aos="fade-left" className="pt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            dolor.
          </p>
          <div className="white_btn01">
            <button data-aos="fade-left" className="mt-3 white_btn">
              Explore my projects <FaLongArrowAltRight fontSize="20px" />{" "}
            </button>
          </div>
        </div>

        <div className="main_project_contenet">
          <div className="project_con" data-aos="fade-left">
            <FaCartShopping
              data-aos="fade-left"
              className="border_for_project"
              fontSize="25px"
            />
            <h2 data-aos="fade-left" className="pt-2">
              E-Commerce
            </h2>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              omnis similique placeat beatae et odio, consequatur ipsum in
              voluptatem eum!
            </p>
          </div>
          <div className="project_con" data-aos="fade-left">
            <MdOutlineTravelExplore
              data-aos="fade-left"
              className="border_for_project"
              fontSize="25px"
            />
            <h2 data-aos="fade-left" className="pt-2">
              Tour and Travel
            </h2>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              omnis similique placeat beatae et odio, consequatur ipsum in
              voluptatem eum!
            </p>
          </div>
          <div className="project_con" data-aos="fade-left">
            <IoIosSchool
              data-aos="fade-left"
              className="border_for_project"
              fontSize="25px"
            />
            <h2 className="pt-2" data-aos="fade-left">
              University Website
            </h2>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              omnis similique placeat beatae et odio, consequatur ipsum in
              voluptatem eum!
            </p>
          </div>
          <div className="project_con" data-aos="fade-left">
            <MdFastfood
              data-aos="fade-left"
              className="border_for_project"
              fontSize="25px"
            />
            <h2 data-aos="fade-left" className="pt-2">
              Food Managment
            </h2>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              omnis similique placeat beatae et odio, consequatur ipsum in
              voluptatem eum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project_page;

import React, { useState } from "react";
import "./nav.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function Nav() {
  useState(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="main_nav_container">
      <div className="back_and_border" data-aos="fade-down">
        <div className="my_profile_img">
          <img src="../src/assets/myprofile.png" alt="" data-aos="fade-down" />
        </div>

        <div className="nav_links" data-aos="fade-down">
          <ul>
            <li>
              <a href="#">
                <Link to={"/Home"}>home</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to={"/projects"}>projects</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to={"/blogs"}>blogs</Link>
              </a>
            </li>
            <li>
              {/* <a href="#">about</a> */}
              <a>
                {" "}
                <Link to={"/about"}>about</Link>
              </a>
            </li>
          </ul>
        </div>

        <div className="gap-2" data-aos="fade-down">
          <button className="github_btn">
            <FaGithubSquare className="git_icons" fontSize="1.5em" />projects
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React from "react";
import "./nav_after.css";

import "bootstrap/dist/css/bootstrap.css";
import {
  FaGithubSquare,
  FaLinkedin,
  FaYoutube,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Nav_after() {
 
  return (
    <div className="container mt-5 mt-5 d-flex justify-content-center align-items-center">
      <div className="pt-1 d-flex justify-content-center align-items-center gap-3 background_container" data-aos="fade-left">
        <div className="container pt-5">
          <h1 data-aos="fade-left">Creative Full Stack Web Devloper</h1>
          <p data-aos="fade-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            placeat excepturi veritatis ut suscipit, deleniti quod nobis
            blanditiis esse voluptatem recusandae aliquid consectetur et atque
            omnis nam temporibus perferendis. Tenetur.
          </p>
          <div className="d-flex gap-4 mt-5">
            <button className="p-1 btn_black" data-aos="fade-left">Hire Me Now </button>

            <div className=" d-flex gap-2">
              <button className="btn_white" data-aos="fade-left">
                <FaGithubSquare className="icon_github" fontSize="1.5em" />
                My GitHub
              </button>
            </div>
          </div>

          <div className="container mt-5">
            <p className="mt-5" data-aos="fade-left">Other Socials:</p>
            <div className="container ">
              <ul className="d-flex social_icons">
                <li data-aos="fade-left">
                  <FaYoutubeSquare />
                </li>
                <li data-aos="fade-left">
                  <FaLinkedin />{" "}
                </li>
                <li data-aos="fade-left">
                  <FaSquareXTwitter />{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container img_cont" data-aos="fade-left">
          <img src="src/assets/back_dev.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

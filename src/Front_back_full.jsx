import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./front_back_full.css";
function Front_back_full() {
  return (
    <div className="main_contenet_for_all">
      <div className="container  ">
        <div className="container d-flex main_div_for_about ">
          <h6 data-aos="fade-left">About Web Development</h6>
          <p data-aos="fade-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, nulla.
          </p>
        </div>

        <div className="d-flex pt-5 gap-5 main_respo">
          <div className="front_back_full_cont" id="hover_con" data-aos="fade-up">
            <img data-aos="fade-left" src="src/assets/front_back.jpg" alt="" />
            <h3 data-aos="fade-left">Front End Development</h3>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nulla tenetur eum consequatur exercitationem quos
              asperiores, adipisci vel odio.
            </p>
          </div>
          <div className="front_back_full_cont" id="hover_con" data-aos="fade-up">
            <img data-aos="fade-left" src="src/assets/back_end.jpg" alt="" />
            <h3 data-aos="fade-left">Back End Development</h3>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nulla tenetur eum consequatur exercitationem quos
              asperiores, adipisci vel odio.
            </p>
          </div>
          <div className="front_back_full_cont" id="hover_con" data-aos="fade-up">
            <img data-aos="fade-left" src="src/assets/full_stack.jpg" alt="" />
            <h3 data-aos="fade-left">Full-Stack Development</h3>
            <p data-aos="fade-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nulla tenetur eum consequatur exercitationem quos
              asperiores, adipisci vel odio.
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Front_back_full;

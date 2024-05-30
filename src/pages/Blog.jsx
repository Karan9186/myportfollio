import React from "react";
import Nav from "../Nav";
import "./blog.css";
import Footer from "../Footer";
import { BsDot } from "react-icons/bs";
import { blogData } from "./Blog_data";
function Blog() {
  let all_b_Datas = blogData.map((v, i) => {
    return (
      <div className="container mt-5 pt-3 main_blog_con" data-aos="fade-left">
        <h3 className="pb-2" data-aos="fade-left">{v.title}</h3>
        <div className="pb-3 d-flex align-items-center gap-3 mini_img_and_content">
          <img src="src/assets/myprofile.png" alt="" data-aos="fade-left"/>
          <h5 data-aos="fade-left">Karan Parmar</h5>
          <h5 data-aos="fade-left">
            <BsDot color="white" />
            {v.publishDate}
          </h5>
        </div>
        <h5 className="pb-3 " data-aos="fade-left">{v.content}</h5>
      </div>
    );
  });
  return (
    <div>
      <Nav />

      <div className="container mt-5">
        <div>
          <h2>Coding Articles</h2>
        </div>

        {all_b_Datas}

        <br />
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default Blog;

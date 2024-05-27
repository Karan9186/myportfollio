import { MdHeight } from "react-icons/md";
import "./App.css";
import Front_back_full from "./Front_back_full";
import Nav from "./Nav";
import Nav_after from "./Nav_after";
import Project from "./Project";
import Reach_out from "./Reach_out";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <div className="main_con_app">
          <Nav />
          <Nav_after />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Front_back_full />
        <Project />
        <Reach_out />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

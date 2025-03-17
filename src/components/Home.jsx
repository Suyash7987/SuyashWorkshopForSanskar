import React from "react";
import "./Home.css";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div id="Part1">
        <div id="part1-Left">
          <h1>
            A <span>personalized</span> eyewear shopping experience
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            tempora ab voluptate minima officiis alias accusamus ea architecto,
            aliquam sint temporibus quidem, quia, autem vel?
          </p>
          <div id="buttons">
            <button>Get started</button>
            <button>See product Demo</button>
          </div>
        </div>
        <div id="part1-right">
          <img src="glass.png" alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import "../Styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="lander">
      <div className="herosection">
        <div className="heroinfo">
          <h1>Discover the Most Suitable Properties in your Neighbourhood</h1>
          <h2>
            Find a variety of properties that suit you very easily , forget all
            difficulties in finding a residence for you
          </h2>
          <div className="countbox">
            <div className="box1">
              <h2>400<span> +</span></h2>
              <h3>Happy</h3>
              <h3>Customers</h3>
            </div>
            <div className="box2">
              <h2>20<span> +</span></h2>
              <h3>Residential</h3>
              <h3>Societies</h3>
            </div>
          </div>
        </div>
          <div className="heroimgcontainer">
            <div className="heroimg"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

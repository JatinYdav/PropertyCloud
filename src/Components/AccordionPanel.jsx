import React from "react";
import "../Styles/AccordionPanel.css";
import ArrowDownCircle from "../Svgs/SmallIcons/ArrowDownCircle"
import ACPicon1 from "../Svgs/SmallIcons/ACPicon1";
import ACPicon4 from "../Svgs/SmallIcons/ACPicon4";
const AccordionPanel = () => {
  return (
    <div className="accordionpanel">
      <div className="accordion ac1">
        <div className="accordion-content">
          <h1>
            <div className="subbox">
              <ACPicon1 />
              <span>Exquisite Properties</span>
            </div>
            <ArrowDownCircle />
          </h1>
          <p className="accordiondescription">
            We pride ourselves on delivering unparalleled real estate
            experiences,connecting you with the most luxurious and sought-after
            homes. With our expert team and extensive network, we ensure that
            your dream property becomes a reality.
          </p>
        </div>
      </div>
      <div className="accordion ac2">
        <div className="accordion-content">
          <h1>
            <div className="subbox">
              <ACPicon4 />
              <span>Best Prices in the Market</span>
            </div>
            <ArrowDownCircle />
          </h1>
          <p className="accordiondescription">
            We not only bring you the best properties in town, but also ensure
            that you secure them at the most competitive prices in the market.
            Our dedicated team tirelessly negotiates to get you the best deals,
            maximizing the value of your investment.
          </p>
        </div>
      </div>
      <div className="accordion ac3">
        <div className="accordion-content">
          <h1>
            <div className="subbox">
              <ACPicon4 />
              <span>Industrial Deals</span>
            </div>
            <ArrowDownCircle />
          </h1>
          <p className="accordiondescription">
            We pride ourselves on delivering unparalleled real estate
            experiences, connecting you with the most luxurious and sought-after
            homes. With our expert team and extensive network, we ensure that
            your dream property becomes a reality.
          </p>
        </div>
      </div>
      <div className="accordion ac4">
        <div className="accordion-content">
          <h1>
            <div className="subbox">
              <ACPicon4 />
              <span>Sell & Buy</span>
            </div>
            <ArrowDownCircle />
          </h1>
          <p className="accordiondescription">
            Whether you're looking to buy your dream property or sell your
            current one, we got you covered. Our dedicated team uses innovative
            marketing strategies & leverages our extensive network to ensure a
            seamless selling experience for your property.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionPanel;

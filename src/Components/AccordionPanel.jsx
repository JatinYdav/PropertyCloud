import React from "react";
import '../Styles/AccordionPanel.css'
import Accordion from "./SubComponents/Accordion";
import ACPicon1 from "../Svgs/SmallIcons/ACPicon1";
import ACPicon4 from "../Svgs/SmallIcons/ACPicon4";
const AccordionPanel = () => {
  return (
    <div className="accordionpanel">
      <Accordion
        className="ac1"
        acicon={<ACPicon1 />}
        heading="Exquisite Properties"
        accordiondescription="We pride ourselves on delivering unparalleled real estate experiences,
              connecting you with the most luxurious and sought-after homes. With
              our expert team and extensive network, we ensure that your dream
              property becomes a reality."
      />
      <Accordion
        className="ac2"
        acicon={<ACPicon4 />}
        heading="Best Prices in the Market"
        accordiondescription="We not only bring you the best properties in town, but also ensure that you secure them at the most competitive prices in the market. Our dedicated team tirelessly negotiates to get you the best deals, maximizing the value of your investment."
      />
      <Accordion
        className="ac1"
        acicon={<ACPicon4 />}
        heading="Industrial Deals "
        accordiondescription="We specialize in industrial land deals, catering to the needs of businesses &  investors alike.Our expert team understands the unique requirements of industrial ventures, and take pride in connecting you with prime locations that fuel growth and success."
      />
      <Accordion
        className="ac1"
        acicon={<ACPicon4 />}
        heading="Sell & Buy"
        accordiondescription="Whether you're looking to buy your dream property or sell your current one, we got you covered. Our dedicated team uses innovative marketing strategies & leverages our extensive network to ensure a seamless selling experience for your property."
      />
    </div>
  );
};

export default AccordionPanel;

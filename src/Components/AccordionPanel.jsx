import React, { useState } from "react";
import "../Styles/AccordionPanel.css";
import ArrowDownCircle from "../Svgs/SmallIcons/ArrowDownCircle";
import ArrowUpCircle from "../Svgs/SmallIcons/ArrowUpCircle";
import ACPicon1 from "../Svgs/SmallIcons/ACPicon1";
import ACPicon4 from "../Svgs/SmallIcons/ACPicon4";
import MemoACPImg from "../Svgs/ACPImg";

const AccordionPanel = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="accordionpanel">
      <div className="acpimgcontainer">
        <span className="acpimg">
          <MemoACPImg />
        </span>
      </div>
      <div className="accordions">
        <span className="acpinfo">
          <h3>Our Services</h3>
          <h1>Value we provide you</h1>
          <h2>
            We are eager to help by providing the best service for you . We
            believe a good place to live can make your life better
          </h2>
        </span>
        {data.map((item, index) => {
          return (
            <div className="item">
              <header
                className="title"
                onClick={() => {
                  toggle(index);
                }}
              >
                <h1>
                  {item.icon}
                  {item.heading}
                </h1>
                <span>
                  {selected === index ? <ArrowUpCircle /> : <ArrowDownCircle />}
                </span>
              </header>
              <p className={selected === index ? "show" : "itemdescription"}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionPanel;

const data = [
  {
    icon: <ACPicon1 />,
    heading: "Exquisite Properties",
    description:
      "We pride ourselves on delivering unparalleled real estate experiences,connecting you with the most luxurious and sought-after homes. With our expert team and extensive network, we ensure that your dream property becomes a reality.",
  },
  {
    icon: <ACPicon4 />,
    heading: "Best Prices in the Market",
    description:
      "We not only bring you the best properties in town, but also ensure that you secure them at the most competitive prices in the market. Our dedicated team tirelessly negotiates to get you the best deals,maximizing the value of your investment.",
  },
  {
    icon: <ACPicon4 />,
    heading: "Industrial Deals",
    description:
      " We specialize in industrial land deals, catering to the needs of businesses &  investors alike.Our expert team understands the unique requirements of industrial ventures, and take pride in connecting you with prime locations that fuel growth and success.",
  },
  {
    icon: <ACPicon4 />,
    heading: "Sell & Buy",
    description:
      "Whether you're looking to buy your dream property or sell your current one, we got you covered. Our dedicated team uses innovative marketing strategies & leverages our extensive network to ensure a seamless selling experience for your property.",
  },
];

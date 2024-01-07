import React, { useState } from "react";
import "../Styles/AccordionPanel.css";
import ArrowDownCircle from "../Svgs/SmallIcons/ArrowDownCircle";
import ArrowUpCircle from "../Svgs/SmallIcons/ArrowUpCircle"
import ACPicon1 from "../Svgs/SmallIcons/ACPicon1";
import ACPicon4 from "../Svgs/SmallIcons/ACPicon4";

const AccordionPanel = () => {

  const[selected,setSelected]=useState(null)

  const toggle = (index) =>{
    if(selected===index){
      return setSelected(null)
    }
    setSelected(index)

  }


  return (
    <div className="accordionpanel">
      <div className="accordions">
        {data.map((item, index) => {
          return (
            <div className="item">
              <header
                className="title"
                onClick={() => {
                  toggle(index);
                }}
              >
                {item.icon}
                <h1>
                  {item.heading}
                  <span>
                    {selected === index ? (
                      <ArrowUpCircle />
                    ) : (
                      <ArrowDownCircle />
                    )}
                  </span>
                </h1>
              </header>
              <p
                className={
                  selected === index
                    ? "show"
                    : "itemdescription"
                }
              >
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
    heading: "Exquisite Properties",
    description:
      " We pride ourselves on delivering unparalleled real estate experiences, connecting you with the most luxurious and sought-after homes. With our expert team and extensive network, we ensure that your dream property becomes a reality.",
  },
  {
    icon: <ACPicon4 />,
    heading: "Sell & Buy",
    description:
      "Whether you're looking to buy your dream property or sell your current one, we got you covered. Our dedicated team uses innovative marketing strategies & leverages our extensive network to ensure a seamless selling experience for your property.We pride ourselves on delivering unparalleled real estate experiences,connecting you with the most luxurious and sought-after homes. With our expert team and extensive network, we ensure that your dream property becomes a reality.",
  },
];

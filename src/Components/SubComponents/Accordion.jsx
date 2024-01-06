import React from 'react'
import ArrowDownCircle from "../../Svgs/SmallIcons/ArrowDownCircle";

import "../../Styles/AccordionPanel.css";
const Accordion = (props) => {
  return (
    <div className="accordion {props.className}">
      <div className="accordion-content">
        <h1>
          <div className="subbox">
            {props.acicon}
            <span>{props.heading}</span>
          </div>
          <ArrowDownCircle />
        </h1>
        <p className="accordiondescription">
          {props.accordiondescription}
        </p>
      </div>
    </div>
  );
}

export default Accordion
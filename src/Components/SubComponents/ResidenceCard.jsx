import React from 'react'
import MapPin from '../../Svgs/MapPin'
import '../../Styles/SubComponentStyles/ResidenceCard.css'
import Residence1 from "../../Svgs/Residence/Residence1.svg"
import Residence2 from "../../Svgs/Residence/Residence2.svg";
import Residence3 from "../../Svgs/Residence/Residence3.svg";
const ResidenceCard = (props) => {
  
  return (
    <div className="{props.className} card">
      <div className="cardimg">
        <img src={(props.display===1)?Residence1:(props.display===2)?Residence2:Residence3} alt="r1" className='cardimgg'/>
      </div>
      <div className="cardinfo">
        <h2 className="rlocation">
          <MapPin />
          {props.location}
        </h2>
        <h1 className="rname">{props.name}</h1>
        <h2 className="rdescription">{props.description}</h2>
      </div>
    </div>
  );
}

export default ResidenceCard
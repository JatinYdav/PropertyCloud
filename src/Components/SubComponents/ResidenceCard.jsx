import React from 'react'
import MapPin from '../../Svgs/MapPin'
import '../../Styles/SubComponentStyles/ResidenceCard.css'
import Residence1 from '../../Svgs/Residence/Residence1Photo (4).svg'
const ResidenceCard = (props) => {
  return (
    <div className="{props.className} card">
      <div className="cardimg">
        <img src={Residence1} alt="r1" className='cardimgg'/>
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
import React from 'react'
import ResidenceCard from './SubComponents/ResidenceCard'
import '../Styles/PopularResidences.css'
import Residence1 from '../Svgs/Residence1'
import Residence2 from '../Svgs/Residence2'
import Residence3 from '../Svgs/Residence3'

const PopularResidences = () => {
  return (
    <div className="residences">
      <div className="prheader">
        <h3>BEST CHOICES</h3>
        <h2>POPULAR RESIDENCES</h2>
      </div>
      <div className="cardbox">
        <ResidenceCard className="card1"
          display={<Residence1 />}
          location="Japanese Zone, Neemrana"
          name=" Ashiana Green Hills"
          description="Some small content here that spans two lines and is nice blah blah blah blah blah"
        />
        <ResidenceCard className="card2"
          display={<Residence2/>}
          location="Japanese Zone, Neemrana"
          name="Eldeco Eden Park"
          description="Offering you a bouquet of options from high-end independent villas to 2 & 3 bedroom Low and High-rise apartments."
        />
        <ResidenceCard className="card3"
          display={<Residence3/>}
          location="Japanese Zone, Neemrana"
          name="Ashadeep Green Acres"
          description="Some small content here that spans two lines and is nice blah blah blah blah blah"
        />
      </div>
    </div>
  );
} 

export default PopularResidences
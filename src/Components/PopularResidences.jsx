import React from 'react'
import ResidenceCard from './SubComponents/ResidenceCard'
import '../Styles/PopularResidences.css'

const PopularResidences = () => {
  return (
    <div className="residences">
      <div className="prheader">
        <h3>BEST CHOICES</h3>
        <h2>POPULAR RESIDENCES</h2>
      </div>
      <div className="cardbox">
        <ResidenceCard className="card1"
          display={1}
          location="Japanese Zone, Neemrana"
          name=" Ashiana Green Hills"
          description="Some small content here that spans two lines and is nice blah blah blah blah blah"
        />
        <ResidenceCard className="card2"
          display={2}
          location="Japanese Zone, Neemrana"
          name="Eldeco Eden Park"
          description="Offering you a bouquet of options from high-end independent villas to 2 & 3 bedroom Low and High-rise apartments."
        />
        <ResidenceCard className="card3"
          display={3}
          location="Japanese Zone, Neemrana"
          name="Ashadeep Green Acres"
          description="Some small content here that spans two lines and is nice blah blah blah blah blah"
        />
      </div>
    </div>
  );
} 

export default PopularResidences
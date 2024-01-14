import React from "react";
import AshianaHousing from "../Svgs/SocietyLogos/AshianaHousing.svg";
import AvalonGroup from "../Svgs/SocietyLogos/AvalonGroup.svg";
import EldecoHousing from "../Svgs/SocietyLogos/EldecoHousing.svg";
import Ashadeep from "../Svgs/SocietyLogos/Ashadeep.svg";

import "../Styles/SocietyLogos.css";
const Socities = () => {
  return (
    <div className="societybox">
      <div className="societyscroller">
        <img src={AshianaHousing} alt="Ashiana" />
        <img src={AvalonGroup} alt="Avalon" />
        <img src={EldecoHousing} alt="Eldeco" />
        <img src={Ashadeep} alt="Ashadeep" />
      </div>
    </div>
  );
};

export default Socities;

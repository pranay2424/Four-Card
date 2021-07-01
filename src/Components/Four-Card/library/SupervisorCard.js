import React from "react";
import SupervisorCardStyle from "./SupervisorCardStyle";
import Supervisor from "../images/supervisor.jpg";

const SupervisorCard = () => {
  return (
    <SupervisorCardStyle>
      <p>Supervisor </p>
      <span>Monitors activity to identify project roadblocks</span>
      <div><img src={Supervisor} alt="Supervisor" /> </div>
    </SupervisorCardStyle>
  );
};

export default SupervisorCard;

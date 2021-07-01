import React from "react";
import CalculatorCardStyle from "./CalculatorCardStyle";
import Calculator from "../images/calculator.jpg";

const CalculatorCard = () => {
  return (
    <CalculatorCardStyle>
      <p> Calculator </p>
      <span>Uses data from past projects to provide better delivery estimates</span>
      <div><img src={Calculator} alt="Supervisor" /> </div>
    </CalculatorCardStyle>
  );
};

export default CalculatorCard;
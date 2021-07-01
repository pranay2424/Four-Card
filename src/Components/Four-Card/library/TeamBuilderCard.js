import React from "react";
import TeamBuilderCardStyle from "./TeamBuilderCardStyle";
import Builder from "../images/builder.jpg";

const TeamBuilderCard = () => {
  return (
    <TeamBuilderCardStyle>
      <p>Team Builder </p>
      <span>
        Scans our talent network to create the optimal team for your project
      </span>
      <div>
        <img src={Builder} alt="TeamBuilder" />{" "}
      </div>
    </TeamBuilderCardStyle>
  );
};

export default TeamBuilderCard;

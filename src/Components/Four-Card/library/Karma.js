import React from "react";
import KarmaCardStyle from "./KarmaCardStyle";
import karma from "../images/karma.jpg";

const KarmaCard = () => {
  return (
    <KarmaCardStyle>
      <p>Karma </p>
      <span>Regularly evaluates our talent to ensure quality</span>
      <div>
        <img src={karma} alt="Karma" />{" "}
      </div>
    </KarmaCardStyle>
  );
};

export default KarmaCard;

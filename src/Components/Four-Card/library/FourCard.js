import React from "react";
import DesktopView from "./DesktopView";
import Heading from "./Heading";
import CardContainer from "./CardContainer"

const FourCard = () => {
  return (
    <DesktopView>
      <Heading>
        <span> Reliable, efficient delivery</span>
        <p> Powered by Technology</p>
        <a href="/">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </a>
      </Heading>

      <CardContainer />
    </DesktopView>
  );
};

export default FourCard;

import React from "react";
import Container from "./Container";
import SupervisorCard from "./SupervisorCard";
import CalculatorCard from "./CalculatorCard";
import TeamBuilderCard from "./TeamBuilderCard";
import KarmaCard from "./Karma";
import MidCards from "./MidCards";
const CardContainer = () => {
  return (
    <Container>
      <SupervisorCard />
      <MidCards>
        <TeamBuilderCard />
        <KarmaCard />
      </MidCards>
      <CalculatorCard />
    </Container>
  );
};

export default CardContainer;

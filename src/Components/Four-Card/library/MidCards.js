import styled from "styled-components";

const MidCards = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0px;
    margin-top: 20px;
    width: 100%;
    height: auto;
    background-color: hsl(0, 0%, 95%);
  }

  display: flex;
  height: 600px;
  margin-right: 30px;
  width: 300px;
  flex-direction: column;
  justify-content: space-around;
  background-color: hsl(0, 0%, 98%);
`;

export default MidCards;

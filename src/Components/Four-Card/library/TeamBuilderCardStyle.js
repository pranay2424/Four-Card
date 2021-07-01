import styled from "styled-components";

const TeamBuilderCardStyle = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90vw;
    margin-top: 20px;
  margin-right: 0px;
    height: auto;
    background-color: hsl(0, 0%, 95%);
  }
  
 /* Desktop */
  img {
    width: 64px;
    height: 64px;
    margin-bottom: 20px;
  }
  span {
    font-size: 15px;
    height: auto;
    display: flex;
    align-self: center;
    height: 30px;
    width: 230px;
    margin-right: 28px;
    color: hsl(229, 6%, 66%);
  }
  p {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    height: 30px;
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 130px;
    width: 280px;
  }
  display: flex;
  margin-right: 30px;
  flex-direction: column;
  border-top: 3px solid  hsl(0, 78%, 62%) ;
  background-color: white;
  height: 250px;
  width: 300px;
  box-shadow: 5px 10px 18px hsl(229, 6%, 66%);
  border-radius: 10px;
`;

export default TeamBuilderCardStyle;

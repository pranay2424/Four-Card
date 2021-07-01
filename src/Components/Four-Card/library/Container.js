import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: hsl(0, 0%, 95%);
  }
 span{
   display: flex;
   align-items: center;
   height: 100%;
   width: auto;
 }
  display: flex;
  height: auto;
  width:auto;
  flex-direction: row;
  align-items: center;
  background-color: hsl(0, 0%, 98%);
`;

export default Container;


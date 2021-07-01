import styled from "styled-components";

const DesktopView = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: auto;
    background-color: hsl(0, 0%, 95%);
  }

  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0%;
  font-family: 'Poppins', sans-serif;
  margin: 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(0, 0%, 98%);
`;

export default DesktopView;


import styled from "styled-components";

const Heading = styled.div`
  @media only screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    background-color: hsl(0, 0%, 95%);
  }

  height: auto;
  width: 500px;
  display: flex;
  text-align: center;
  flex-direction: column;
  a {
    text-decoration: none;
    color: hsl(229, 6%, 66%);
  }
  span {
    font-size: 40px;
    color: hsl(229, 6%, 66%);
  }

  p{
      font-size: 40px;
      margin-top: 10px;
      font-weight: 600;
  }
`;

export default Heading;

import styled from "styled-components";

export const Main = styled.div`
  background-color: #333333;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const TimeLine = styled.div`
  margin-top: 127px;
  width: 42%;
  padding: 0 25px;
  @media (max-width: 600px) {
    width: 100%;
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 43px;
  }
`;
export const MenuLeft = styled.div`
  margin-top: 212px;
  width: 21%;
  height: 200px;
  @media (max-width: 600px) {
    display: none;
  }
`;

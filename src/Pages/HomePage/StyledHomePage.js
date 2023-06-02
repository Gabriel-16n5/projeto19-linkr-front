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
  margin-right: 25px;
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
`;

export const BackgroundOpacity = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 11;
`;

export const DeletedContainer = styled.div`
  display: none;
  width: 597px;
  height: 262px;
  background: #333333;
  border-radius: 50px;
  position: fixed;
  top: 30%;
  left: 38%;
  z-index: 12;
  line-height: 41px;
  padding: 120px;
  padding-top: 30px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 34px;
    color: #ffffff;
  }
`;
export const ButtonsContainer = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 18px;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NoButton = styled.button`
  width: 134px;
  height: 37px;
  font-weight: 700;
  background: #ffffff;
  border-radius: 5px;
  color: #1877f2;
  border: none;
`;

export const YesButton = styled.button`
  width: 134px;
  height: 37px;
  font-weight: 700;
  background: #1877f2;
  border-radius: 5px;
  color: #ffffff;
  border: none;
`;

import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #333333;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
  flex-direction: column;
}`;

export const LeftContainer = styled.div`
  background-color: black;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
    height: 175px;
    justify-content: start;
    align-items: center;
    padding: 20px;
  }
  h1 {
    font-family: "Passion One";
    font-size: 76px;
    color: #ffffff;
    font-weight: 700;
    margin-left: 65px;
    @media (max-width: 600px) {
      text-align: center;
      margin-left: 0;
    }
  }
  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    color: #ffffff;
    font-weight: 700;
    margin-left: 65px;
    max-width: 450px;
    margin-right: 20px;
    @media (max-width: 600px) {
      font-size: 24px;
      margin-left: 0;
      width: 250px;
    }
  }
`;

export const RightContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-width: 600px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const Container = styled.div`
  margin-right: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  @media (max-width: 600px) {
    width: 330px;
  }
`;

export const Input = styled.input`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 27px;
  height: 35px;
  margin-bottom: 16px;
  width: 30vw;
  height: 65px;
  border-radius: 5px;
  padding: 15px;
  margin: 1px;
  border: none;
  :focus {
    border: 2px solid #ffb6b6;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  font-family: "Oswald", sans-serif;
  height: 65px;
  background-color: #007bff;
  border-radius: 5px;
  color: #fff;
  border: none;
  width: 30vw;
  font-size: 27px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 22px;
    height: 55px;
  }
`;

export const Message = styled.p`
  font-size: 17px;
  margin-top: 16px;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 20px;
  a {
    text-decoration: underline;
    color: inherit;
  }
`;

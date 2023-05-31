import styled from "styled-components";

export const MainContainer = styled.div`
  background-color:#333333;
  width:100%;
  height:auto;
  display:flex;
  justify-content:space-between;
`
export const LeftContainer = styled.div`
background-color: black;
width:63%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
h1{
  font-family: "Passion One";
  font-size:76px;
  color:#FFFFFF;
  font-weight:700;
  margin-left: 65px;
}
h3{
  font-family: "Oswald";
  font-size:43px;
  color:#FFFFFF;
  font-weight:700;
  margin-left: 65px;
  padding-bottom: 300px;
}
`

export const RightContainer = styled.div`

`

export const Container = styled.div`
margin-right: 23px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Input = styled.input`
height: 35px;
margin-bottom: 16px;
width: 30vw;
`;

export const Button = styled.button`
height: 35px;
background-color: #007bff;
color: #fff;
border: none;
width: 30vw;
cursor: pointer;
`;

export const Message = styled.p`
margin-top: 16px;
color: #fff;
padding-bottom: 250px;
a{
    text-decoration:none;
    color: inherit;
}
`;
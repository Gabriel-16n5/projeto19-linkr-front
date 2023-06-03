import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import Search from "./Search";
export default function NavBar() {
  const [icon, setIcon] = useState(0);
  const [logout, setLogout] = useState("none");
  const navigate = useNavigate();

  function logoutUser(){
    localStorage.clear();
    navigate("/");
  }

  function openlogout() {
    if (icon === 0) {
      setLogout("flex");
      setIcon(1);
    }
    if (icon === 1) {
      setLogout("none");
      setIcon(0);
    }
  }
  return (
    <Main>
      <h1>linkr</h1>
      <Search />
      <Seta onClick={openlogout} >
      {icon===0 ? <BsChevronDown/> : <BsChevronUp/> }
        <img data-test="avatar"
          src={localStorage.getItem("userUrl")}
          alt=""
        />
      <Logout data-test="menu" logout={logout}>
        <Hover><p data-test="logout" onClick={logoutUser}>Logout</p></Hover>
      </Logout>
      </Seta>
    </Main>
  );
}

const Seta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => props.logout};
`;

const Logout = styled.div`
  width: 150px;
  height: 47px;
  background-color: #171717;
  position: fixed;
  top: 72px;
  right: 0px;
  border-bottom-left-radius: 20px;
  display: ${(props) => props.logout};
  justify-content: center;
  align-items: center;
  p {
    font-size: 17px;
    font-family: "Lato", sans-serif;
    font-weight: 700;
  }
`;
const Main = styled.div`
  width: 100%;
  height: 72px;
  background-color: #151515;
  display: flex;
  font-size: 26px;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  padding-left: 26px;
  padding-right: 10px;
  position: fixed;

  input {
    width: 100%;
    height: 45px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 10px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 19px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
    ::placeholder {
      color: #c6c6c6;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 19px;
    }
  }
  span {
    font-size: 21px;
    position: absolute;
    bottom: 8px;
    right: 10px;
    color: #c6c6c6;
    cursor: pointer;
  }
  h1 {
    color: #ffffff;
    font-size: 49px;
    font-weight: 700px;
    font-family: "Passion One", cursive;
  }
  img {
    width: 53px;
    height: 53px;
    border-radius: 26px;
    margin-left: 12px;
  }
`;

const Hover = styled.section`
:hover{
  color: #dc143c;
  cursor: pointer;
}
`
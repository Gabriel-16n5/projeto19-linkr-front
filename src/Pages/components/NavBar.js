import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
export default function NavBar() {
  const [icon, setIcon] = useState(<BsChevronDown onClick={openlogout} />);
  const [logout, setLogout] = useState("none");
  let i = 0;
  function openlogout() {
    if (i === 0) {
      setIcon(<BsChevronUp onClick={openlogout} />);
      setLogout("flex");
      i = 1;
    } else {
      console.log("entrou no else");
      setIcon(<BsChevronDown onClick={openlogout} />);
      setLogout("none");
      i = 0;
    }
  }
  console.log(icon);
  return (
    <Main>
      <h1>linkr</h1>
      <section>
        <input type="text" placeholder="Search for people" />
        <span>
          <AiOutlineSearch />
        </span>
      </section>
      <Seta>
        {icon}
        <img
          src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg"
          alt=""
        />
      </Seta>
      <Logout logout={logout}>
        <p>Logout</p>
      </Logout>
    </Main>
  );
}

const Seta = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

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
    //Reset do input
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    //.
    :focus {
      //Reset do input
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      //.
    }
    ::placeholder {
      color: #c6c6c6;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 19px;
    }
  }
  section {
    width: 39%;
    position: relative;
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

import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export default function WhiteBox(props) {
  const [data,setData] = useState({url:"",text:""})
  
  function publishPost(){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/timeline`,data,{
      headers: {
        'Authorization': `Bearer ${props.token}`
      },
    });
    promise.then((res) => {
      alert("Postado")
    });
    promise.catch((erro) => {
      alert(erro.message);
    });
  }
  return (
    <Main>
      <Imagem
        src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg"
        alt=""
      />
      <TextContainer>
        <p>What are you going to share today?</p>

        <UrlInput value={data.url} onChange={e => setData({...data,url:e.target.value})} placeholder={"http://..."}></UrlInput>

        <TextInput
        value={data.text} onChange={e => setData({...data,text:e.target.value})}  placeholder={"Awesome article about #javascript"}
        ></TextInput>

        <PublishButton onClick={publishPost}>Publish</PublishButton>
      </TextContainer>
    </Main>
  );
}
const Imagem = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Main = styled.div`
  height: 209px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-bottom: 29px;
  padding: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    border-radius: 0;
  }
  img {
    width: 53px;
    height: 53px;
    border-radius: 26px;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 88%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 5px 0;
  @media (max-width: 600px) {
    width: 100%;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: #707070;
  }
`;
const UrlInput = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  height: 30px;
  width: 100%;
  background: #efefef;
  color: #949494;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`;

const TextInput = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  height: 66px;
  width: 100%;
  color: #949494;
  background: #efefef;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`;

const PublishButton = styled.button`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #ffffff;
  width: 112px;
  height: 31px;
  background: #1877f2;
  border-radius: 5px;
  margin-left: auto;
  border-radius: 5px;
  border: none;
`;

import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function WhiteBox(props) {
  const regex = /#\w+/gm;
  const [data,setData] = useState({url:"",text:""})
  const [wait,setWait] = useState(false)
  const navigate = useNavigate();
  const userImg = localStorage.getItem("userUrl")

  function publishPost(e){
    let sapo
    if(!wait) {
    let a = data.text.match(/#\w+/g)
    if(a === null){
      sapo = ""
    }else {
      sapo = a[0].replace("#","")
    }
    let tags = {
      tag: sapo
    }
    const holder = {
      url: data.url,
      text: data.text,
      tag: tags.tag
    }
    e.preventDefault();
    setWait(true)
    const promiseTags = axios.post(`${process.env.REACT_APP_API_URL}/hashtag`, tags);
    promiseTags.then((res) => {
    });
    promiseTags.catch((erro) => {
      alert(erro.message);
    });
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/timeline`,holder,{
      headers: {
        'Authorization': `Bearer ${props.token}`
      },
    });
    promise.then((res) => {
      setWait(false)
      setData({url:"",text:""})
      return window.location.reload(false);
    });
    promise.catch((erro) => {
      alert("Houve um erro ao publicar seu link");
      setWait(false)
      setData({url:"",text:""})
      return window.location.reload(false);
    });
  }
  }
  return (
    <Main data-test="publish-box">
      <Imagem
        src={userImg}
        alt="User image"
      />
      <TextContainer onSubmit={publishPost}>
        <p>What are you going to share today?</p>

        <UrlInput data-test="link" required disabled={wait} value={data.url} onChange={e => setData({...data,url:e.target.value})} placeholder={"http://..."}></UrlInput>

        <TextInput data-test="description"
        value={data.text} disabled={wait} onChange={e => setData({...data,text:e.target.value})}  placeholder={"Awesome article about #javascript"}
        ></TextInput>

        <PublishButton disabled={wait} type="submit" data-test="publish-btn" >{wait===false ? "Publish" : "Publishing..."} </PublishButton>
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

const TextContainer = styled.form`
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
  :hover{
    cursor: pointer;
  }
`;

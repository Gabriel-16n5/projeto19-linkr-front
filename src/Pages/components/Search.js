import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import {DebounceInput} from 'react-debounce-input';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function Search() {
  const [data,setData] = useState(0)
  const navigate = useNavigate();
  function search(e){
    if(!e) return setData(0)
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/users/${e}`);
    promise.then((res) => {
      setData(res.data);
    });
    promise.catch((erro) => {
      alert(erro.message);
    });
  }

  return (
    <SearchContainer>
      <DebounceInput type="text" placeholder="Search for people" minLength={3}
          debounceTimeout={300} onChange={e=> search(e.target.value)}/>
      <span>
        <AiOutlineSearch />
      </span>
      {data === 0 || !data[0] ? <></> : <MenuDown>{data.map((a, i)=> <div key={i} onClick={b=> navigate(`/user/${a.id}`)}>
        <img src={a.pictureUrl}/>
        <p>{a.username}</p>
        </div>)} </MenuDown> }
      
     
    </SearchContainer>
  );
}

const SearchContainer = styled.section`
  width: 39%;
  position: relative;
`;

const MenuDown = styled.div`
 width:38%;
    background-color:#E7E7E7;
    position:fixed;
    top:58px;
    right:30.5%;
    border-radius:8px;
    padding:10px;
    img{
      height:39px;
      width:39px; 
      margin-right:20px;
    }
    p{
      font-family: 'Lato';
      color: #515151;
      font-weight: 400;
      font-size: 19px;
    }
    div{
      display:flex;
      align-items:center;
      margin-bottom:10px;
      cursor: pointer;
      :hover{
        background-color:lightgrey;
      }
    }
`


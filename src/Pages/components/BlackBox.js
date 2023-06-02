import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart, } from 'react-icons/io';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import { useContext, useRef, useState, useEffect } from 'react';
import { TimelineContext } from '../../contexts/TimelineContext';
import { Tooltip } from "react-tooltip";
import axios from 'axios';

export default function BlackBox(props) {
    const [filled, setFilled] = useState(false);
    // const { deleted, setDeleted, open, setOpen } = useContext(TimelineContext);
    const { setDeleted } = useContext(TimelineContext);
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(props.text)
    const textRef = useRef(null);
    const inputRef = useRef(null);
    const peopleNumberLikes = props.peopleLike.length
    const peopleLikes = props.peopleLike

    function namePeopleLike(){
        if(peopleNumberLikes === 0) return "No Likes"
        else if (peopleNumberLikes === 1) return `${peopleLikes[0].username} curtiu`
        else if (peopleNumberLikes === 2) return `${peopleLikes[0].username} e ${peopleLikes[1].username} curtiram`
        else return `${peopleLikes[0].username}, ${peopleLikes[1].username} e mais ${Number(peopleNumberLikes)-2}curtiram`
    }

    function clickEditing() {
        setIsEditing(!isEditing)
    }

    function keyPress(e) {
        if (e.key === 'Enter') {
            setIsEditing(false)
            const newText = inputRef.current.value
            axios.put(`${process.env.REACT_APP_API_URL}/timeline/${props.postId}`, { newText }, {headers: {
                'Authorization': `Bearer ${props.token}`
              }})
    
            .then(response => {
                setText(newText)
                console.log(response.message)
            })
            .catch(error => {
                console.log(error.message)
                alert("It wasn't able to save new change")
            });

        } else if (e.key === 'Escape') {
            setIsEditing(false)
        }
    }

    function fillHeart() {
        setFilled(!filled);
    }

    function deletePost() {
        setDeleted(true);
    }
    function clickLink() {
        const url = props.url
        window.open(url, "_blank");
    }
    
    useEffect(() => {
        if (isEditing) {
          inputRef.current.focus();
        }
      }, [isEditing]);

    return (
        <Main >
            <ImageLikesContainer>
                <img
                    src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg"
                    alt="imagem perfil"
                />
                <HeartIcon
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={namePeopleLike()}
                    data-tooltip-place="bottom"
                    onClick={fillHeart}
                    filled={filled}>
                    {filled ? <IoIosHeart size={24} /> : <IoIosHeartEmpty size={24} />}
                </HeartIcon>
                <ReactToolTip id="my-tooltip" />
                {/* ao passar o mouse por cima <p>Ederson, Kevin e outras 39 pessoas</p> */}
                <p>{`${peopleNumberLikes} likes`}</p>
            </ImageLikesContainer>
            <TextContainer>
                <TextTopContainer>
                    <p>{props.name}</p>
                    <IconsContainer>
                        <BsPencilSquare size={20} onClick={clickEditing} />
                        <Hover><BsFillTrashFill size={20} onClick={deletePost} /></Hover>
                    </IconsContainer>
                </TextTopContainer>
                {isEditing ? (
                    <input
                        ref={inputRef}
                        type="text"
                        defaultValue={text}
                        onKeyDown={keyPress}
                    />
                ) : (
                    <span ref={textRef}>{text}</span>
                )}
                <UrlContainer onClick={clickLink}>
                    <UrlTextContainer>
                        <h2>{props.title}</h2>
                        <p>
                            {props.description}
                        </p>
                        <span>{props.url}</span>
                    </UrlTextContainer>
                    <img src={props.image} alt="imagem site" />
                </UrlContainer>
            </TextContainer>
        </Main>
    );
}

const Main = styled.div`
  height: 276px;
  width: 100%;
  background-color: #171717;
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
    margin-bottom: 19px;
  }
`;

const ImageLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 14%;
  justify-content: start;
  align-items: center;
  P {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    color: #ffffff;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 88%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  p {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 19px;
    color: #ffffff;
  }
  span {
    font-family: "Lato", sans-serif;
    font-weight: 300;
    font-size: 17px;
    color: #b7b7b7;
  }
`;

const TextTopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const UrlContainer = styled.div`
  width: 100%;
  height: 56%;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  img {
    height: 100%;
    width: 30%;
    object-fit: contain;
  }
`;

const UrlTextContainer = styled.div`
  width: 61%;
  height: 100%;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
    color: #cecece;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #9b9595;
  }
  span {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #cecece;
  }
`;

const HeartIcon = styled.div`
  color: ${({ filled }) => (filled ? "red" : "white")};
  cursor: pointer;
`;

const IconsContainer = styled.div`
  color: #ffffff;
  height: 18px;
  width: 16px;
  display: flex;
  flex-direction: row;
  width: 10%;
  gap: 10px;
  justify-content: space-between;

`;

const ReactToolTip = styled(Tooltip)`
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 12px;
`
const Hover = styled.span`
:hover{
  color: red;
  cursor: pointer;
}
`

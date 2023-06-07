import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart, } from 'react-icons/io';
import { BsPencilSquare, BsFillTrashFill, BsSend } from 'react-icons/bs';
import {FaRegComment} from 'react-icons/fa'
import { useContext, useRef, useState, useEffect } from 'react';
import { TimelineContext } from '../../contexts/TimelineContext';
import { Tooltip } from "react-tooltip";
import axios from 'axios';
import { useNavigate } from "react-router";
import reactStringReplace from 'react-string-replace';
import { Link } from 'react-router-dom';

export default function BlackBox(props) {
    const navigate = useNavigate();
    const [filled, setFilled] = useState(false)
    // const { deleted, setDeleted, open, setOpen } = useContext(TimelineContext);
    const { setDeleted } = useContext(TimelineContext);
    const [isEditing, setIsEditing] = useState(false)
    const [includesName, setIncludesName] = useState(false)
    const [loadingLike, setLoadingLike] = useState(false)
    const [disableEdit, setDisableEdit] = useState(false)
    const [text, setText] = useState(props.text)
    const [tags, setags] = useState(props.tag)
    const textRef = useRef(null);
    const inputRef = useRef(null);
    const username = localStorage.getItem("username");
    const name = props.name
    const token = localStorage.getItem("token");
    const userUrl = localStorage.getItem("userUrl");
    let peopleLikes = props.peopleLike
    let peopleNumberLikes = peopleLikes.length
    const [comment, setCommment] = useState('');
    const [commentShow, setCommentShow] = useState(false)

    function namePeopleLike() {
        let included = false;
        for (let i=0; i < peopleLikes.length; i++){
            const trueSentence = (peopleLikes[i].username.includes(username))
            if (trueSentence === true) {
                included = true;
            }
        }

        if (peopleLikes.length === 0) {
            return "No Likes"
        }
        else if (included === false) {
            if (peopleNumberLikes === 0) return "No Likes"
            else if (peopleNumberLikes === 1) return `${peopleLikes[0].username} curtiu`
            else if (peopleNumberLikes === 2) return `${peopleLikes[0].username} e ${peopleLikes[1].username} curtiram`
            else return `${peopleLikes[0].username}, ${peopleLikes[1].username} e mais ${Number(peopleNumberLikes) - 2} curtiram`
        } else {
            if (peopleNumberLikes === 0) return "No Likes"
            else if (peopleNumberLikes === 1) return `Você curtiu`
            else if (peopleNumberLikes === 2) return `Você e ${peopleLikes[1].username} curtiram`
            else return `Você, ${peopleLikes[0].username} e mais ${Number(peopleNumberLikes) - 2}curtiram`
        }
    }

    useEffect(() => {
        checkLikes();
    }, [peopleLikes]);
  
    setInterval(checkLikes, 1000);
  
    function checkLikes() {
        let included = false;
        for (let i=0; i < peopleLikes.length; i++){
            const trueSentence = (peopleLikes[i].username.includes(username))
            if (trueSentence === true) {
                included = true;
            }
        }

        if (peopleNumberLikes === 0) {
            setFilled(false)
        }
        else if (included === true) {
            setFilled(true)
        }
        else {
            setFilled(false)
        }
    }

    function heartClick() {
        setFilled(!filled);
        fillHeart()
    }


    function fillHeart() {
        if (!loadingLike) {

        setLoadingLike(true)

        let nameOn = false;
        const postId = props.postId
        for (let i=0; i < peopleLikes.length; i++){
            const trueSentence = (peopleLikes[i].username.includes(username))
            if (trueSentence === true) {
                setIncludesName(true)
                nameOn = true;
            }
        } 

        if (peopleNumberLikes === 0 && nameOn === true) {
            axios.post(`${process.env.REACT_APP_API_URL}/likes`, { postId }, {
                headers: {
                    'Authorization': `Bearer ${props.token}`
                }
            })
                .then(response => {
                    alert("Post liked")
                    setLoadingLike(false)
                })
                .catch(error => {
                    console.log(error.response.data)
                    alert("Erro trying to like this post")
                })
        }

        if (nameOn === false) {
            axios.post(`${process.env.REACT_APP_API_URL}/likes`, { postId }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    alert("Post liked")
                    setLoadingLike(false)
                })
                .catch(error => {
                    console.log(error.response.data)
                    alert("Erro trying to like this post")
                })
        } else {
            axios.delete(`${process.env.REACT_APP_API_URL}/likes/${postId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    alert("Liked deleted")
                    setLoadingLike(false)
                })
                .catch(error => {
                    console.log(error.response.data)
                    alert("Erro trying to unlike this post")
                })
        }
        setLoadingLike(false)
    }
    window.location.reload(false)
    }

    function clickEditing() {
        setIsEditing(!isEditing)
    }

    function keyPress(e) {            
        if (e.key === 'Enter') {

            if(!disableEdit) {

                setDisableEdit(true)

            setIsEditing(false)
            const newText = inputRef.current.value
            axios.put(`${process.env.REACT_APP_API_URL}/timeline/${props.postId}`, { newText }, {
                headers: {
                    'Authorization': `Bearer ${props.token}`
                }
            })

                .then(response => {
                    setText(newText)
                    console.log(response.message)
                    setDisableEdit(false)
                })
                .catch(error => {
                    console.log(error.message)
                    alert("It wasn't able to save new change")
                    setDisableEdit(false)
                });
            }

        } else if (e.key === 'Escape') {
            setIsEditing(false)
        }
    }



    function deletePost(id) {
        console.log(id)
      setDeleted(true);
      props.setInfo(id)
      
    }
    

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    function commentChange(e){
        setCommment(e.target.value)
    }

    function sendComment(e){
        e.preventDefault()
        alert(comment)
    }

    function showComments(){
        setCommentShow(!commentShow)
    }


    return (
        <Main>
        <PostContainer data-test="post">
            <ImageLikesContainer>
                <img
                    src={props.pictureUrl}
                    alt="imagem perfil"
                />
                <HeartIcon
                    filled={filled}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={namePeopleLike()}
                    data-tooltip-place="bottom"
                    data-test="like-btn"
                    onClick={heartClick}
                    disabled={loadingLike}
                    >
                    {filled ? <IoIosHeart size={24} /> : <IoIosHeartEmpty size={24} />}
                </HeartIcon>
                <ReactToolTip id="my-tooltip" data-test="tooltip"/>
                <p data-test="counter"> {`${peopleNumberLikes} likes`}</p>

                <CommentIcon onClick={showComments} data-test="comment-btn">
                    <FaRegComment size={20}/>
                </CommentIcon>
                <p data-test="comment-counter">  {`3 comments`}</p>
                
            </ImageLikesContainer>
            <TextContainer>
                <TextTopContainer>
                    
                    <p onClick={e=> !props.userId ? <></>:navigate(`/user/${props.userId}`)} data-test="username">{props.name}</p>
                    <IconsContainer>

                    { (name===username) ? <><Hover><BsPencilSquare data-test="edit-btn" size={20} onClick={clickEditing} /></Hover>
                        <Hover ><BsFillTrashFill data-test="delete-btn" size={20} onClick={b=> deletePost(props.postId)} /></Hover></> :
                        <></>}
                        
                    </IconsContainer>
                </TextTopContainer >
                {isEditing ? (
                    <input data-test="edit-input"
                        ref={inputRef}
                        type="text"
                        defaultValue={text}
                        onKeyDown={keyPress}
                        disabled={disableEdit}
                    />
                ) : (
                    <span data-test="description" ref={textRef}>
                            {reactStringReplace(`${text}`, `#${tags}`, (match, i) => (
                            <Link to={`/hashtag/${tags}`}>{match}</Link>))}
                        </span>
                )}
                <UrlContainer onClick={e=> window.open(props.url, "_blank")}>
                    <UrlTextContainer>
                        <h2 >{props.title}</h2>
                        
                        <p >
                            {props.description}
                        </p>

                        <a data-test="link" href={props.url}>{props.url}</a>

                        

                    </UrlTextContainer>
                    <img src={props.image} alt="imagem site" />
                </UrlContainer>
            </TextContainer>
        </PostContainer>


           { commentShow ?    
        <CommentsBox data-test="comment-box">
            <CommentContainer data-test="comment">
                <img src={userUrl}></img>
                <TextComment>
                    <TextCommentTop>
                        <Author>{username}</Author>
                        <Following>• post's author</Following>
                    </TextCommentTop>
                    <Comment>
                        oloko meu
                    </Comment>
                </TextComment>
            </CommentContainer>
            <section/>

            <CommentContainer data-test="comment">
                <img src={userUrl}></img>
                <TextComment>
                    <TextCommentTop>
                        <Author>{username}</Author>
                        <Following>• post's author</Following>
                    </TextCommentTop>
                    <Comment>
                        curti esse post maluco
                    </Comment>
                </TextComment>
            </CommentContainer>
            <section/>

            <WriteComment>
            <img src={userUrl}/>
            <InputComment
                 type="text"
                 value={comment}
                 onChange={commentChange}
                 placeholder="write a comment"
                 data-test="comment-input"
            />
            <SendIcon type="button" onClick={sendComment} data-test="comment-submit">
                <BsSend />
            </SendIcon>
            </WriteComment>

        </CommentsBox> : <></>
        }  
        </Main>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 29px;
`

const CommentsBox = styled.div`
    height: 100%;
    background-color: #1E1E1E;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        border: 1px solid #353535;
        width: 100%;
    }
`

const CommentContainer = styled.div`
    height: 75px;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;

    img {
    width: 39px;
    height: 39px;
    border-radius: 26px;
    }
`

const TextComment = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const TextCommentTop = styled.div`
    display: flex;
    flex-direction: row;
`

const Comment = styled.div`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ACACAC;
`

const Author = styled.div`
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #F3F3F3;
`

const Following = styled.div`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-left: 5px;
    color: #565656;
`

const WriteComment = styled.div`
    height: 75px;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;

    img {
        width: 39px;
        height: 39px;
        border-radius: 26px;
        }

`

const InputComment = styled.input`
    background: #252525;
    border-radius: 8px;
    height: 39px;
    width: 90%;
    padding: 10px;
    border: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ACACAC;


    ::placeholder {
        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
    }
`

const SendIcon = styled.div`
    color: #F3F3F3;
    position: absolute;
    top: 40%;
    right: 6%;
    z-index: 3;
`

const PostContainer = styled.div`
  z-index: 2;
  height: 276px;
  width: 100%;
  background-color: #171717;
  border-radius: 16px;
  padding: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: -13px;
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
  height: 70%;
  width: 14%;
  justify-content: space-between;
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
  color: ${ props  => (props.filled ? "red" : "white")};
  cursor: pointer;
`;

const CommentIcon = styled.div`
    margin-top: 13px;
    color: white;
    cursor: pointer;
`

const IconsContainer = styled.div`
  color: #ffffff;
  height: 18px;
  width: 16px;
  display: flex;
  flex-direction: row;
  width:10%;
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
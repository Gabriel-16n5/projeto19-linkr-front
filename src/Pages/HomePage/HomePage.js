import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {
  Main,
  TimeLine,
  MenuLeft,
  BackgroundOpacity,
  DeletedContainer,
  NoButton,
  YesButton,
  ButtonsContainer,
  TitleContainer,
  FollowButton,
  LoadMore,
} from "./StyledHomePage";
import WhiteBox from "../components/WhiteBox";
import BlackBox from "../components/BlackBox";
import Trending from "../components/Trending";
import { TimelineContext } from "../../contexts/TimelineContext";
import { useNavigate } from "react-router";
import axios from "axios";
import styled from "styled-components";
import {TfiReload} from "react-icons/tfi"
//import Search from "../components/Search";

export default function HomePage() {
  
  const { deleted, setDeleted } = useContext(TimelineContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const [info,setInfo] = useState();
  const [hashtags, setHashtags] = useState([]);
  const [posts,setPosts] = useState();
  const [allPosts,setAllPosts] = useState();

  function noDelete() {
    setDeleted(false);
  }
  console.log(info)
  function yesDelete() {
    
      const promise = axios.delete(`${process.env.REACT_APP_API_URL}/timeline/${info}`,{ headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }});
        promise.then((ok) => {
          alert("post deletado")
        });
        promise.catch((erro) => {
         if(erro.response.status === 404){
            return alert("Delete denied");
          }
          
        });
    
    setDeleted(false);
    setLoading(true);

  }
  function searchNewPosts(){
    const promises = axios.get(`${process.env.REACT_APP_API_URL}/newPosts`);
    promises.then((res) => {
      setAllPosts(res.data)
    });
    promises.catch((erro) => {
      alert(erro.message);
    });
  }
  //setInterval(searchNewPosts, 15000);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const promise = axios.get(`${process.env.REACT_APP_API_URL}/timeline`,{
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      promise.then((res) => {
        setData(res.data);
        
      });
      promise.catch((erro) => {
        alert("Houve um erro ao publicar seu link");
      });
    }
    const promises = axios.get(`${process.env.REACT_APP_API_URL}/newPosts`);
    promises.then((res) => {
      setPosts(res.data)
      setAllPosts(res.data)
    });
    promises.catch((erro) => {
      alert(erro.message);
    });
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag`);
      promise.then((res) => {
        setHashtags(res.data);
      });
      promise.catch((erro) => {
        alert(erro.message);
      });
  }, [navigate]);
  function loadMore(){
    alert("loadMore")
  }
  return (
    <>
      {deleted ? (
        <>
          <DeletedContainer>
            <p>Are you sure you want to delete this post?</p>
            <ButtonsContainer>
              <NoButton data-test="cancel" onClick={noDelete}>No, go back</NoButton>
              <YesButton data-test="confirm" onClick={yesDelete}>Yes, delete it</YesButton>
            </ButtonsContainer>
          </DeletedContainer>

          <BackgroundOpacity />
        </>
      ) : (
        <></>
      )}
      <Main>
        <NavBar />
        <TimeLine>
          <TitleContainer>
            <h1>Timeline</h1>
            <FollowButton>Follow</FollowButton>
          </TitleContainer>
          
          <WhiteBox token={localStorage.getItem("token")} />
          {allPosts > posts ? <LoadMore onClick={loadMore}>
            <p>12 new posts, load more!</p>
            <TfiReload/>
          </LoadMore> : <></>}
          
          {data===0 ? <h4>Loading posts...</h4> : !data ? <h4 data-test="message">There are no posts yet</h4> : data.map((a, i)=> <BlackBox data-test="post" key={i} tag={a.tag} setInfo={setInfo} userId={a.userId} pictureUrl={a.pictureUrl} token={localStorage.getItem("token")} name={a.username} text={a.text} image={a.image} title={a.title} url={a.url} postId={a.postId} description={a.description} peopleLike={a.peopleLike}/>)}
          
        </TimeLine>
        <MenuLeft>
          <Trending tags={hashtags}/>
        </MenuLeft>
      </Main>
    </>
  );
}


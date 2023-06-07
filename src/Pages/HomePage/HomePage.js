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
} from "./StyledHomePage";
import WhiteBox from "../components/WhiteBox";
import BlackBox from "../components/BlackBox";
import Trending from "../components/Trending";
import { TimelineContext } from "../../contexts/TimelineContext";
import { useNavigate } from "react-router";
import axios from "axios";
//import Search from "../components/Search";

export default function HomePage() {
  
  const { deleted, setDeleted } = useContext(TimelineContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const [info,setInfo] = useState();
  const [hashtags, setHashtags] = useState([]);

  function noDelete() {
    setDeleted(false);
  }
  function yesDelete() {
    
      const promise = axios.delete(`${process.env.REACT_APP_API_URL}/timeline/${info}`,{ headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }});
        promise.then((ok) => {
          console.log("post deletado")
          window.location.reload(false)
        });
        promise.catch((erro) => {
         if(erro.response.status === 404){
            return alert("Delete denied");
          }
          
        });
    
    setDeleted(false);
    setLoading(true);

  }

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
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag`);
      promise.then((res) => {
        setHashtags(res.data);
      });
      promise.catch((erro) => {
        alert(erro.message);
      });
  }, [navigate]);
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
          {data===0 ? <h4>Loading posts...</h4> : data.length===0 ? <h4 data-test="message">There are no posts yet</h4> : data.map((a, i)=> <BlackBox key={i} tag={a.tag} setInfo={setInfo} userId={a.userId} pictureUrl={a.pictureUrl} token={localStorage.getItem("token")} name={a.username} text={a.text} image={a.image} title={a.title} url={a.url} postId={a.postId} description={a.description} peopleLike={a.peopleLike}/>)}
          
        </TimeLine>
        <MenuLeft>
          <Trending tags={hashtags}/>
        </MenuLeft>
      </Main>
    </>
  );
}

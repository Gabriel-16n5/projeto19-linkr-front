// import { useEffect } from "react";
// import NavBar from "../components/NavBar";
// import { Main, TimeLine, MenuLeft } from "./StyledHashtagPage";
// import BlackBox from "../components/BlackBox";
// import Trending from "../components/Trending";

// export default function HashtagPage() {
//   useEffect(() => {}, []);

//   return (
//     <Main>
//       <NavBar />
//       <TimeLine>
//         <h1># react</h1>
//         <BlackBox />
//         <BlackBox />
//       </TimeLine>
//       <MenuLeft>
//         <Trending />
//       </MenuLeft>
//     </Main>
//   );
// }

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
} from "./StyledHashtagPage";
import BlackBox from "../components/BlackBox";
import Trending from "../components/Trending";
import { TimelineContext } from "../../contexts/TimelineContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function UserPage() {
  const { deleted, setDeleted } = useContext(TimelineContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const [hashtags, setHashtags] = useState([]);
  const params = useParams()

  function noDelete() {
    setDeleted(false);
  }

  function yesDelete() {
    setDeleted(false);
    setLoading(true);

  }

  useEffect(() => {
    console.log(params.hashtag)
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${params.hashtag}`);
      promise.then((res) => {
        setData(res.data);
        
      });
      promise.catch((erro) => {
        alert(erro.message);
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
 console.log(data)
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
          <h1 data-test="hashtag-title">{!data[0] || data===0 ? <>Looking for hashtags</> : <># {data[0].hashtagname}</>}</h1>
          {data===0 ? <h4>Loading posts...</h4> : !data ? <></>  : data.map((a, i)=> <BlackBox key={i} pictureUrl={a.pictureUrl} token={localStorage.getItem("token")} name={a.username} text={a.text} image={a.image} title={a.title} url={a.url} postId={a.postId} description={a.description} peopleLike={a.peopleLike}/>)}
          {!data[0] && data!==0 ? <h4 data-test="message" >There are no posts yet</h4> : ""}
        </TimeLine>
        <MenuLeft>
          <Trending tags={hashtags} />
        </MenuLeft>
      </Main>
    </>
  );
}
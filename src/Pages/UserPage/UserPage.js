import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {FollowUnfollowButton, UnfollowButton} from "../HomePage/StyledHomePage"
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
} from "./StyledUserPage";
import BlackBox from "../components/BlackBox";
import Trending from "../components/Trending";
import { TimelineContext } from "../../contexts/TimelineContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
export default function UserPage() {
  const { deleted, setDeleted } = useContext(TimelineContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  const params = useParams()
  const [hashtags, setHashtags] = useState([]);
  const [numberPosts, setNumberPosts] = useState(10)
  const [follow, setFollow] = useState(true)
  const [fw, setFw] = useState(0)

  function noDelete() {
    setDeleted(false);
  }

  function yesDelete() {
    setDeleted(false);
    setLoading(true);

  }

  useEffect(() => {
    
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag`);
    promise.then((res) => {
      setHashtags(res.data);
    });
    promise.catch((erro) => {
      alert(erro.message);
    });

    const followers = axios.get(`${process.env.REACT_APP_API_URL}/followers/${localStorage.getItem("idUser")}`);
    promise.then((res) => {
      setFw(res.data);
    });
    promise.catch((erro) => {
      alert(erro.message);
    });
  }, [navigate]);


  function loadFunc(){
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const promise = axios.get(`${process.env.REACT_APP_API_URL}/user/${params.id}/${numberPosts}`);
      promise.then((res) => {
        setData(res.data);
        setNumberPosts(parseInt(numberPosts) + 10)
      });
      promise.catch((erro) => {
        alert(erro.message);
      });
    }
  }

  function clickButton() {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/followers`)
    promise.then((res) => {
      setFw(res.data);
    });
    promise.catch((erro) => {
      alert(erro.message);
    });
    setFollow(!follow)
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
            <h1>{!data[0] || data === 0 ? <>Buscando usuario</> : <>{data[0].username} posts</>}</h1>
            <>
            <FollowUnfollowButton onClick={clickButton} data-test="follow-btn">
              {follow ?
                <FollowButton>Follow</FollowButton> :
                <UnfollowButton>Unfollow</UnfollowButton>
              }
            </FollowUnfollowButton>
            </>
          </TitleContainer>
          < InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={< div className="loader" key={0} > Loading ... </div>} >
          {data === 0 ? <h4>Loading posts...</h4> : !data ? <></> : data.map((a, i) => <BlackBox key={i} tag={a.tag} pictureUrl={a.pictureUrl} token={localStorage.getItem("token")} name={a.username} text={a.text} image={a.image} title={a.title} url={a.url} postId={a.postId} description={a.description} peopleLike={a.peopleLike} />)}
          </InfiniteScroll>

          {!data[0] && data !== 0 ? <h4 data-test="message" >There are no posts yet</h4> : ""}
        </TimeLine>
        <MenuLeft>
          <Trending tags={hashtags} />
        </MenuLeft>
      </Main>
    </>
  );
}
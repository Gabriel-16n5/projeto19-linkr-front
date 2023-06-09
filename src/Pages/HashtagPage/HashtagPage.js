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
} from "./StyledHashtagPage";
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
  const [hashtags, setHashtags] = useState([]);
  const [numberPosts, setNumberPosts] = useState(10)
  const params = useParams()

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
  }, [navigate]);

  function loadFunc() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const promise = axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${params.hashtag}/${numberPosts}`);
      promise.then((res) => {
        setData(res.data);
        setNumberPosts(parseInt(numberPosts) + 10)
      });
      promise.catch((erro) => {
        alert(erro.message);
      });
    }
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
            <h1 data-test="hashtag-title">{!data[0] || data === 0 ? <>Looking for hashtags</> : <># {data[0].hashtagname}</>}</h1>
            <FollowButton>Follow</FollowButton>
          </TitleContainer>
          < InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={< div className="loader" key={0} > Loading ... </div>} >
            {data === 0 ? <h4>Loading posts...</h4> : !data ? <></> : data.map((a, i) => <BlackBox key={i} tag={a.tag} pictureUrl={a.pictureUrl} token={localStorage.getItem("token")} name={a.username} text={a.text} image={a.image} userId={a.userId} title={a.title} url={a.url} postId={a.postId} description={a.description} peopleLike={a.peopleLike} />)}
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
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Main, TimeLine, MenuLeft } from "./StyledHashtagPage";
import BlackBox from "../components/BlackBox";
import Trending from "../components/Trending";

export default function HashtagPage() {
  useEffect(() => {}, []);

  return (
    <Main>
      <NavBar />
      <TimeLine>
        <h1># react</h1>
        <BlackBox />
        <BlackBox />
      </TimeLine>
      <MenuLeft>
        <Trending />
      </MenuLeft>
    </Main>
  );
}

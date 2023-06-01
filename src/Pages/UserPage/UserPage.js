import { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Main, TimeLine, MenuLeft } from "./StyledUserPage";
import BlackBox from "../components/BlackBox";
import Trending from "../components/Trending";

export default function UserPage() {
  useEffect(() => {}, []);

  return (
    <Main>
      <NavBar />
      <TimeLine>
        <h1>username</h1>
        <BlackBox />
        <BlackBox />
      </TimeLine>
      <MenuLeft>
        <Trending />
      </MenuLeft>
    </Main>
  );
}

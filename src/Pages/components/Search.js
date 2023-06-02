import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function Search() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Search for people" />
      <span>
        <AiOutlineSearch />
      </span>
    </SearchContainer>
  );
}

const SearchContainer = styled.section`
  width: 39%;
  position: relative;
`;

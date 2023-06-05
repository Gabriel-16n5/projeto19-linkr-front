import styled from "styled-components";

export default function Trending(props) {
  

  return (
    <Main>
      <h1>trending</h1>
      <section></section>
      {props.tags.map((a, i) => (
        <p key={i}> {a.text}</p>
      ))}
    </Main>
  );
}

const Main = styled.div`
  height: 406px;
  width: 100%;
  background-color: #171717;
  border-radius: 16px;
  padding-top: 12px;
  color: #ffffff;
  @media (max-width: 600px) {
    display: none;
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 27px;
    margin-left: 16px;
  }
  section {
    width: 100%;
    height: 1px;
    background-color: #484848;
    margin-top: 12px;
    margin-bottom: 22px;
  }
  p {
    font-family: "Lato", sans-serif;
    font-size: 19px;
    font-weight: 700;
    margin-left: 16px;
    margin-bottom: 12px;
  }
`;

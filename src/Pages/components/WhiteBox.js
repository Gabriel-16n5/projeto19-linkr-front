import styled from "styled-components";

export default function WhiteBox() {
  return (
    <Main>
      <img
        src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg"
        alt=""
      />
      <TextContainer>
        <p>What are you going to share today?</p>

        <UrlInput placeholder={"http://..."}></UrlInput>

        <TextInput
          placeholder={"Awesome article about #javascript"}
        ></TextInput>

        <PublishButton>Publish</PublishButton>
      </TextContainer>
    </Main>
  );
}

const Main = styled.div`
  height: 209px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  margin-bottom: 29px;
  padding: 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 53px;
    height: 53px;
    border-radius: 26px;
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
    font-size: 20px;
    color: #707070;
  }
`;
const UrlInput = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  height: 30px;
  width: 100%;
  background: #efefef;
  color: #949494;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`;

const TextInput = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 15px;
  height: 66px;
  width: 100%;
  color: #949494;
  background: #efefef;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`;

const PublishButton = styled.button`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #ffffff;
  width: 112px;
  height: 31px;
  background: #1877f2;
  border-radius: 5px;
  margin-left: auto;
  border-radius: 5px;
  border: none;
`;

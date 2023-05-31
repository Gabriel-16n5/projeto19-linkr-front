
import styled from 'styled-components';

export default function BlackBox() {
//  usar url-metadata no back-end

return(
    <Main>
        <img src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg" alt=""/>
        <TextContainer>
            <p>Name</p>
            <span>Text</span>
            <UrlContainer>
              url infos
            </UrlContainer>


         </TextContainer>
    </Main>
)
    
}

const Main=styled.div`
    height:276px;
    width:611px;
    background-color:#171717;
    border-radius:16px;
    margin-bottom:29px;
    padding: 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img{
        width:53px;
        height:53px;
        border-radius:26px;
    }
`

const TextContainer=styled.div`
    height: 100%;
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 19px;
        color: #FFFFFF;
    }
    span {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 17px;
        color: #B7B7B7;
    }
`

const UrlContainer=styled.div`
  width: 82%;
  height: 56%;
  border: 1px solid #4D4D4D;
  border-radius: 11px;
`

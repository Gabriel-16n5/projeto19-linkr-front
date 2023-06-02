import styled from 'styled-components';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import { useState } from 'react';

export default function BlackBox() {
    const [filled, setFilled] = useState(false);

    const handleClick = () => {
        setFilled(!filled);
     };
     
//  usar url-metadata no back-end

return(
    <Main>
        <ImageLikesContainer>
            <img src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg" alt=""/>
            <HeartIcon filled={filled} onClick={handleClick}>
                {filled ? <IoIosHeart size={24} /> : <IoIosHeartEmpty size={24} />}
            </HeartIcon>
                {/* ao passar o mouse por cima <p>Ederson, Kevin e outras 39 pessoas</p> */}
                <p>39 likes</p>
        </ImageLikesContainer>
        <TextContainer>
            <p>Haalandinho Gaúcho</p>
            <span>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</span>
            <UrlContainer>
                <UrlTextContainer>
                    <h1>Como aplicar o Material UI em um projeto React</h1>
                    <p>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</p>
                    <span>https://medium.com/@pshrmn/a-simple-react-router</span>
                </UrlTextContainer>
                <img src="https://img.freepik.com/free-icon/atomic-energy_318-914621.jpg?size=626&ext=jpg&uid=R104496286&ga=GA1.2.1934028619.1685108812&semt=sph"/>
            </UrlContainer>


         </TextContainer>
    </Main>
)
    
}

const Main=styled.div`
    height:276px;
    width:100%;
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
        margin-bottom: 19px;
    }
`

const ImageLikesContainer=styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 14%;
    justify-content: start;
    align-items: center;
    P {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #FFFFFF;
    }
`

const TextContainer=styled.div`
    height: 100%;
    width: 88%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
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
    width: 88%;
    height: 56%;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    img {
        height: 100%;
        width: 30%;
        object-fit: contain;
    }
`

const UrlTextContainer=styled.div`
    width: 61%;
    height: 100%;
    font-family: 'Lato', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 0;
        color: #CECECE;
    }
    p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 11px;
        color: #9B9595;
    }
    span {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 11px;
        color: #CECECE;
    }
`

const HeartIcon = styled.div`
  color: ${({ filled }) => (filled ? 'red' : 'white')};
  cursor: pointer;
`;


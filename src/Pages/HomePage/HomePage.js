import { useEffect } from 'react';
import {BsChevronDown} from "react-icons/bs"
import BlackBox from './components/BlackBox';
import WhiteBox from './components/WhiteBox';
import Trending from './components/Trending';
import { Main,Header,TimeLine,MenuLeft } from './StyledHomePage';


export default function HomePage () {
  
    useEffect(() => {

    }, []);
  
    return (
        
        <Main>
            <Header>
                <h1>Linkr</h1>
                <div>
                    <BsChevronDown/>
                    <img src="https://conteudo.imguol.com.br/c/esporte/d0/2023/05/03/haaland-comemora-gol-marcado-durante-manchester-city-x-west-ham-pelo-campeonato-ingles-1683146420962_v2_450x600.jpg" alt=""/>
                </div>
            </Header>
            <TimeLine>
                <h1>Timeline</h1>
                <WhiteBox/>
                <BlackBox/>
                <BlackBox/>
            </TimeLine>
            <MenuLeft>
                <Trending/>
            </MenuLeft>
        </Main>
       
    );
  }

  
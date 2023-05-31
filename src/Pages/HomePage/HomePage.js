import { useEffect } from 'react';
import BlackBox from './components/BlackBox';
import WhiteBox from './components/WhiteBox';
import Trending from './components/Trending';
import NavBar from './components/NavBar';
import { Main,TimeLine,MenuLeft} from './StyledHomePage';


export default function HomePage () {
  
    useEffect(() => {

    }, []);
  
    return (
        
        <Main>
            <NavBar/>
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

  
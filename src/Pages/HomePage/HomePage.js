import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Main,TimeLine,MenuLeft} from './StyledHomePage';
import WhiteBox from '../components/WhiteBox';
import BlackBox from '../components/BlackBox';
import Trending from '../components/Trending';


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

  
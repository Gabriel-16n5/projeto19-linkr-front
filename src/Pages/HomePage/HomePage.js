import { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Main, TimeLine, MenuLeft, BackgroundOpacity, DeletedContainer, NoButton, YesButton, ButtonsContainer } from './StyledHomePage';
import WhiteBox from '../components/WhiteBox';
import BlackBox from '../components/BlackBox';
import Trending from '../components/Trending';
import { TimelineContext } from '../../contexts/TimelineContext';


export default function HomePage() {
    const { deleted, setDeleted } = useContext(TimelineContext)

    function noDelete(){
        setDeleted(false)
    }

    function yesDelete(){
        setDeleted(false)
        // deletar o post
    }

    useEffect(() => {

    }, []);


    return (
        <>  
        {deleted ? <>
            <DeletedContainer>
                <p>Are you sure you want to delete this post?</p>
                <ButtonsContainer>
                    <NoButton onClick={noDelete}>No, go back</NoButton>
                    <YesButton onClick={yesDelete}>Yes, delete it</YesButton>
                </ButtonsContainer>
            </DeletedContainer>

            <BackgroundOpacity/>
            </>
            : <></>}

            <Main>
                <NavBar />
                <TimeLine>
                    <h1>Timeline</h1>
                    <WhiteBox />
                    <BlackBox />
                    <BlackBox />
                </TimeLine>
                <MenuLeft>
                    <Trending />
                </MenuLeft>
            </Main>
        </>

    );
}


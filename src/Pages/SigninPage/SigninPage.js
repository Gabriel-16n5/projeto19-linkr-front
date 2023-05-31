import { useEffect } from 'react';
import { MainContainer, LeftContainer, RightContainer, Container, Form, Input, Button, Message } from './StyledSigninPage';
import { Link } from 'react-router-dom';

export default function SigninPage () {
  
    useEffect(() => {

    }, []);
  
        const handleSubmit = (event) => {
          event.preventDefault();
          // Lógica para fazer o login aqui!
        };

    return (
        <MainContainer>
            <LeftContainer>
                <h1>linkr</h1>
                <h3>save, share and discover the best links on the web</h3>
            </LeftContainer>
            <RightContainer>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Input type="text" placeholder="e-mail" />
                        <Input type="password" placeholder="password" />
                        <Button type="submit">Log in</Button>
                    </Form>
                    <Message>
                        <Link to="/">First time? Create an account!</Link>
                    </Message>
                </Container>
            </RightContainer>
        </MainContainer>
    );
  }
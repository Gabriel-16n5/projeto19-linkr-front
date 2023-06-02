import React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  Container,
  Form,
  Input,
  Button,
  Message,
} from "./StyledSinupPage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const [wait, setWait] = React.useState(false);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [username, setUsername] = React.useState([]);
  const [url, setUrl] = React.useState([]);
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    setWait(!wait);
    const body = {
      email: `${email}`,
      username: `${username}`,
      password: `${password}`,
      pictureUrl: `${url}`,
    };
    console.log(body);
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/signup`, body);
    promise.then((ok) => navigate("/"));
    promise.catch((erro) => {
      alert(erro.message);
      setWait(false);
      console.log(erro.message);
    });
  }

  return (
    <MainContainer>
      <LeftContainer>
        <h1>linkr</h1>
        <h3>save, share and discover the best links on the web</h3>
      </LeftContainer>
      <RightContainer>
        <Container>
          <Form onSubmit={register}>
            <Input
              type="text"
              placeholder="e-mail"
              disabled={wait}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="password"
              disabled={wait}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="username"
              disabled={wait}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="picture url"
              disabled={wait}
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <Button type="submit">Sign Up</Button>
          </Form>
          <Message>
            <Link to="/">Switch back to log in</Link>
          </Message>
        </Container>
      </RightContainer>
    </MainContainer>
  );
}

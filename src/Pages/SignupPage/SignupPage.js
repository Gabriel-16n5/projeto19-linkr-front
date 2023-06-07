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
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/signup`, body);
    promise.then((ok) => navigate("/"));
    promise.catch((erro) => {
      if(erro.response.status === 400){
        setWait(false);
        return alert("preencha todos os campos corretamente");
      } else if(erro.response.status === 409){
        setWait(false);
        return alert("Email ou usuário já cadastrado");
      }
      alert(erro.message);
      setWait(false);
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
            <Input data-test="email"
              type="text"
              placeholder="e-mail"
              disabled={wait}
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input data-test="password"
              type="password"
              placeholder="password"
              disabled={wait}
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input data-test="username"
              type="text"
              placeholder="username"
              disabled={wait}
              value={username}
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input data-test="picture-url"
              type="text"
              placeholder="picture url"
              disabled={wait}
              value={url}
              required
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <Button data-test="sign-up-btn" disabled={wait} type="submit">Sign Up</Button>
          </Form>
          <Message>
            <Link data-test="login-link" to="/">Switch back to log in</Link>
          </Message>
        </Container>
      </RightContainer>
    </MainContainer>
  );
}

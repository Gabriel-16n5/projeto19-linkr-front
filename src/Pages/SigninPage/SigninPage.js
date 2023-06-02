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
} from "./StyledSigninPage";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SigninPage() {
  const [wait, setWait] = React.useState(false);
  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);
  const [token, setToken] = React.useState([]);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setWait(!wait);
    const body = {
      email: `${email}`,
      password: `${password}`,
    };
    console.log(body);
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/signin`, body);
    promise.then((ok) => {
      setToken(ok.data.token);
      localStorage.setItem("token", ok.data.token);
      navigate("/timeline");
    });
    promise.catch((erro) => {
      if(erro.response.status === 400){
        setWait(false);
        return alert("preencha todos os campos corretamente");
      } else if(erro.response.status === 404){
        setWait(false);
        return alert("Email ou senha incorretos");
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
          <Form onSubmit={login}>
            <Input data-test="email"
              type="text"
              placeholder="e-mail"
              disabled={wait}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input data-test="password"
              type="password"
              placeholder="password"
              disabled={wait}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button data-test="login-btn" type="submit">Log in</Button>
          </Form>
          <Message>

            <Link data-test="sign-up-link" to="/sign-up">First time? Create an account!</Link>

          </Message>
        </Container>
      </RightContainer>
    </MainContainer>
  );
}
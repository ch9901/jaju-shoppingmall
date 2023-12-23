import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { setPageTitle } from "../util";

const FormContainer = styled.div`
  width: 100%;
`;

const Login = ({ setAuthenticate }) => {
  useEffect(() => {
    setPageTitle("JAJU - Login");
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setIdCheck] = useState("");
  const [password, setPwCheck] = useState("");
  const trueOk = useSelector((state) => state.auth.authenticate);

  const { pathname } = useLocation();
  const ClickToLogin = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id, password));
    setAuthenticate(trueOk);
    if (pathname.length <= 6) {
      navigate("/");
    } else {
      console.log("Login : go pathname work");
      navigate(pathname);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "1000px",
        height: "500px",
      }}
    >
      <Form onSubmit={ClickToLogin}>
        <FormContainer>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디를 입력해주세요"
              style={{ height: "60px" }}
              autoFocus
              onChange={setIdCheck}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요"
              style={{ height: "60px" }}
              onChange={setPwCheck}
              required
            />
          </Form.Group>
        </FormContainer>

        <Button
          variant="dark"
          style={{ height: "60px", width: "100%" }}
          type="submit"
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

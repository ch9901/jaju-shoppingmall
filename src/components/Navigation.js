import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 50px;
`;
export const FlexJcbAic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled(FlexJcbAic)`
  width: 100%;
  height: 160px;
  position: relative;
  border-bottom: 1px solid #ddd;
  padding: 0 100px;
`;

const HeaderInner = styled(FlexJcbAic)`
  width: ${(props) => props.width};
  img {
    cursor: pointer;
  }
`;
const InputWrap = styled(FlexJcbAic)`
  position: relative;
  img {
    position: absolute;
    right: 20px;
  }
`;
const Input = styled.input`
  margin-left: 50px;
  width: 500px;
  height: 45px;
  border: 1px solid #e1e1e1;
  border-radius: 22.5px;
  background: rgba(0, 0, 0, 0.03);
  padding: 0 30px;
  &:focus {
    outline: none;
  }
`;
const Desc = styled.span`
  font-size: 15px;
  color: ${(props) => props.color};
`;
const Icon = styled(FlexJcbAic)`
  flex-direction: column;
  cursor: pointer;
  img {
    width: 40px;
  }
  ${Desc} {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Navigation = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <Container>
      <Header as="div">
        <HeaderInner width={"45%"} as="div">
          <img
            src="https://cdn-fo.sivillage.com/fo/assets/common/image/icons/etc/ico-common-logo-jaju.svg"
            alt=""
            width={150}
            onClick={goToHome}
          />
          <InputWrap as="div">
            <Input type="text" placeholder="검색어를 입력하세요" />
            <img
              src="https://cdn-fo.sivillage.com/fo/assets/common/image/icons/20x20/ico-common-24-search-gray.svg"
              alt=""
            />
          </InputWrap>
        </HeaderInner>
        <HeaderInner width={"10%"}>
          {authenticate ? (
            <Icon onClick={() => setAuthenticate(false)}>
              <img
                src="https://cdn-fo.sivillage.com/fo/assets/jaju/image/icons/30x30/ico-common-30-my.svg"
                alt=""
              />
              <Desc color="#555">로그아웃</Desc>
            </Icon>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Icon>
                <img
                  src="https://cdn-fo.sivillage.com/fo/assets/jaju/image/icons/30x30/ico-common-30-my.svg"
                  alt=""
                />
                <Desc color="#555">로그인</Desc>
              </Icon>
            </Link>
          )}

          <Icon>
            <img
              src="https://cdn-fo.sivillage.com/fo/assets/jaju/image/icons/30x30/ico-common-30-shoppingbag.svg"
              alt=""
            />
            <Desc color="#555">쇼핑백</Desc>
          </Icon>
        </HeaderInner>
      </Header>
      <NavigationMenu />
    </Container>
  );
};

export default Navigation;

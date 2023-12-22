import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Kitchenware from "../pages/Kitchenware";

const Menu = styled.span`
  font-size: 16px;
  font-weight: 700;
  opacity: 0.6;
  cursor: pointer;
`;
const MenuActive = styled(Menu)`
  font-size: 16px;
  font-weight: 700;
  opacity: 1;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #f00;
  }
`;
const Menubar = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0 100px;
`;
const NavigationMenu = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const navMenu = ["신상품", "JAJU CLUB", "선물하기"];
  return (
    <Menubar>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        alt="btn"
        width={20}
      />
      <MenuActive as={"a"} href="/">
        전체카테고리*
      </MenuActive>
      <MenuActive as={"a"} href="/products/kitchenware">
        주방용품*
      </MenuActive>
      <MenuActive as={"a"} href="/products/fashion">
        패션잡화*
      </MenuActive>
      <MenuActive as={"a"} href="/products/snack">
        스낵*
      </MenuActive>

      {navMenu.map((menu, index) => (
        <Menu key={index}>{menu}</Menu>
      ))}
    </Menubar>
  );
};

export default NavigationMenu;

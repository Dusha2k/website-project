import React, { useState } from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", href: "/main" },
    { value: "Аниме", href: "/anime" },
    { value: "Манга", href: "/manga" },
    { value: "Случайное аниме", href: "/main" },
  ];
  return (
    <Head>
      <Container maxWidth="lg">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={2} md={2} sm={2}>
            <Logo>
              <LogoLink to="/">
                <img src={logo} alt="logo" />
              </LogoLink>
            </Logo>
          </Grid>
          <Grid item lg={8} md={8} sm={1}>
            <NavBar>
              <Wrap>
                <A to="/" className="active">
                  Главная
                </A>
              </Wrap>
              <Wrap>
                <A to="/anime">Аниме</A>
              </Wrap>
              <Wrap>
                <A to="/manga">Манга</A>
              </Wrap>
              <Wrap>
                <A to="/current">Случайное аниме</A>
              </Wrap>
            </NavBar>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Icons>
              {/*<img src={accountIcon} alt="account" />*/}
              {/*<img src={homeIcon} alt="home" />*/}
              <BurgerBtn onClick={() => setMenuActive(!menuActive)}>
                <span />
              </BurgerBtn>
            </Icons>
          </Grid>
        </Grid>
      </Container>
      <Menu
        className={menuActive ? "menu active" : "menu"}
        onClick={() => setMenuActive(!menuActive)}
      >
        <Blur>
          <MenuContent onClick={(e) => e.stopPropagation()}>
            <MenuHeader>
              <img src={logo} alt="logo" />
            </MenuHeader>
            <ul>
              {items.map((items) => (
                <li key={items.value}>
                  <a href={items.href}>{items.value}</a>
                </li>
              ))}
            </ul>
          </MenuContent>
        </Blur>
      </Menu>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  background-color: #070720;
  position: relative;
`;

const Logo = styled.div`
  padding: 20px 0;
`;

const LogoLink = styled(Link)`
  cursor: pointer;
`;

const A = styled(Link)`
  text-decoration: none;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrap = styled.div`
  margin-right: 14px;
  padding: 20px;
  @media (max-width: 968px) {
    margin-right: 0;
    padding: 15px;
  }
  A.active {
    color: white;
  }
  A {
    font-size: 17px;
    color: #b7b7b7;
    display: block;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      opacity: 1;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
  &:hover {
    A:after {
      opacity: 1;
      transform: scaleX(1);
    }
    A {
      color: white;
    }
  }
`;

const Icons = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: flex-end;

  img {
    margin-left: 30px;
    cursor: pointer;
  }
`;

const BurgerBtn = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 26px;
  position: relative;
  cursor: pointer;
  display: none;
  @media (max-width: 967px) {
    display: block;
  }

  span {
    content: "";
    position: absolute;
    top: 9px;
    width: 20px;
    background-color: white;
    height: 2px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 20px;
    background-color: white;
    height: 2px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    background-color: white;
    height: 2px;
  }
`;

const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translateX(-130%);
  z-index: 2;
  &.active {
    transform: translateX(0);
  }
`;

const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(2px);
`;

const MenuContent = styled.div`
  width: 30%;
  height: 100%;
  background-color: #070720;
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 50%;
  }
  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 20px;
      a {
        text-decoration: none;
        font-size: 1.3rem;
        color: #b7b7b7;
        display: block;
        font-weight: 700;
        position: relative;
        cursor: pointer;
        @media (max-width: 540px) {
          font-size: 1rem;
        }
      }
    }
  }
`;

const MenuHeader = styled.div`
  font-size: 2rem;
  color: white;
  margin: 35px 0 35px 0;
`;

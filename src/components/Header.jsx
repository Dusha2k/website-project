import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import logo from "../assets/img/logo.png";

import accountIcon from "../assets/icons/account.svg";
import homeIcon from "../assets/icons/home.svg";

const Header = () => {
  return (
    <Head>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={2}>
            <Logo>
              <a>
                <img src={logo} />
              </a>
            </Logo>
          </Grid>
          <Grid item lg={8}>
            <NavBar>
              <Wrap>
                <a className="active">Главная</a>
              </Wrap>
              <Wrap>
                <a>Аниме</a>
              </Wrap>
              <Wrap>
                <a>Манга</a>
              </Wrap>
              <Wrap>
                <a>Случайное аниме</a>
              </Wrap>
            </NavBar>
          </Grid>
          <Grid item lg={2}>
            <Icons>
              <img src={accountIcon} />
              <img src={homeIcon} />
            </Icons>
          </Grid>
        </Grid>
      </Container>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  background-color: #070720;
`;

const Logo = styled.div`
  padding: 20px 0;
  a {
    cursor: pointer;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  margin-right: 14px;
  padding: 20px;
  a.active {
    color: white;
  }
  a {
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
    a:after {
      opacity: 1;
      transform: scaleX(1);
    }
    a {
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

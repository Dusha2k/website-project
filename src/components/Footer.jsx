import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import logo from "../assets/img/logo.png";
import telegram from "../assets/icons/telegram.svg";
import github from "../assets/icons/github.svg";
import vk from "../assets/icons/vk.svg";
import arrow from "../assets/icons/arrow_up.svg";

const Footer = () => {
  return (
    <SectionFooter>
      <PageUp>
        <a href="#">
          <img src={arrow} />
        </a>
      </PageUp>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={3} xs={8}>
            <img src={logo} />
          </Grid>
          <Grid item lg={6}>
            <FooterNav>
              <div>
                <a>Главная</a>
              </div>
              <div>
                <a>Аниме</a>
              </div>
              <Social>
                <a>
                  <img src={telegram} />
                </a>
                <a>
                  <img src={github} />
                </a>
                <a>
                  <img src={vk} />
                </a>
              </Social>
            </FooterNav>
          </Grid>
          <Grid item lg={3} xs={8}>
            <Description>
              Copyright ©2021 <br />
              This website is made with
              <span className="material-icons-outlined i">favorite</span> <br />
              by Dusha2k The design is not mine
              <span className="material-icons-outlined i">
                sentiment_very_satisfied
              </span>
            </Description>
          </Grid>
        </Grid>
      </Container>
    </SectionFooter>
  );
};

export default Footer;

const MyGrid = styled(Grid)`
  justify-content: center;
`;

const SectionFooter = styled.section`
  background: #070720;
  padding-top: 60px;
  padding-bottom: 40px;
  position: relative;
`;
const PageUp = styled.div`
  position: absolute;
  left: 50%;
  top: -25px;
  margin-left: -25px;
  a {
    display: block;
    font-size: 36px;
    height: 50px;
    width: 50px;
    background: #e53637;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    img {
      position: relative;
      width: 40px;
      height: 40px;
      top: 5px;
      left: 0;
      filter: invert(100%) sepia(48%) saturate(0%) hue-rotate(170deg)
        brightness(106%) contrast(101%);
    }
  }
`;

const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    padding: 0 30px;
    a {
      font-size: 15px;
      color: #b7b7b7;
      display: block;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    div {
      padding: 10px 20px 0 0;
    }
  }
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-right: 25px;
    display: block;
    padding-top: 8px;
    img {
      width: 25px;
      height: 25px;
      filter: invert(80%) sepia(6%) saturate(0%) hue-rotate(196deg)
        brightness(90%) contrast(93%);
    }
  }
`;

const Description = styled.p`
  font-size: 15px;
  font-family: "Mulish", sans-serif;
  color: #3d3d3d;
  font-weight: 400;
  line-height: 25px;
  margin: 0 0 15px 0;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bleach from "../assets/img/bleach.jpg";
import naruto from "../assets/img/naruto.jpg";
import onePiece from "../assets/img/one-piece.jpg";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    fade: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swiping: true,
    // adaptiveHeight: true,
  };

  return (
    <>
      <Section>
        <Carousel {...settings}>
          <FirstBG>
            <Grid item lg={6}>
              <Wrap>
                <h2>Блич</h2>
                <p>
                  Встреча с потусторонним переворачивает жизнь японского
                  школьника Ичиго, узнав о Сообществе Душ и Пустых...
                </p>
                <A to={`/anime/details/269`}>Смотреть</A>
              </Wrap>
            </Grid>
          </FirstBG>
          <SecondBG>
            <Grid item lg={6}>
              <Wrap>
                <h2>Ван-Пис</h2>
                <p>
                  Перед своей казнью легендарный пират открыл всему миру тайное
                  место, где спрятал награбленные сокровища...
                </p>
                <A to={`/anime/details/21`}>Смотреть</A>
              </Wrap>
            </Grid>
          </SecondBG>
          <ThirdBG>
            <Grid item lg={6}>
              <Wrap>
                <h2>Наруто</h2>
                <p>
                  Это история, в которой рассказывается про мальчика-ниндзя. Он
                  мечтает стать Хокаге: главой своей деревни...
                </p>
                <A to={`/anime/details/20`}>Смотреть</A>
              </Wrap>
            </Grid>
          </ThirdBG>
        </Carousel>
      </Section>
    </>
  );
}

export default SimpleSlider;

const Section = styled.section`
  padding-top: 50px;
`;

const Carousel = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 0;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: lightgray;
      opacity: 0.5;
    }
  }

  li.slick-active button::before {
    color: white;
    opacity: 1;
  }
`;

const A = styled(Link)`
  font-size: 13px;
  background: steelblue;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 4px;
  margin-right: 1px;
  cursor: pointer;
  text-decoration: none;
`;

const FirstBG = styled.div`
  background: url(${bleach}) no-repeat top center / cover;
  padding: 250px 0 42px 50px;
  border-radius: 10px;
  overflow: hidden;
  display: block !important;
  width: unset !important;
`;
const SecondBG = styled(FirstBG)`
  background: url(${onePiece}) no-repeat top center / cover;
`;
const ThirdBG = styled(FirstBG)`
  background: url(${naruto}) no-repeat top center / cover;
`;

const Wrap = styled.div`
  div {
    font-size: 13px;
    display: inline-block;
    padding: 5px 14px 3px;
    background: white;
    color: red;
  }
  h2 {
    font-size: 42px;
    font-family: "Oswald", sans-serif;
    color: steelblue;
    font-weight: 700;
    line-height: 52px;
    margin-top: 35px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    margin-bottom: 40px;
    padding-right: 15%;
    font-weight: 700;
    color: steelblue;
  }
`;

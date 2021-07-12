import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    fade: true,
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
                <div>Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <A to="/current">Смотреть</A>
              </Wrap>
            </Grid>
          </FirstBG>
          <SecondBG>
            <Grid item lg={6}>
              <Wrap>
                <div>Adventure</div>
                <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                <p>After 30 days of travel across the world...</p>
                <A to="/current">Смотреть</A>
              </Wrap>
            </Grid>
          </SecondBG>
          <ThirdBG>
            <Grid item lg={6}>
              <Wrap>
                <div>Adventure</div>
                <h2>Ad assumenda deserunt ipsum quas Ad assumenda</h2>
                <p>
                  After 30 days of travel across the world... After 30 days of
                  travel across the world...
                </p>
                <A to="/current">Смотреть</A>
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
  background: #e53637;
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
  background: url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700076538.jpg")
    no-repeat top center / cover;
  padding: 250px 0 42px 50px;
  border-radius: 10px;
  overflow: hidden;
  display: block !important;
  width: unset !important;
`;
const SecondBG = styled(FirstBG)`
  background: url("https://cdn.wallpapersafari.com/90/6/jWRAie.jpg") no-repeat
    top center / cover;
`;
const ThirdBG = styled(FirstBG)`
  background: url("https://i.pinimg.com/originals/53/56/61/535661d28d15417ec9ca347e0a23fee1.jpg")
    no-repeat top center / cover;
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
    font-weight: 700;
    line-height: 52px;
    margin-top: 35px;
    margin-bottom: 8px;
  }
  p {
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

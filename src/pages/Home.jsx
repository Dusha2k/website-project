import React from "react";
import { Container, Grid } from "@material-ui/core";
import SimpleSlider from "../components/Carousel";
import styled from "styled-components";

import MediumCard from "../components/MediumCard";
import BigCard from "../components/BigCard";
import arrowRight from "../assets/icons/arrow_right.svg";

const i = [1123, 233, 323, 413, 5123, 6123];
const i2 = [3213, 241124, 123123, 238974, 12487, 12498, 12837];

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <SimpleSlider />
        <MainContent>
          <Grid container spacing={4}>
            <Grid item lg={8}>
              <Sections>
                <Trending>
                  <Grid container>
                    <Grid item lg={8} md={8} sm={8}>
                      <SectionTitle>
                        <LeftTitle>Аниме этого сезона</LeftTitle>
                      </SectionTitle>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      <SectionBtn>
                        <Btn href="#">Показать все</Btn>
                        <img src={arrowRight} alt="arrow" />
                      </SectionBtn>
                    </Grid>
                  </Grid>
                </Trending>
                <Grid container spacing={4}>
                  {i.map((item) => {
                    return <BigCard key={item}></BigCard>;
                  })}
                </Grid>
              </Sections>
              <Sections>
                <Trending>
                  <Grid container>
                    <Grid item lg={8} md={8} sm={8}>
                      <SectionTitle>
                        <LeftTitle>Аниме этого сезона</LeftTitle>
                      </SectionTitle>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      <SectionBtn>
                        <Btn href="#">Показать все</Btn>
                        <img src={arrowRight} alt="arrow" />
                      </SectionBtn>
                    </Grid>
                  </Grid>
                </Trending>
                <Grid container spacing={4}>
                  {i.map((item) => {
                    return <BigCard key={item}></BigCard>;
                  })}
                </Grid>
              </Sections>
              <Sections>
                <Trending>
                  <Grid container>
                    <Grid item lg={8} md={8} sm={8}>
                      <SectionTitle>
                        <LeftTitle>Аниме этого сезона</LeftTitle>
                      </SectionTitle>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4}>
                      <SectionBtn>
                        <Btn href="#">Показать все</Btn>
                        <img src={arrowRight} alt="arrow" />
                      </SectionBtn>
                    </Grid>
                  </Grid>
                </Trending>
                <Grid container spacing={4}>
                  {i.map((item) => {
                    return <BigCard key={item}></BigCard>;
                  })}
                </Grid>
              </Sections>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={8}>
              <RightSection>
                <RightTitle>Топ просмотров</RightTitle>
                <RightList>
                  <li className="active">День</li>
                  <li>Неделя</li>
                  <li>Месяц</li>
                  <li>Год</li>
                </RightList>
              </RightSection>
              {i2.map((item) => {
                return <MediumCard key={item}></MediumCard>;
              })}
            </Grid>
          </Grid>
        </MainContent>
      </Container>
    </>
  );
};

export default Home;

const Sections = styled.div`
  margin-bottom: 50px;
`;

const MainContent = styled.section`
  padding-bottom: 60px;
  padding-top: 80px;
`;

const Trending = styled.div``;

const SectionTitle = styled.div`
  margin-bottom: 30px;
`;

const LeftTitle = styled.h4`
{
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;
  font-family: "Oswald", sans-serif !important;
  font-size: 24px;
  margin-top: 0;
  &:after {
    position: absolute;
    left: 0;
    top: -6px;
    height: 32px;
    width: 4px;
    background: #e53637;
    content: "";
  }
`;

const SectionBtn = styled.div`
  text-align: right;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    margin-left: 5px;
  }
`;

const Btn = styled.a`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
`;

const RightSection = styled.div`
  position: relative;
`;
const RightTitle = styled(LeftTitle)`
  font-size: 18px;
  margin-bottom: 32px;
`;
const RightList = styled.ul`
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  .active {
    color: white;
  }
  li {
    list-style: none;
    font-size: 13px;
    color: #b7b7b7;
    display: inline-block;
    margin-right: 7px;
    cursor: pointer;
  }
`;

import React, { useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import SimpleSlider from "../components/Carousel";
import styled from "styled-components";

import MediumCard from "../components/MediumCard";
import BigTitle from "../components/BigTitle";
import BigCard from "../components/BigCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomepageAnime } from "../redux/actions/anime";
const i2 = [3213, 241124, 123123, 238974, 12487, 12498, 12837];

const Home = () => {
  const dispatch = useDispatch();
  const { items, itemsSeason, itemsNew } = useSelector(
    ({ homepageAnimeReducer }) => homepageAnimeReducer
  );
  console.log(items);

  useEffect(() => {
    dispatch(fetchHomepageAnime());
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <SimpleSlider />
        <MainContent>
          <Grid container spacing={4}>
            <Grid item lg={8}>
              <Sections>
                <BigTitle title={"Популярное"} />
                <Grid container spacing={4}>
                  {items.map((item) => {
                    return <BigCard {...item} key={item.id} />;
                  })}
                </Grid>
              </Sections>
              <Sections>
                <BigTitle title={"Популярное"} />
                <Grid container spacing={4}>
                  {itemsSeason.map((item) => {
                    return <BigCard {...item} key={item.id} />;
                  })}
                </Grid>
              </Sections>
              <Sections>
                <BigTitle title={"Популярное"} />
                <Grid container spacing={4}>
                  {itemsNew.map((item) => {
                    return <BigCard {...item} key={item.id} />;
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
                return <MediumCard key={item} />;
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

const RightSection = styled.div`
  position: relative;
`;
const RightTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 32px;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;
  font-family: "Oswald", sans-serif !important;
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

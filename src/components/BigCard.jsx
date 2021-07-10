import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import imgBG from "../assets/img/trending/trend-1.jpg";

const BigCard = () => {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <Card>
        <CardBG>
          <Episode>182 / 182</Episode>
          <Rating>
            <span className="material-icons-outlined i">star</span>
            9.17
          </Rating>
          <View>
            <span className="material-icons-outlined i">visibility</span>
            138057
          </View>
        </CardBG>
        <Description>
          <GenresList>
            <li>Экшен</li>
            <li>Фильм</li>
            <li>Сёнен</li>
          </GenresList>
          <h5>
            <a>Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien</a>
          </h5>
        </Description>
      </Card>
    </Grid>
  );
};

export default BigCard;

const Card = styled.div`
  margin-bottom: 30px;
`;

const CardBG = styled.div`
  height: 325px;
  position: relative;
  border-radius: 5px;
  background-image: url(${imgBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
`;

const Episode = styled.div`
  font-size: 13px;
  background: #e53637;
  display: inline-block;
  padding: 2px 12px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  top: 10px;
`;

const View = styled.div`
  font-size: 13px;
  background: #3d3d3d;
  display: flex;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: center;
  align-items: center;
  span {
    display: block;
    margin-right: 4px;
  }
`;

const Rating = styled(View)`
  right: unset;
  left: 10px;
  bottom: 10px;
`;

const Description = styled.div`
  padding-top: 20px;
  h5 {
    font-size: 18px;
    margin: 0;
    a {
      font-weight: 700;
      line-height: 26px;
    }
  }
`;

const GenresList = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  li {
    list-style: none;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.5;
    padding: 1px 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    display: inline-block;
    margin-right: 5px;
  }
`;

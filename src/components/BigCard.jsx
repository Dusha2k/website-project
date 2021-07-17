import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  fetchDetailsAnime,
  getDetailsAnime,
} from "../redux/actions/animeDetails";
import { useDispatch } from "react-redux";

const BigCard = ({ episodes, russian, episodes_aired, score, image, id }) => {
  const dispatch = useDispatch();

  const animeEpisodes = () => {
    if (episodes === 0) {
      return `${episodes_aired} / ?`;
    } else if (episodes_aired === 0) {
      return `${episodes} / ${episodes}`;
    } else {
      return `${episodes_aired} / ${episodes}`;
    }
  };
  const url = `/anime/details/${id}`;

  return (
    <Grid item lg={4} md={4} sm={6} xs={12}>
      <Card>
        <CardBG url={image.original}>
          <Episode>{animeEpisodes()}</Episode>
          <Rating>
            <span className="material-icons-outlined i">star</span>
            {score}
          </Rating>
          {/*<View>*/}
          {/*  <span className="material-icons-outlined i">visibility</span>*/}
          {/*  138057*/}
          {/*</View>*/}
        </CardBG>
        <Description>
          <h5>
            <A to={url} onClick={() => dispatch(fetchDetailsAnime(id))}>
              {russian}
            </A>
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
  background: url("https://shikimori.one/${(props) => props.url}") no-repeat top
    center / cover;
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
    Link {
    }
  }
`;

const A = styled(Link)`
  font-weight: 700;
  line-height: 26px;
  text-decoration: none;
`;
// const GenresList = styled.ul`
//   margin: 0;
//   padding: 0;
//   margin-bottom: 10px;
//   li {
//     list-style: none;
//     font-size: 11px;
//     font-weight: 700;
//     line-height: 1.5;
//     padding: 1px 10px;
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 50px;
//     display: inline-block;
//     margin-right: 5px;
//   }
// `;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MdCard = ({ episodes, episodes_aired, score, image, russian, id }) => {
  const animeEpisodes = () => {
    if (episodes === 0) {
      return `${episodes_aired} / ?`;
    } else if (episodes_aired === 0) {
      return `${episodes} / ${episodes}`;
    } else {
      return `${episodes_aired} / ${episodes}`;
    }
  };
  return (
    <>
      <Wrap image={image.original}>
        <Episode>{animeEpisodes()}</Episode>
        <Rank>
          <span className="material-icons-outlined i">star</span> {score}
        </Rank>
        <h5>
          <A to={`/anime/details/${id}`}>{russian}</A>
        </h5>
      </Wrap>
    </>
  );
};

export default MdCard;

const Wrap = styled.div`
  height: 190px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 20px;
  background: url("https://shikimori.one${(props) => props.image}") no-repeat
    center / cover;
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: background 0.5s;
    background: rgba(0, 0, 0, 0.2);
  }

  h5 {
    position: absolute;
    left: 0;
    bottom: 25px;
    width: 100%;
    padding: 0 30px 0 20px;
    margin: 0;
    font-size: 18px;
  }
`;

const A = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
  text-decoration: none;
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

const Rank = styled.div`
  font-size: 13px;
  background: #3d3d3d;
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  top: 10px;
  span {
    margin-right: 2px;
  }
`;

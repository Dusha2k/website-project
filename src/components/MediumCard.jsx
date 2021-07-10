import React from "react";
import styled from "styled-components";
import imgBG from "../assets/img/sidebar/tv-2.jpg";

const MdCard = () => {
  return (
    <>
      <Wrap>
        <Episode>182 / ?</Episode>
        <View>
          <span className="material-icons-outlined i">visibility</span> 109832
        </View>
        <h5>
          <a>The Seven Deadly Sins: Wrath of the Gods</a>
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
  background: url(${imgBG}) no-repeat top center / cover;

  h5 {
    position: absolute;
    left: 0;
    bottom: 25px;
    width: 100%;
    padding: 0 30px 0 20px;
    margin: 0;
    font-size: 18px;
    a {
      color: #ffffff;
      font-weight: 700;
      line-height: 26px;
    }
  }
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

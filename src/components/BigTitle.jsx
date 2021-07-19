import React from "react";
import { Grid } from "@material-ui/core";
import arrowRight from "../assets/icons/arrow_right.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BigTitle = ({ title }) => {
  return (
    <Trending>
      <Grid container>
        <Grid item lg={8} md={8} sm={8}>
          <SectionTitle>
            <LeftTitle>{title}</LeftTitle>
          </SectionTitle>
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <SectionBtn>
            <Btn to="/anime">Показать все</Btn>
            <img src={arrowRight} alt="arrow" />
          </SectionBtn>
        </Grid>
      </Grid>
    </Trending>
  );
};

export default BigTitle;

const Trending = styled.div``;

const SectionTitle = styled.div`
  margin-bottom: 30px;
`;

const LeftTitle = styled.h4`

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

const Btn = styled(Link)`
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
`;

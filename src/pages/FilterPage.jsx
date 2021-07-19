import React, { useEffect } from "react";
import styled from "styled-components";
import AnimeFilter from "../components/filter/AnimeFilter";
import { Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetAnimeList } from "../redux/actions/anime";
import BigCard from "../components/BigCard";
import { useLocation } from "react-router-dom";

const FilterPage = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const { itemsList } = useSelector(
    ({ homepageAnimeReducer }) => homepageAnimeReducer
  );

  if (itemsList.length === 0) {
    dispatch(fetchSetAnimeList());
  }

  return (
    <SectionSearch>
      <Container maxWidth="lg">
        <MyGrid container spacing-sm={10} spacing-xs={0}>
          <Grid item sm={12} lg={8}>
            <SectionTitle>
              <Title>Список аниме</Title>
            </SectionTitle>
            <Grid container spacing={4}>
              {itemsList.map((item) => {
                return <BigCard {...item} key={item.id} />;
              })}
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <AnimeFilter />
          </Grid>
        </MyGrid>
      </Container>
    </SectionSearch>
  );
};

export default FilterPage;

const MyGrid = styled(Grid)`
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SectionSearch = styled.section`
  margin: 50px 0 50px 0;
`;
const SectionTitle = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.h4`
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

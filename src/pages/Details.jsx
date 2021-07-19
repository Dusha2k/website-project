import React, { useEffect } from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  fetchDetailsAnime,
  setDetailsAnime,
} from "../redux/actions/animeDetails";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { details } = useSelector(
    ({ detailsAnimeReducer }) => detailsAnimeReducer
  );

  const currentYoutubeVideo = details.videos?.map((item) => item.player_url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchDetailsAnime(id));
    }
    return () => {
      dispatch(setDetailsAnime({}));
    };
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Container>
        <CurrentSection>
          <Grid container spacing={5}>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <CurrentImg>
                <img
                  src={`https://shikimori.one/${details.image?.original}`}
                  alt={"bg"}
                />
              </CurrentImg>
            </Grid>
            <Grid item lg={9} md={9} sm={8}>
              <AnimeDetails>
                <Title>
                  <h3>{details.russian}</h3>
                </Title>
                <p>
                  {/* eslint-disable-next-line*/}
                  {details.description?.replace(/\[(?!\d+\])[^\[\]]+\]/g, "")}
                </p>
                <Widget>
                  <Grid container spacing={4}>
                    <Grid item lg={6}>
                      <List>
                        <li>
                          <span>Тип:</span>
                          {details.kind?.toUpperCase()}
                        </li>
                        <li>
                          <span>
                            {details.status === "released"
                              ? "Дата выхода:"
                              : "Выпускается с"}
                          </span>
                          {details.released_on
                            ? details.released_on
                            : details.aired_on}
                        </li>
                        <li>
                          <span>Статус: </span>
                          {details.status === "released" ? "Вышло" : "Онгоинг"}
                        </li>
                        <li>
                          <span>Жанры: </span>
                          {details.genres?.map((item, index) =>
                            index === details.genres?.length - 1
                              ? item.russian
                              : item.russian + ","
                          )}
                        </li>
                      </List>
                    </Grid>
                    <Grid item lg={6}>
                      <List>
                        <li>
                          <span>Просмотров: </span>
                          {details.rates_statuses_stats?.map((item, index) =>
                            index === 1 ? item.value : ""
                          )}
                        </li>
                        <li>
                          <span>Оценка: </span>
                          {details.score}
                        </li>
                        <li>
                          <span>Длительность: </span>
                          {details.duration} мин.
                        </li>
                        <li>
                          <span>Рейтинг: </span>
                          {details.rating?.toUpperCase()}
                        </li>
                      </List>
                    </Grid>
                  </Grid>
                </Widget>
              </AnimeDetails>
            </Grid>
            {!currentYoutubeVideo?.length ? (
              ""
            ) : (
              <Grid className="youtube" item lg={12}>
                <iframe
                  title="video"
                  src={currentYoutubeVideo ? currentYoutubeVideo[0] : ""}
                />
              </Grid>
            )}
          </Grid>
        </CurrentSection>
      </Container>
    </>
  );
};

export default Details;

const CurrentSection = styled.section`
  padding: 60px 0 100px;
  min-height: calc(100vh - 400px);
  .youtube {
    width: 100%;
    height: 500px;
    margin-top: 20px;
  }
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;
    border: unset;
  }
`;
const CurrentImg = styled.div`
  height: 440px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AnimeDetails = styled.div`
  p {
    color: #b7b7b7;
    font-size: 18px;
    line-height: 30px;
  }
`;
const Title = styled.div`
  h3 {
    font-weight: 700;
    font-size: 30px;
    margin: 0;
  }
  margin-bottom: 20px;
`;
const Widget = styled.div``;
const List = styled.ul`
  padding: 0;
  li {
    list-style: none;
    font-size: 15px;
    line-height: 30px;
    position: relative;
    padding-left: 18px;
    word-break: break-all;
    &:before {
      position: absolute;
      left: 0;
      top: 12px;
      height: 6px;
      width: 6px;
      background: #b7b7b7;
      content: "";
    }
    span {
      color: #b7b7b7;
      width: 115px;
      display: inline-block;
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { fetchSetAnimeList } from "../../redux/actions/anime";
import { useDispatch } from "react-redux";
import {
  types,
  sortBy,
  season,
  status,
  rating,
  condition,
} from "./filterConsts";

const AnimeFilter = () => {
  const initialState = {
    rating: "",
    status: "",
    duration: "",
    season: "",
    kind: "",
    order: "",
  };
  const [typesFilter, setTypesFilter] = useState(initialState);
  let url = "https://shikimori.one/api/animes?limit=20";
  const dispatch = useDispatch();

  const unCheckAllInputs = () => {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
      if (x[i].checked) {
        x[i].checked = false;
      }
    }
  };

  const createFullUrl = async () => {
    const { rating, status, duration, season, kind, order } = {
      ...typesFilter,
    };
    url =
      url +
      `${rating ? "&rating=" + rating : ""}${
        status ? "&status=" + status : ""
      }${duration ? "&duration=" + duration : ""}${
        season ? "&season=" + season : ""
      }${kind ? "&kind=" + kind : ""}${order ? "&order=" + order : ""}`;
    dispatch(fetchSetAnimeList(url));
    console.log(url);
    unCheckAllInputs();
    setTypesFilter(initialState);
  };

  const handleChange = (event, type) => {
    event.target.checked
      ? trueCheckedInput(event.target.value, type)
      : falseCheckedInput(event.target.value, type);
  };

  const trueCheckedInput = (value, whichType) => {
    switch (whichType) {
      case "rating": {
        setTypesFilter({
          ...typesFilter,
          rating: `${typesFilter.rating}${value},`,
        });
        break;
      }
      case "status": {
        setTypesFilter({
          ...typesFilter,
          status: `${typesFilter.status}${value},`,
        });
        break;
      }
      case "duration": {
        setTypesFilter({
          ...typesFilter,
          duration: `${typesFilter.duration}${value},`,
        });
        break;
      }
      case "season": {
        setTypesFilter({
          ...typesFilter,
          season: `${typesFilter.season}${value},`,
        });
        break;
      }
      case "kind": {
        setTypesFilter({
          ...typesFilter,
          kind: `${typesFilter.kind}${value},`,
        });
        break;
      }
      case "order": {
        setTypesFilter({ ...typesFilter, order: value });
        break;
      }

      default: {
        return;
      }
    }
  };

  const falseCheckedInput = (value, whichType) => {
    switch (whichType) {
      case "rating": {
        setTypesFilter({
          ...typesFilter,
          rating: typesFilter.rating.replace(`${value},`, ""),
        });
        break;
      }
      case "status": {
        setTypesFilter({
          ...typesFilter,
          status: typesFilter.status.replace(`${value},`, ""),
        });
        break;
      }
      case "duration": {
        setTypesFilter({
          ...typesFilter,
          duration: typesFilter.duration.replace(`${value},`, ""),
        });
        break;
      }
      case "season": {
        setTypesFilter({
          ...typesFilter,
          season: typesFilter.season.replace(`${value},`, ""),
        });
        break;
      }
      case "kind": {
        setTypesFilter({
          ...typesFilter,
          kind: typesFilter.kind.replace(`${value},`, ""),
        });
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <>
      <FilterSection>
        <Status>
          <Title> СТАТУС </Title>
          <ul>
            {status.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      value={value}
                      type="checkbox"
                      onChange={(e) => handleChange(e, "status")}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Status>
        <Status>
          <Title> ТИП </Title>
          <ul>
            {types.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      value={value}
                      type="checkbox"
                      onChange={(e) => handleChange(e, "kind")}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Status>
        <Sort>
          <Title> Сортировка </Title>
          <ul>
            {sortBy.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      type="radio"
                      name="vote"
                      value={value}
                      onChange={(e) => handleChange(e, "order")}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Sort>
        <Season>
          <Title> Сезон </Title>
          <ul>
            {season.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      value={value}
                      type="checkbox"
                      onChange={(e) => handleChange(e, "season")}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Season>
        <Episode>
          <Title> ЭПИЗОД </Title>
          <ul>
            {condition.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      value={value}
                      type="checkbox"
                      onChange={(e) => handleChange(e, "duration")}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Episode>
        <Rating>
          <Title> Рейтинг </Title>
          <ul>
            {rating.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      value={value}
                      type="checkbox"
                      onChange={(e) => handleChange(e, "rating")}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Rating>
        <button onClick={createFullUrl}>Отфильтровать</button>
      </FilterSection>
    </>
  );
};

export default AnimeFilter;

const FilterSection = styled.div`
  padding-left: 30px;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding-left: 10px;
    font-size: 15px;
    color: lavender;
    display: flex;
    font-weight: 700;
    position: relative;
    align-items: center;
    margin-bottom: 5px;
    label {
      cursor: pointer;
    }
    input {
      background-color: white;
      margin-right: 10px;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid #ddd;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
      width: 15px;
      height: 15px;
      transition: all 1s;
      &:checked {
        background-color: darkcyan;
      }
    }
  }
`;

const Title = styled.h4`
  margin: 0;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 15px;
  position: relative;
  font-family: "Oswald", sans-serif !important;
  font-size: 18px;
  &:after {
    position: absolute;
    left: 0;
    top: -6px;
    height: 32px;
    width: 4px;
    background: #e53637;
    content: "";

`;
const Status = styled.div``;
const Episode = styled.div``;
const Season = styled.div``;
const Rating = styled.div``;
const Sort = styled.div``;

import React, { useState } from "react";
import styled from "styled-components";

const Filter = () => {
  const rating = [
    { value: "g", name: "G" },
    { value: "pg", name: "PG" },
    { value: "pg_13", name: "PG-13" },
    { value: "r", name: "R-17" },
    { value: "r_plus", name: "R+" },
    { value: "rx", name: "Rx" },
  ];

  const status = [
    { value: "anons", name: "Анонсировано" },
    { value: "ongoing", name: "Сейчас выходят" },
    { value: "released", name: "Вышедшее" },
  ];

  const duration = [
    { value: "S", name: "Анонсировано" },
    { value: "D", name: "Сейчас выходят" },
    { value: "F", name: "Вышедшее" },
  ];

  const season = [
    { value: "autumn_2021", name: "Осень 2021" },
    { value: "summer_2021", name: "Лето 2021" },
    { value: "spring_2021", name: "Весна 2021" },
    { value: "winter_2021", name: "Зима 2021" },
    { value: "2021", name: "2021 год" },
    { value: "2020", name: "2020 год" },
    { value: "2018_2019", name: "2018-2019" },
    { value: "2013_2017", name: "2013-2017" },
    { value: "2000_2012", name: "2000-2012" },
    { value: "1990_2000", name: "1990е года" },
    { value: "1980_1990", name: "1980е года" },
    { value: "1000_1980", name: "Более старые" },
  ];

  const type = [
    { value: "tv", name: "TV Сериал" },
    { value: "tv_13", name: "Корототкие" },
    { value: "tv_24", name: "Средние" },
    { value: "tv_48", name: "Длинные" },
    { value: "movie", name: "Фильм" },
    { value: "ova", name: "OVA" },
    { value: "ona", name: "ONA" },
    { value: "special", name: "Спешл" },
  ];

  const [url, setUrl] = useState({ rating: "" });

  const trueChecked = (value) => {
    setUrl({ ...url, rating: `${url.rating}${value},` });
  };

  const falseChecked = (value) => {
    setUrl({ ...url, rating: url.rating.replace(`${value},`, "") });
  };

  const handleChange = (event) => {
    event.target.checked
      ? trueChecked(event.target.value)
      : falseChecked(event.target.value);
  };
  console.log(url.rating);

  return (
    <>
      <FilterSection>
        <Status>
          <Title> СТАТУС</Title>
          <ul>
            {status.map(({ value, name }) => {
              return (
                <li key={value}>
                  <label>
                    <input
                      value={value}
                      type="checkbox"
                      onChange={handleChange}
                    />
                    {name}
                  </label>
                </li>
              );
            })}
          </ul>
        </Status>
        <Status>
          <Title> ТИП</Title>
          <ul>
            {type.map(({ value, name }) => {
              return (
                <li key={value}>
                  <input
                    value={value}
                    type="checkbox"
                    onChange={handleChange}
                  />
                  {name}
                </li>
              );
            })}
          </ul>
        </Status>
        {/*ЗДЕСЬ ДОЛЖНА БЫТЬ СОРТИРОВКА *****************/}
        <Season>
          <Title> Сезон</Title>
          <ul>
            {season.map(({ value, name }) => {
              return (
                <li key={value}>
                  <input
                    value={value}
                    type="checkbox"
                    onChange={handleChange}
                  />
                  {name}
                </li>
              );
            })}
          </ul>
        </Season>
        <Episode>
          <Title> ЭПИЗОД</Title>
          <ul>
            {duration.map(({ value, name }) => {
              return (
                <li key={value}>
                  <input
                    value={value}
                    type="checkbox"
                    onChange={handleChange}
                  />
                  {name}
                </li>
              );
            })}
          </ul>
        </Episode>
        <Rating>
          <Title> Рейтинг</Title>
          <ul>
            {rating.map(({ value, name }) => {
              return (
                <li key={value}>
                  <input
                    value={value}
                    type="checkbox"
                    onChange={handleChange}
                  />
                  {name}
                </li>
              );
            })}
          </ul>
        </Rating>
        <div>Отправить</div>
      </FilterSection>
    </>
  );
};

export default Filter;

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
    cursor: pointer;
    align-items: center;
    margin-bottom: 5px;
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

import { Container, Grid, TextField } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/img/logo.png";
import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { setRandomAnime } from "../redux/actions/animeDetails";
import { useDispatch, useSelector } from "react-redux";
import { setAnimeList } from "../redux/actions/anime";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [activeClass, setActiveClass] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const { randomAnime } = useSelector(
    ({ detailsAnimeReducer }) => detailsAnimeReducer
  );

  const setActive = (index) => {
    setActiveClass(index);
  };
  const getActive = (index) => {
    return index === activeClass ? "active" : "";
  };
  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };
  useEffect(() => {
    if (Object.keys(randomAnime).length !== 0) {
      history.push(`/anime/details/${randomAnime.id}`);
    }
  }, [randomAnime]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchRandomAnime = () => {
    setActive(2);
    axios
      .get("https://shikimori.one/api/animes?order=random")
      .then(({ data }) => dispatch(setRandomAnime(data[0])));
  };

  const fetchSearchAnime = (e) => {
    setActive(1);
    e.preventDefault();
    axios
      .get(`https://shikimori.one/api/animes?limit=15&search=${inputSearch}`)
      .then(({ data }) => dispatch(setAnimeList(data)))
      .then(history.push("/anime"))
      .then(setInputSearch(""));
  };

  return (
    <Head>
      <Container maxWidth="lg">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={2} md={2} sm={2}>
            <Logo>
              <LogoLink to="/" onClick={() => setActive(0)}>
                <img src={logo} alt="logo" />
              </LogoLink>
            </Logo>
          </Grid>
          <Grid item lg={7} md={7} sm={1}>
            <NavBar>
              <Wrap>
                <A to="/" className={getActive(0)} onClick={() => setActive(0)}>
                  Главная
                </A>
              </Wrap>
              <Wrap>
                <A
                  to="/anime"
                  className={getActive(1)}
                  onClick={() => setActive(1)}
                >
                  Аниме
                </A>
              </Wrap>
              <Wrap>
                <RandomButton
                  onClick={fetchRandomAnime}
                  className={getActive(2)}
                >
                  Случайное аниме
                </RandomButton>
              </Wrap>
            </NavBar>
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={7}>
            <Icons>
              <div>
                <form onSubmit={fetchSearchAnime}>
                  <InputText
                    id="standard-search"
                    label="Поиск аниме"
                    type="search"
                    value={inputSearch}
                    onChange={handleChange}
                  />
                </form>
              </div>
              <BurgerBtn onClick={() => setMenuActive(!menuActive)}>
                <span />
              </BurgerBtn>
            </Icons>
          </Grid>
        </Grid>
      </Container>
      <Menu
        className={menuActive ? "menu active" : "menu"}
        onClick={() => setMenuActive(!menuActive)}
      >
        <Blur>
          <MenuContent onClick={(e) => e.stopPropagation()}>
            <MenuHeader>
              <img src={logo} alt="logo" />
            </MenuHeader>
            <ul>
              <li>
                <BurgerLink to="/">Главная</BurgerLink>
              </li>
              <li>
                <BurgerLink to="/anime">Аниме</BurgerLink>
              </li>
              <li>
                <BurgerRndLink onClick={fetchRandomAnime}>
                  Случайное аниме
                </BurgerRndLink>
              </li>
            </ul>
          </MenuContent>
        </Blur>
      </Menu>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  background-color: #070720;
  position: relative;
`;

const Logo = styled.div`
  padding: 20px 0;
`;

const LogoLink = styled(Link)`
  cursor: pointer;
`;

const A = styled(Link)`
  text-decoration: none;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrap = styled.div`
  margin-right: 14px;
  padding: 20px;
  @media (max-width: 968px) {
    margin-right: 0;
    padding: 15px;
  }
  A.active,
  p.active {
    color: white;
  }
  A,
  p {
    font-size: 17px;
    color: #b7b7b7;
    display: block;
    font-weight: 700;
    position: relative;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      opacity: 1;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
  &:hover {
    A:after,
    p:after {
      opacity: 1;
      transform: scaleX(1);
    }
    A,
    p {
      color: white;
    }
  }
`;

const RandomButton = styled.p`
  margin: 0;
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    margin-left: 30px;
    cursor: pointer;
  }
`;

const BurgerBtn = styled.div`
  width: 20px;
  height: 20px;
  margin: 20px 26px 0 20px;
  position: relative;
  cursor: pointer;
  display: none;
  @media (max-width: 967px) {
    display: block;
  }

  span {
    content: "";
    position: absolute;
    top: 9px;
    width: 20px;
    background-color: white;
    height: 2px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 20px;
    background-color: white;
    height: 2px;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    background-color: white;
    height: 2px;
  }
`;

const Menu = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translateX(-130%);
  z-index: 2;
  &.active {
    transform: translateX(0);
  }
`;

const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(2px);
`;

const MenuContent = styled.div`
  width: 30%;
  height: 100%;
  background-color: #070720;
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 50%;
  }
  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 20px;
    }
  }
`;

const BurgerLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: #b7b7b7;
  display: block;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  @media (max-width: 540px) {
    font-size: 1rem;
  }
`;

const BurgerRndLink = styled.div`
  text-decoration: none;
  font-size: 1.3rem;
  color: #b7b7b7;
  display: block;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  @media (max-width: 540px) {
    font-size: 1rem;
  }
`;

const MenuHeader = styled.div`
  font-size: 2rem;
  color: white;
  margin: 35px 0 35px 0;
`;

const InputText = styled(TextField)`
  color: white;
  label {
    color: white;
  }
  input {
    color: white;
  }
  .MuiInput-underline:before {
    border-bottom-color: white;
  }
`;

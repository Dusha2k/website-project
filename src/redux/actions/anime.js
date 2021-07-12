import axios from "axios";

export const setHomepageAnime = (items, items1, items2) => ({
  type: "SET_ANIME",
  first: items,
  second: items1,
  third: items2,
});

export const setRightSideAnime = (items) => ({
  type: "SET_ANIME_RIGHT_SIDE",
  payload: items,
});

export const fetchHomepageAnime = () => (dispatch) => {
  const popularAnime = axios.get(
    `https://shikimori.one/api/animes?limit=6&order=popularity`
  );
  const thisSeasonAnime = axios.get(
    `https://shikimori.one/api/animes?limit=6&season=summer_2021&order=popularity`
  );
  const newAnime = axios.get(
    `https://shikimori.one/api/animes?limit=6&status=ongoing&order=popularity`
  );
  axios.all([popularAnime, thisSeasonAnime, newAnime]).then(
    axios.spread((...allData) => {
      dispatch(
        setHomepageAnime(allData[0].data, allData[1].data, allData[2].data)
      );
    })
  );
};

export const fetchRightSideAnime = () => (dispatch) => {
  axios
    .get("https://shikimori.one/api/animes?limit=7&order=ranked")
    .then(({ data }) => dispatch(setRightSideAnime(data)));
};

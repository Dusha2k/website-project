import axios from "axios";

export const setDetailsAnime = (items) => ({
  type: "SET_DETAILS_ANIME",
  payload: items,
});

export const setRandomAnime = (items) => ({
  type: "SET_RANDOM_ANIME",
  payload: items,
});

export const fetchDetailsAnime =
  (id = "5114") =>
  (dispatch) => {
    axios
      .get(`https://shikimori.one/api/animes/${id}`)
      .then(({ data }) => dispatch(setDetailsAnime(data)));
  };

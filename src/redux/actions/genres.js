import axios from "axios";

export const getCurrentGenres = (items) => ({
  type: "GET_CURRENT_GENRES",
  payload: items,
});

export const fetchCurrentGenres = (id) => (dispatch) => {
  axios
    .get(`https://shikimori.one/api/animes/${id}`)
    .then(({ data }) => dispatch(getCurrentGenres(data)));
};

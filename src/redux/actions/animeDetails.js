import axios from "axios";

export const getDetailsAnime = (items) => ({
  type: "GET_DETAILS_ANIME",
  payload: items,
});

export const fetchDetailsAnime =
  (id = "5114") =>
  (dispatch) => {
    axios
      .get(`https://shikimori.one/api/animes/${id}`)
      .then(({ data }) => dispatch(getDetailsAnime(data)));
  };

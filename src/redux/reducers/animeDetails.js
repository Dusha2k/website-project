const initialState = {
  details: {},
  randomAnime: {},
};

const detailsAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DETAILS_ANIME":
      return {
        ...state,
        details: action.payload,
      };

    case "SET_RANDOM_ANIME": {
      return {
        ...state,
        randomAnime: action.payload,
      };
    }

    default:
      return state;
  }
};

export default detailsAnimeReducer;

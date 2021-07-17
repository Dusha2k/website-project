const initialState = {
  details: {},
};

const detailsAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAILS_ANIME":
      return {
        details: action.payload,
      };

    default:
      return state;
  }
};

export default detailsAnimeReducer;

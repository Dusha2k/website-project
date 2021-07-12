const initialState = {
  genres: [],
};

const getCurrentGenres = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENT_GENRES":
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};

export default getCurrentGenres;

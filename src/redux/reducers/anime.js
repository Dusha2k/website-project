const initialState = {
  items: [],
  itemsSeason: [],
  itemsNew: [],
  itemsRightSide: [],
  isLoaded: false,
};

const homepageAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME":
      return {
        ...state,
        items: action.first,
        itemsSeason: action.second,
        itemsNew: action.third,
      };

    case "SET_ANIME_RIGHT_SIDE":
      return {
        ...state,
        itemsRightSide: action.payload,
      };
    default:
      return state;
  }
};

export default homepageAnimeReducer;

const initialState = {
  items: [],
  itemsSeason: [],
  itemsNew: [],
  isLoaded: false,
};

const homepageAnimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME":
      console.log(action.first);
      return {
        ...state,
        items: action.first,
        itemsSeason: action.second,
        itemsNew: action.third,
      };
    default:
      return state;
  }
};

export default homepageAnimeReducer;

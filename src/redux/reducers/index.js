import { combineReducers } from "redux";
import homepageAnimeReducer from "./anime";
import detailsAnimeReducer from "./animeDetails";

const rootReducer = combineReducers({
  homepageAnimeReducer,
  detailsAnimeReducer,
});

export default rootReducer;

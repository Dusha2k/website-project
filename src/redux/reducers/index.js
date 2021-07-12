import { combineReducers } from "redux";
import homepageAnimeReducer from "./anime";
import getCurrentGenres from "./genres";

const rootReducer = combineReducers({
  homepageAnimeReducer,
  getCurrentGenres,
});

export default rootReducer;

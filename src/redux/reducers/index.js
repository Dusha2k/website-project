import { combineReducers } from "redux";
import homepageAnimeReducer from "./anime";

const rootReducer = combineReducers({
  homepageAnimeReducer,
});

export default rootReducer;

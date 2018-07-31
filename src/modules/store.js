import { combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";

import { posts } from "./reducer";

export const store = createStore(
  combineReducers({
    posts,
    routing: routerReducer
  })
);

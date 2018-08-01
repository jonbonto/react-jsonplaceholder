import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { posts } from "./reducer";

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const history = createHistory();

export const store = createStore(
  combineReducers({
    posts,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import album from "./albums/album_reducers";
import comment from "./comments/comment_reducers";
import photo from "./photos/photo_reducers";
import post from "./posts/post_reducers";
import user from "./users/user_reducers";

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

export const history = createHistory();

export const store = createStore(
  combineReducers({
    album,
    comment,
    photo,
    post,
    user,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

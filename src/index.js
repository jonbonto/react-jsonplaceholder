import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from "./modules/store";
import Home from "./routes/Home";
import UserList from "./routes/users/UserList";
import AlbumList from "./routes/albums/AlbumList";
import PostList from "./routes/posts/PostList";
import MainContainer from "./components/MainContainer/MainContainer";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainContainer>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/users" component={UserList}/>
          <Route path="/users/:userId/albums" component={AlbumList}/>
          <Route path="/users/:userId/posts" component={PostList}/>
        </Switch>
      </MainContainer>
    </Router>
  </Provider>, 
  document.getElementById("root")
);

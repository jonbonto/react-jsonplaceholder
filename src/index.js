import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

import { history, store } from "./modules/store";
import Home from "./routes/Home";
import UserList from "./routes/users/UserList";
import AlbumList from "./routes/albums/AlbumList";
import PostList from "./routes/posts/PostList";
import Post from "./routes/posts/Post";
import Album from "./routes/albums/Album";
import MainContainer from "./components/MainContainer/MainContainer";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainContainer>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/users" component={UserList}/>
          <Route exact={true} path="/albums" component={AlbumList}/>
          <Route exact={true} path="/posts" component={PostList}/>
          <Route path="/users/:userId/albums" component={AlbumList}/>
          <Route path="/users/:userId/posts" component={PostList}/>
          <Route path="/posts/:id" component={Post}/>
          <Route path="/albums/:id" component={Album}/>
          <Route path="*" exact={true} component={() => "Not Found"} />
        </Switch>
      </MainContainer>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById("root")
);

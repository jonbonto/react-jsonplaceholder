import React from "react";
import PostCard from "./PostCard";
import { withRouter } from "react-router";
import { getPostListByUserId } from "../../modules/posts/post_api";
import { getUserInfo } from "../../modules/users/user_api";

class PostList extends React.Component {
  state = {
    posts: [],
    user: null
  };
  async componentDidMount() {
    const userId = this.props.match.params.userId;
    const user = await getUserInfo(userId);
    const posts = await getPostListByUserId(userId);
    this.setState({
      posts,
      user
    });
  }
  
  render() {
    if (!this.state.user) {
      return null;
    }
    const postList = this.state.posts.map((post) => {
      return (
        <PostCard title={post.title} body={post.body} link={`/posts/${post.id}`}/>
      );
    });
    return (
      <div>
        <h3>Post's {this.state.user.username}</h3>
        {postList}
      </div>
    );
  }
}

export default withRouter(PostList);

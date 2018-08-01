import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import PostCard from "./PostCard";
import { getPostListByUserId, getPostList } from "../../modules/posts/post_api";
import { getUserInfo } from "../../modules/users/user_api";
import { fetchPosts } from "../../modules/posts/post_actions";
import { fetchUser } from "../../modules/users/user_actions";

class PostList extends React.Component {
  
  componentDidMount() {
    this.process();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.process();
    }
  }

  process = async () => {
    const userId = this.props.match.params.userId;
    let user, posts;
    if (!userId) {
      posts = await getPostList();
    } else {
      user = await getUserInfo(userId);
      posts = await getPostListByUserId(userId);
    }
    this.props.fetchUser(user);
    this.props.fetchPosts(posts);
  }
  
  render() {
    if (!this.props.user && this.props.match.params.userId) {
      return null;
    }
    const postList = this.props.posts.map((post) => {
      return (
        <PostCard title={post.title} body={post.body} link={`/posts/${post.id}`}/>
      );
    });
    const heading = this.props.user ? <h3>{this.props.user.username}'s Posts</h3> : <h3>All Posts</h3>;
    return (
      <div>
        {heading}
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  user: state.user.user
});

const mapDispatchToProps = {
  fetchPosts,
  fetchUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));

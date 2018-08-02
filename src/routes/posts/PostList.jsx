import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import GridList from "@material-ui/core/GridList";

import { getPostListByUserId, getPostList, addPost, editPost, deletePost } from "../../modules/posts/post_api";
import { getUserInfo } from "../../modules/users/user_api";
import { fetchPosts, togglePostForm } from "../../modules/posts/post_actions";
import { onChangeTitle, onChangeBody, onSetId } from "../../modules/posts/post_actions";
import { fetchUser } from "../../modules/users/user_actions";
import PostForm from "./components/PostForm";
import PostCard from "./components/PostCard";
import styles from "./components/styles";

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

  addPost = () => {
    this.props.togglePostForm(true, "add");
    this.props.onChangeTitle();
    this.props.onChangeBody();
    this.props.onSetId();
  }

  editPost = (post) => () => {
    this.props.togglePostForm(true, "edit");
    this.props.onChangeTitle(post.title);
    this.props.onChangeBody(post.body);
    this.props.onSetId(post.id);
  }

  deletePost = (post) => async () => {
    await deletePost(post.id);
    const posts = this.props.posts.filter( el => el.id !== post.id );
    this.props.fetchPosts(posts);
  }

  closeForm = () => {
    this.props.togglePostForm(false);
  }

  changeField = (event) => {
    const name = event.target.name[0].toUpperCase() + event.target.name.substr(1);
    const change = this.props["onChange" + name];
    change(event.target.value);
  }

  submit = async (submitType, oldPost ) => {
    const userId = this.props.user ? this.props.user.userId : 1;
    const post = {
      ...oldPost,
      userId
    };

    if (submitType === "add") {
      const { id } = await addPost(post);
      this.props.fetchPosts([{...post, id}, ...this.props.posts]);
    } else {
      await editPost(post);
      const posts = this.props.posts.filter( el => el.id !== post.id );
      this.props.fetchPosts([post, ...posts])
    }
    this.props.togglePostForm(false);
  }
  
  render() {
    if (!this.props.user && this.props.match.params.userId) {
      return null;
    }
    const { classes, openForm, submitType } = this.props;
    const postList = this.props.posts.map((post) => {
      return (
        <PostCard 
          title={post.title} 
          body={post.body} 
          link={`/posts/${post.id}`}
          onEdit={this.editPost(post)}
          onDelete={this.deletePost(post)}
        />
      );
    });
    const heading = this.props.user ? <h3>{this.props.user.username}'s Posts</h3> : <h3>All Posts</h3>;
    return (
      <div>
        {heading}
        <Button 
          variant="fab" 
          color="primary" 
          aria-label="Add Post" 
          className={classes.fab}
          onClick={this.addPost}
        >
          <AddIcon />
        </Button>
        <GridList>
          {postList}
        </GridList>
        <PostForm 
          open={openForm}
          submit={submitType}
          handleClose={this.closeForm}
          handleSubmit={this.submit}
          onChange={this.changeField}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  user: state.user.user,
  openForm: state.post.postForm,
  submitType: state.post.submitType
});

const mapDispatchToProps = {
  fetchPosts,
  fetchUser,
  togglePostForm,
  onChangeTitle,
  onChangeBody,
  onSetId
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList)));

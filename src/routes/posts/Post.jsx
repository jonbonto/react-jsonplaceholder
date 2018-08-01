import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import { getComments, getPostInfo } from "../../modules/posts/post_api";
import { addComment, editComment, deleteComment } from "../../modules/comments/comment_api";
import { fetchPost } from "../../modules/posts/post_actions";
import { fetchComments, fetchComment, toggleCommentForm } from "../../modules/comments/comment_actions";
import Comment from "./components/comments/Comment";
import CommentForm from "./components/comments/CommentForm";
import styles from "./components/styles";

class Post extends React.Component {

  async componentDidMount() {
    const id = this.props.match.params.id;
    const post = await getPostInfo(id);
    const comments = await getComments(id);

    this.props.fetchPost(post);
    this.props.fetchComments(comments);
  }

  addComment = () => {
    this.props.toggleCommentForm(true, "add");
    this.props.fetchComment({});
  }

  editComment = (comment) => () => {
    this.props.toggleCommentForm(true, "edit");
    this.props.fetchComment(comment);
  }

  deleteComment = (comment) => async () => {
    await deleteComment(comment.id);
    const comments = this.props.comments.filter( el => el.id !== comment.id );
    this.props.fetchComments(comments);
  }

  closeForm = () => {
    this.props.toggleCommentForm(false);
  }

  changeField = (event) => {
    const comment = this.props.comment;
    comment[event.target.name] = event.target.value;
    this.props.fetchComment(comment);
  }

  submit = async (submitType, comment ) => {

    if (submitType === "add") {
      const { id } = await addComment(comment);
      this.props.fetchComments([{...comment, id}, ...this.props.comments]);
    } else {
      await editComment(comment);
      const comments = this.props.comments.filter( el => el.id !== comment.id );
      this.props.fetchComments([comment, ...comments])
    }
    this.props.toggleCommentForm(false);
  }
  
  render() {
    if (!this.props.post) {
      return null;
    }
    const { classes, post, openForm, submitType } = this.props;
    const comments = this.props.comments.map((comment) => (
      <Comment 
        {...comment}
        onEdit={this.editComment(comment)}
        onDelete={this.deleteComment(comment)}
      />
    ));
    return (
      <div>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="title" component="h3">
            {post.title}.
          </Typography>
          <Typography component="p">
            {post.body}
          </Typography>
        </Paper>
        <List>
          {comments}
        </List>
        <CommentForm 
          open={openForm}
          submit={submitType}
          handleClose={this.closeForm}
          handleSubmit={this.submit}
          onChange={this.changeField}
        />
        <Button 
          variant="fab" 
          color="primary" 
          aria-label="Add Comment" 
          className={classes.fab}
          onClick={this.addComment}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post.post,
  comments: state.comment.comments,
  comment: state.comment.comment,
  openForm: state.comment.commentForm,
  submitType: state.comment.submitType
});

const mapDispatchToProps = {
  fetchPost,
  fetchComments,
  fetchComment,
  toggleCommentForm
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Post)));

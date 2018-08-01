import React from "react";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { getComments } from "../../modules/posts/post_api";
import { getPostInfo } from "../../modules/posts/post_api";
import Comment from "./Comment";
import styles from "./styles";

class Post extends React.Component {
  state = {
    post: null,
    comments: []
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const post = await getPostInfo(id);
    const comments = await getComments(id);
    this.setState({
      post,
      comments
    });
  }
  
  render() {
    if (!this.state.post) {
      return null;
    }
    const { classes } = this.props;
    const comments = this.state.comments.map((comment) => (
      <Comment {...comment} />
    ));
    return (
      <div>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            {this.state.post.title}.
          </Typography>
          <Typography component="p">
            {this.state.post.body}
          </Typography>
        </Paper>
        <Typography variant="headline" component="h4">
          Komentar
        </Typography>
        {comments}
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Post));

import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

function UserCard(props) {
  const { classes, title, content, link } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          <Typography component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={link + "/posts"} size="small">Posts</Button>
          <Button component={Link} to={link + "/albums"} size="small">Albums</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(UserCard);

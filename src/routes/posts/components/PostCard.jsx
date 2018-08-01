import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import EditSharpIcon from "@material-ui/icons/EditSharp"

import styles from "./styles";

function PostCard(props) {
  const { classes, title, body, link } = props;
  const { onEdit, onDelete } = props;
  return (
    <div>
      <Card className={classes.cardPost}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {title}
          </Typography>
          <Typography className={classes.pos}>
            {body}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton color="default" component={Link} to={link} aria-label="view post">
            <SearchSharpIcon />
          </IconButton>
          <IconButton onClick={onEdit} color="primary" aria-label="edit">
            <EditSharpIcon />
          </IconButton>
          <IconButton onClick={onDelete} color="secondary" aria-label="delete">
            <DeleteSharpIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(PostCard);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import styles from "../styles";

const Comment = (props) => {
  const { classes, name, body } = props;
  const { onEdit, onDelete } = props;
  return (
    <ListItem key={name + body} dense button className={classes.listItem}>
      <ListItemText primary={body} secondary={`by ${name}`}/>
      <ListItemSecondaryAction>
        <IconButton onClick={onEdit} aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete} aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default withStyles(styles)(Comment);

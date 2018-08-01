import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from "./styles";

const Comment = (props) => {
  const { classes, name, body } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h3">
          {name} <small>said</small>
        </Typography>
        <Typography component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Comment);

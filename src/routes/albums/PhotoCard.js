import React from "react";
import { withStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

import styles from "./styles";

const PhotoCard = (props) => {
  const { classes, photo, handleClickOpen } = props;
  return (
    <Card key={photo.id} className={classes.card}>
      <CardMedia
        className={classes.media}
        image={photo.thumbnailUrl}
        title={photo.title}
      />
      <CardActions>
        <Button onClick={() => handleClickOpen(photo)} color="primary">
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(PhotoCard);

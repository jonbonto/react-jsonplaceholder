import React from "react";
import { withStyles } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import styles from "../styles";

const PhotoModal = (props) => {
  const { classes, album, photo } = props;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <div className={classes.modal + " " + classes.paper}>
        <Typography variant="title" id="modal-title">
          {photo.title}
        </Typography>
        <Typography variant="subheading" id="simple-modal-description">
          PhotoID: {photo.id}
          Album: {album.title}
        </Typography>
        <Card className={classes.cardModal}>
          <CardMedia
            className={classes.media}
            image={photo.url}
            title={photo.title}
          />
        </Card>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(PhotoModal);
  
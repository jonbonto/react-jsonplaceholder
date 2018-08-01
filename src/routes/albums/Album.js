import React from "react";
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { getPhotos, getAlbumInfo } from "../../modules/albums/album_api";
import { CardActions } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  card: {
    width: '15%',
    marginBottom: 12,
    marginRight: 12,
    float: 'left',
  },
  cardModal: {
    width: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Album extends React.Component {
  state = {
    open: false,
    album: null,
    photos: [],
    selectedPhoto: null
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const album = await getAlbumInfo(id);
    const photos = await getPhotos(id);
    this.setState({
      album,
      photos
    });
  }

  handleClickOpen = photo => {
    this.setState({
      open: true,
      selectedPhoto: photo
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };
  
  render() {
    if (!this.state.album) {
      return null;
    }
    const { classes } = this.props;
    const { selectedPhoto, album } = this.state;
    const photos = this.state.photos.map((photo) => (
      <Card key={photo.id} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={photo.thumbnailUrl}
          title={photo.title}
        />
        <CardActions>
          <Button onClick={() => this.handleClickOpen(photo)} color="primary">
            Detail
          </Button>
        </CardActions>
      </Card>
    ));
    return (
      <div>
        <h3>{this.state.album.title}'s Album</h3>
        {photos}
        {selectedPhoto && 
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="title" id="modal-title">
                {selectedPhoto.title}
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                PhotoID: {selectedPhoto.id}
                Album: {album.title}
              </Typography>
              <Card className={classes.cardModal}>
                <CardMedia
                  className={classes.media}
                  image={selectedPhoto.url}
                  title={selectedPhoto.title}
                />
              </Card>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Album));

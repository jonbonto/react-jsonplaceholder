import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import GridList from "@material-ui/core/GridList";

import { getPhotos, getAlbumInfo } from "../../modules/albums/album_api";
import { fetchAlbum } from "../../modules/albums/album_actions";
import { fetchPhoto, fetchPhotos, togglePhotoModal } from "../../modules/photos/photo_actions";
import PhotoModal from "./components/photos/PhotoModal";
import PhotoCard from "./components/photos/PhotoCard";

class Album extends React.Component {
  
  async componentDidMount() {
    const id = this.props.match.params.id;
    const album = await getAlbumInfo(id);
    const photos = await getPhotos(id);
    
    this.props.fetchAlbum(album);
    this.props.fetchPhotos(photos);
  }

  handleClickOpen = photo => {
    this.props.togglePhotoModal(true);
    this.props.fetchPhoto(photo);
  };

  handleClose = value => {
    this.props.togglePhotoModal(false);
    this.props.fetchPhoto(null);
  };
  
  render() {
    if (!this.props.album) {
      return null;
    }

    const { photo, album, open } = this.props;
    const photos = this.props.photos.map((photo) => (
      <PhotoCard 
        photo={photo}
        handleClickOpen={this.handleClickOpen}
      />
    ));
    return (
      <div>
        <h3>{album.title}'s Album</h3>
        <GridList>
          {photos}
        </GridList>
        {photo && 
          <PhotoModal
            album={album}
            photo={photo}
            open={open}
            handleClose={this.handleClose}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.photo.photoDialog,
  album: state.album.album,
  photos: state.photo.photos,
  photo: state.photo.photo
});

const mapDispatchToProps = {
  fetchAlbum,
  fetchPhotos,
  fetchPhoto,
  togglePhotoModal
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Album));

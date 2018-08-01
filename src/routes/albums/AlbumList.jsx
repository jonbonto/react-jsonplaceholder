import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getAlbumListByUserId, getAlbumList } from "../../modules/albums/album_api";
import { fetchAlbums } from "../../modules/albums/album_actions";
import { getUserInfo } from "../../modules/users/user_api";
import { fetchUser } from "../../modules/users/user_actions";
import AlbumCard from "./components/AlbumCard";

class AlbumList extends React.Component {
  
  componentDidMount() {
    this.process();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.process();
    }
  }

  async process () {
    const userId = this.props.match.params.userId;
    let user, albums;
    if (!userId) {
      albums = await getAlbumList();
    } else {
      user = await getUserInfo(userId);
      albums = await getAlbumListByUserId(userId);
    }
    
    this.props.fetchUser(user);
    this.props.fetchAlbums(albums);
  }
  
  render() {
    if (!this.props.user && this.props.match.params.userId) {
      return null;
    }
    const albumList = this.props.albums.map((album) => {
      return (
        <AlbumCard title={album.title} link={`/albums/${album.id}`}/>
      );
    });
    const heading = this.props.user ? <h3>{this.props.user.username}'s Album</h3> : <h3>All Albums</h3>;
    return (
      <div>
        {heading}
        {albumList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.album.albums,
  user: state.user.user
});

const mapDispatchToProps = {
  fetchAlbums,
  fetchUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));

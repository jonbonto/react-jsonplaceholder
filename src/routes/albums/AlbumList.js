import React from "react";
import AlbumCard from "./AlbumCard";
import { withRouter } from "react-router";
import { getAlbumListByUserId } from "../../modules/albums/album_api";
import { getUserInfo } from "../../modules/users/user_api";

class AlbumList extends React.Component {
  state = {
    albums: [],
    username: null
  };
  async componentDidMount() {
    const userId = this.props.match.params.userId;
    console.log(userId);
    const user = await getUserInfo(userId);
    const albums = await getAlbumListByUserId(userId);
    this.setState({
      albums,
      username: user.username
    });
  }
  
  render() {
    const albumList = this.state.albums.map((album) => {
      return (
        <AlbumCard title={album.title} link={`/albums/${album.id}`}/>
      );
    });
    return (
      <div>
        <h3>Album's {this.state.username}</h3>
        {albumList}
      </div>
    );
  }
}

export default withRouter(AlbumList);

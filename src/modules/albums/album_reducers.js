import { FETCH_ALBUM, FETCH_ALBUMS } from './album_actions';

const initialState = {
  albums: []
}
export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUM:
      return {
        ...state,
        album: action.album
      }
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.albums
      }
    default:
      return state
  }
}

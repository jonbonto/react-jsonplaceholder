/*
 * action types
 */
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALBUM = "FETCH_ALBUM";
/*
 * action creators
 */
export function fetchAlbums(albums) {
  return { type: FETCH_ALBUMS, albums };
}

export function fetchAlbum(album) {
  return { type: FETCH_ALBUM, album };
}

import { FETCH_ALBUM, FETCH_ALBUMS, fetchAlbum, fetchAlbums } from "../album_actions";

describe("actions", () => {
  it("should create an action to fetch album", () => {
    const album = "kisah lama";
    const expectedAction = {
      type: FETCH_ALBUM,
      album
    };
    expect(fetchAlbum(album)).toEqual(expectedAction);
  });

  it("should create an action to fetch albums", () => {
    const albums = [1, 2, 3];
    const expectedAction = {
      type: FETCH_ALBUMS,
      albums
    };
    expect(fetchAlbums(albums)).toEqual(expectedAction);
  });
});

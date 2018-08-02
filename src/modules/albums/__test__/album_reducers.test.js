import reducer, { initialState } from "../album_reducers";
import { FETCH_ALBUM, FETCH_ALBUMS } from "../album_actions";

describe("album reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it("should handle FETCH_ALBUM", () => {
    expect(
      reducer({}, {
        type: FETCH_ALBUM,
        album: "Run the tests"
      })
    ).toEqual({
        album: "Run the tests"
      }
    );
  });

  it("should handle FETCH_ALBUMS", () => {
    expect(
      reducer({ album: "terserah" }, {
        type: FETCH_ALBUMS,
        albums: [1, 2, 3]
      })
    ).toEqual({
        album: "terserah",
        albums: [1, 2, 3]
      }
    );
  });
});

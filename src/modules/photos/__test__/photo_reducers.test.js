import reducer, { initialState } from "../photo_reducers";
import { FETCH_PHOTO, FETCH_PHOTOS, TOGGLE_PHOTO_MODAL } from "../photo_actions";

describe("album reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it("should handle FETCH_PHOTO", () => {
    expect(
      reducer({}, {
        type: FETCH_PHOTO,
        photo: "Run the tests"
      })
    ).toEqual({
        photo: "Run the tests"
      }
    );
  });

  it("should handle FETCH_PHOTOS", () => {
    expect(
      reducer({ photo: "terserah" }, {
        type: FETCH_PHOTOS,
        photos: [1, 2, 3]
      })
    ).toEqual({
        photo: "terserah",
        photos: [1, 2, 3]
      }
    );
  });

  it("should handle TOGGLE_PHOTO_MODAL", () => {
    expect(
      reducer({ photo: "terserah" }, {
        type: TOGGLE_PHOTO_MODAL,
        open: true
      })
    ).toEqual({
        photo: "terserah",
        photoDialog: true
      }
    );
  });
});

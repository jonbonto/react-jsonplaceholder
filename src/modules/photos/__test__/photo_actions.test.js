import { FETCH_PHOTO, FETCH_PHOTOS, TOGGLE_PHOTO_MODAL } from "../photo_actions";
import { fetchPhoto, fetchPhotos, togglePhotoModal } from "../photo_actions";

describe("actions", () => {
  it("should create an action to fetch photo", () => {
    const photo = "photo hilang";
    const expectedAction = {
      type: FETCH_PHOTO,
      photo
    };
    expect(fetchPhoto(photo)).toEqual(expectedAction);
  });

  it("should create an action to fetch photos", () => {
    const photos = [1, 2, 3];
    const expectedAction = {
      type: FETCH_PHOTOS,
      photos
    };
    expect(fetchPhotos(photos)).toEqual(expectedAction);
  });

  it("should create an action to toggle modal", () => {
    const open = true;
    const expectedAction = {
      type: TOGGLE_PHOTO_MODAL,
      open
    };
    expect(togglePhotoModal(open)).toEqual(expectedAction);
  });
});

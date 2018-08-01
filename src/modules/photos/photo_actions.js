/*
 * action types
 */
export const FETCH_PHOTOS = "FETCH_PHOTOS";
export const FETCH_PHOTO = "FETCH_PHOTO";
export const TOGGLE_PHOTO_MODAL = "TOGGLE_PHOTO_MODAL";
/*
 * action creators
 */
export function fetchPhotos(photos) {
  return { type: FETCH_PHOTOS, photos };
}

export function fetchPhoto(photo) {
  return { type: FETCH_PHOTO, photo };
}

export function togglePhotoModal(open) {
  return { type: TOGGLE_PHOTO_MODAL, open };
}

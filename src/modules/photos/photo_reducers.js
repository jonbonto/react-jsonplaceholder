import { FETCH_PHOTO, FETCH_PHOTOS, TOGGLE_PHOTO_MODAL } from "./photo_actions";

export const initialState = {
  photos: [],
  photoDialog: false
}
export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTO:
      return {
        ...state,
        photo: action.photo
      }
    case FETCH_PHOTOS:
      return {
        ...state,
        photos: action.photos
      }
    case TOGGLE_PHOTO_MODAL:
      return {
        ...state,
        photoDialog: action.open
      }
    default:
      return state
  }
}

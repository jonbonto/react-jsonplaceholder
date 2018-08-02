import { FETCH_COMMENT, FETCH_COMMENTS, TOGGLE_COMMENT_FORM } from "./comment_actions";

export const initialState = {
  comments: [],
  comment: {}
}
export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENT:
      return {
        ...state,
        comment: action.comment
      }
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    case TOGGLE_COMMENT_FORM:
      return {
        ...state,
        commentForm: action.open,
        submitType: action.submitType
      }
    default:
      return state
  }
}

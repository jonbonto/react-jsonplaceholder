import { FETCH_POST, FETCH_POSTS } from './post_actions';

const initialState = {
  posts: []
}
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        post: action.post
      }
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

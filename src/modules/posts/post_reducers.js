import { 
  FETCH_POST, FETCH_POSTS, 
  CHANGE_TITLE, CHANGE_BODY,
  SET_ID, TOGGLE_POST_FORM 
} from "./post_actions";

const initialState = {
  posts: [],
  postForm: false,
  newPost: {}
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
    case CHANGE_TITLE:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          title: action.title
        }
      }
    case CHANGE_BODY:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          body: action.body
        }
      }
    case SET_ID:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          id: action.id
        }
      }
    case TOGGLE_POST_FORM:
      return {
        ...state,
        postForm: action.open,
        submitType: action.submitType
      }
    default:
      return state
  }
}

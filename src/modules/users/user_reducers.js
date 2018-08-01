import { FETCH_USER, FETCH_USERS } from './user_actions';

const initialState = {
  users: []
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.user
      }
    case FETCH_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

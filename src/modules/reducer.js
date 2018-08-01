import { ADD_POST } from "./actions";

export function posts(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

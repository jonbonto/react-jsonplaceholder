/*
 * action types
 */
export const ADD_POST = "ADD_POST";
/*
 * action creators
 */
export function addPost(text) {
  return { type: ADD_POST, text }
}

/*
 * action types
 */
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_BODY = "CHANGE_BODY";
export const SET_ID = "SET_ID";
export const TOGGLE_POST_FORM = "TOGGLE_POST_FORM";
/*
 * action creators
 */
export function fetchPosts(posts) {
  return { type: FETCH_POSTS, posts };
}

export function fetchPost(post) {
  return { type: FETCH_POST, post };
}

export function onChangeTitle(title) {
  return { type: CHANGE_TITLE, title };
}

export function onChangeBody(body) {
  return { type: CHANGE_BODY, body };
}

export function onSetId(id) {
  return { type: SET_ID, id };
}

export function togglePostForm(open, submitType) {
  return { type: TOGGLE_POST_FORM, open, submitType };
}

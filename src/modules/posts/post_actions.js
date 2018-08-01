/*
 * action types
 */
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
/*
 * action creators
 */
export function fetchPosts(posts) {
  return { type: FETCH_POSTS, posts };
}

export function fetchPost(post) {
  return { type: FETCH_POST, post };
}

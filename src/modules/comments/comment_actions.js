/*
 * action types
 */
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";
export const TOGGLE_COMMENT_FORM = "TOGGLE_COMMENT_FORM";
/*
 * action creators
 */
export function fetchComments(comments) {
  return { type: FETCH_COMMENTS, comments };
}

export function fetchComment(comment) {
  return { type: FETCH_COMMENT, comment };
}

export function toggleCommentForm(open, submitType) {
  return { type: TOGGLE_COMMENT_FORM, open, submitType };
}

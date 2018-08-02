import { FETCH_COMMENT, FETCH_COMMENTS, TOGGLE_COMMENT_FORM } from "../comment_actions";
import { fetchComment, fetchComments, toggleCommentForm } from "../comment_actions";

describe("actions", () => {
  it("should create an action to fetch comment", () => {
    const comment = "kisah lama";
    const expectedAction = {
      type: FETCH_COMMENT,
      comment
    };
    expect(fetchComment(comment)).toEqual(expectedAction);
  });

  it("should create an action to fetch comments", () => {
    const comments = [1, 2, 3];
    const expectedAction = {
      type: FETCH_COMMENTS,
      comments
    };
    expect(fetchComments(comments)).toEqual(expectedAction);
  });

  it("should create an action to toggle form", () => {
    const open = true;
    const expectedAction = {
      type: TOGGLE_COMMENT_FORM,
      open
    };
    expect(toggleCommentForm(open)).toEqual(expectedAction);
  });
});

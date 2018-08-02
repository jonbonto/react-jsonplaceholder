import reducer, { initialState } from "../comment_reducers";
import { FETCH_COMMENT, FETCH_COMMENTS, TOGGLE_COMMENT_FORM } from "../comment_actions";

describe("album reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it("should handle FETCH_COMMENT", () => {
    expect(
      reducer({}, {
        type: FETCH_COMMENT,
        comment: "Run the tests"
      })
    ).toEqual({
        comment: "Run the tests"
      }
    );
  });

  it("should handle FETCH_COMMENTS", () => {
    expect(
      reducer({ comment: "terserah" }, {
        type: FETCH_COMMENTS,
        comments: [1, 2, 3]
      })
    ).toEqual({
        comment: "terserah",
        comments: [1, 2, 3]
      }
    );
  });

  it("should handle TOGGLE_COMMENT_FORM", () => {
    expect(
      reducer({ comment: "terserah" }, {
        type: TOGGLE_COMMENT_FORM,
        open: true,
        submitType: "add"
      })
    ).toEqual({
        comment: "terserah",
        commentForm: true,
        submitType: "add"
      }
    );
  });
});

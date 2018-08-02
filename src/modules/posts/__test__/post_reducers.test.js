import reducer, { initialState } from "../post_reducers";
import { FETCH_POST, FETCH_POSTS, SET_ID, CHANGE_TITLE, CHANGE_BODY } from "../post_actions";

describe("post reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it("should handle FETCH_POST", () => {
    expect(
      reducer({}, {
        type: FETCH_POST,
        post: "Run the tests"
      })
    ).toEqual({
        post: "Run the tests"
      }
    );
  });

  it("should handle FETCH_POSTS", () => {
    expect(
      reducer({ post: "terserah" }, {
        type: FETCH_POSTS,
        posts: [1, 2, 3]
      })
    ).toEqual({
        post: "terserah",
        posts: [1, 2, 3]
      }
    );
  });

  it("should handle SET_ID", () => {
    expect(
      reducer({ post: "terserah" }, {
        type: SET_ID,
        id: 5
      })
    ).toEqual({
        post: "terserah",
        newPost: {
          id: 5
        }
      }
    );
  });

  it("should handle CHANGE_TITLE", () => {
    expect(
      reducer({ post: "terserah", newPost: {id: 5} }, {
        type: CHANGE_TITLE,
        title: "pos baru"
      })
    ).toEqual({
        post: "terserah",
        newPost: {
          id: 5,
          title: "pos baru"
        }
      }
    );
  });

  it("should handle CHANGE_BODY", () => {
    expect(
      reducer({ post: "terserah", newPost: {id: 5} }, {
        type: CHANGE_BODY,
        body: "pos baru"
      })
    ).toEqual({
        post: "terserah",
        newPost: {
          id: 5,
          body: "pos baru"
        }
      }
    );
  });
});

import { FETCH_POST, FETCH_POSTS, CHANGE_TITLE, CHANGE_BODY, SET_ID } from "../post_actions";
import { fetchPost, fetchPosts, onChangeTitle, onChangeBody, onSetId } from "../post_actions";

describe("actions", () => {
  it("should create an action to fetch post", () => {
    const post = "post ronda";
    const expectedAction = {
      type: FETCH_POST,
      post
    };
    expect(fetchPost(post)).toEqual(expectedAction);
  });

  it("should create an action to fetch posts", () => {
    const posts = [1, 2, 3];
    const expectedAction = {
      type: FETCH_POSTS,
      posts
    };
    expect(fetchPosts(posts)).toEqual(expectedAction);
  });

  it("should create an action to set id", () => {
    const id = 0;
    const expectedAction = {
      type: SET_ID,
      id
    };
    expect(onSetId(id)).toEqual(expectedAction);
  });

  it("should create an action to change title", () => {
    const title = "new post";
    const expectedAction = {
      type: CHANGE_TITLE,
      title
    };
    expect(onChangeTitle(title)).toEqual(expectedAction);
  });

  it("should create an action to change body", () => {
    const body = "isi post";
    const expectedAction = {
      type: CHANGE_BODY,
      body
    };
    expect(onChangeBody(body)).toEqual(expectedAction);
  });
});

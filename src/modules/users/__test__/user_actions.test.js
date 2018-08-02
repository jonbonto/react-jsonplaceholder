import { FETCH_USER, FETCH_USERS } from "../user_actions";
import { fetchUser, fetchUsers } from "../user_actions";

describe("actions", () => {
  it("should create an action to fetch user", () => {
    const user = "geek";
    const expectedAction = {
      type: FETCH_USER,
      user
    };
    expect(fetchUser(user)).toEqual(expectedAction);
  });

  it("should create an action to fetch users", () => {
    const users = [1, 2, 3];
    const expectedAction = {
      type: FETCH_USERS,
      users
    };
    expect(fetchUsers(users)).toEqual(expectedAction);
  });
});

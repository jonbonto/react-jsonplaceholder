import reducer, { initialState } from "../user_reducers";
import { FETCH_USER, FETCH_USERS } from "../user_actions";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });

  it("should handle FETCH_USER", () => {
    expect(
      reducer({}, {
        type: FETCH_USER,
        user: "Run the tests"
      })
    ).toEqual({
        user: "Run the tests"
      }
    );
  });

  it("should handle FETCH_USERS", () => {
    expect(
      reducer({ user: "terserah" }, {
        type: FETCH_USERS,
        users: [1, 2, 3]
      })
    ).toEqual({
        user: "terserah",
        users: [1, 2, 3]
      }
    );
  });
});

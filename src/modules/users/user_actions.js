/*
 * action types
 */
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USER = "FETCH_USER";
/*
 * action creators
 */
export function fetchUsers(users) {
  return { type: FETCH_USERS, users };
}

export function fetchUser(user) {
  return { type: FETCH_USER, user };
}

import { getAPI } from "../api/api";
import { BASE_URL } from "../../configs";
import { usersUrl } from "../users/constants";

const postsUrl = BASE_URL + "/posts";
export async function getPostListByUserId(id) {
  return await getAPI(`${usersUrl}/${id}/posts`);
}

export async function getPostInfo(id) {
  return await getAPI(`${postsUrl}/${id}`);
}

export async function getComments(id) {
  return await getAPI(`${postsUrl}/${id}/comments`);
}

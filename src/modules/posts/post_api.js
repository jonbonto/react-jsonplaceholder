import { getAPI, postAPI, putAPI, deleteAPI } from "../api/api";
import { BASE_URL } from "../../configs";
import { usersUrl } from "../users/constants";

const postsUrl = BASE_URL + "/posts";
export async function getPostListByUserId(id) {
  return await getAPI(`${usersUrl}/${id}/posts`);
}

export async function getPostList() {
  return await getAPI(`${postsUrl}`);
}

export async function getPostInfo(id) {
  return await getAPI(`${postsUrl}/${id}`);
}

export async function getComments(id) {
  return await getAPI(`${postsUrl}/${id}/comments`);
}

export async function addPost(body) {
  return await postAPI(`${postsUrl}/`, body);
}

export async function editPost(body) {
  return await putAPI(`${postsUrl}/${body.id}`, body);
}

export async function deletePost(id) {
  return await deleteAPI(`${postsUrl}/${id}`);
}

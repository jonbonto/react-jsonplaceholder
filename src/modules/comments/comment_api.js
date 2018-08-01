import { getAPI, postAPI, putAPI, deleteAPI } from "../api/api";
import { BASE_URL } from "../../configs";

const commentsUrl = BASE_URL + "/comments";

export async function getCommentList() {
  return await getAPI(`${commentsUrl}`);
}

export async function getComment(id) {
  return await getAPI(`${commentsUrl}/${id}`);
}

export async function addComment(body) {
  return await postAPI(`${commentsUrl}/`, body);
}

export async function editComment(body) {
  return await putAPI(`${commentsUrl}/${body.id}`, body);
}

export async function deleteComment(id) {
  return await deleteAPI(`${commentsUrl}/${id}`);
}

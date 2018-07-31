import { getAPI } from "../api/api";
import { usersUrl } from "./constants";

export async function getUserList() {
  return await getAPI(usersUrl);
}

export async function getUserInfo(id) {
  return await getAPI(`${usersUrl}/${id}`);
}

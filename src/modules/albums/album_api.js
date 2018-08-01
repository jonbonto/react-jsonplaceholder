import { getAPI } from "../api/api";
import { BASE_URL } from "../../configs";
import { usersUrl } from "../users/constants";

const albumsUrl = BASE_URL + "/albums";
export async function getAlbumListByUserId(id) {
  return await getAPI(`${usersUrl}/${id}/albums`);
}

export async function getAlbumList() {
  return await getAPI(`${albumsUrl}`);
}

export async function getAlbumInfo(id) {
  return await getAPI(`${albumsUrl}/${id}`);
}

export async function getPhotos(id) {
  return await getAPI(`${albumsUrl}/${id}/photos`);
}

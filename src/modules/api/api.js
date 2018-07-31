import { APIError, UnreachableAPIError, BadRequestError, ForbiddenError } from "./error";

async function callAPI(url, init) {

  let response;
  try {
    response = await fetch(url, init);
  } catch (error) {
    throw new UnreachableAPIError("unreachable");
  }

  if (response.status === 400 || response.status === 403) {
    let message;
    try {
      const resJson = await response.json();
      message = resJson.message;
    } catch(error) {
      message = "";
    }
    const error = response.status === 400 ? new BadRequestError(message) : new ForbiddenError(message);
    throw error;
  } else if (response.status < 200 || response.status >= 300) {
    throw new APIError(response.status);
  } 

  return await response.json().catch(() => { return; });
}

async function requestAPI(method, endpoint, headers, body) {

  const init = {
    method,
    headers,
    body,
  };

  return callAPI(endpoint, init);
}

export async function getAPI(url) {
  return requestAPI("GET", url);
}

export async function postAPI(url, body) {
  return requestAPI("POST", url, { "Content-Type": "application/json" }, JSON.stringify(body));
}

export async function putAPI(url, body) {
  return requestAPI("PUT", url, { "Content-Type": "application/json" }, JSON.stringify(body));
}

export async function patchAPI(url, body) {
  return requestAPI("PATCH", url, { "Content-Type": "application/json" }, JSON.stringify(body));
}

export async function deleteAPI(url) {
  return requestAPI("DELETE", url);
}

import { defaultRequest } from "../defaultRequest";
import { queryObjectToString, safeStatus } from "../utils";

export function requestCharacter(queryParameters = {}) {
  return defaultRequest("/character" + queryObjectToString(queryParameters));
}

export function requestRawCharacter(url) {
  return safeStatus(fetch(url));
}

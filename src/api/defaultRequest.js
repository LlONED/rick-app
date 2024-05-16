import { safeStatus } from "./utils";

export function defaultRequest(uri, options) {
  return safeStatus(fetch("https://rickandmortyapi.com/api" + uri, options));
}

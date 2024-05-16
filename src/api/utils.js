/**
 * @param {string} queryObject
 * @returns {string}
 */
export function queryObjectToString(queryObject = {}) {
  const queryString = Object.entries(queryObject)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return queryString.length ? "?" + queryString : "";
}

/**
 * @param {Promise} fetchPromise
 * @returns {Promise}
 */
export function safeStatus(fetchPromise) {
  return fetchPromise.then((data) => {
    if (data.status > 299) {
      throw new Error("Invalid status " + data.status);
    }

    return data.json();
  });
}

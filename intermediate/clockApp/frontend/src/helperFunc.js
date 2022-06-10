const axios = require("axios");

export function makeApiCall(url) {
  return axios.get(url);
}

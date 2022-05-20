const axios = require("axios").default;

var ip = "8.8.8.8";
var api_key = process.env.GEOLOCATION_API;
var url = `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`;

// const fetchData = axios.get(`${url}`);

export default function getData() {
  return axios.get(`${url}`);
}

// const copiedData = { ...responseData };

// console.log(copiedData);

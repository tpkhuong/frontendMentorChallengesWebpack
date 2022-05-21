import "../public/styles.css";
import getData from "./fetchApi";
// import locationArrow from "../images/icon-location.svg";
import {
  getInputEnterKey,
  showMapImage,
  updateAddressInformationValues,
} from "./helpFunc";
import { userInput, searchBtn } from "./selectors";

// console.log(userInput, searchBtn);
/**
 * process.env to use Dotenv
 * **/

userInput.addEventListener("keydown", getInputEnterKey);

// searchBtn.addEventListener();

const cachedData = JSON.parse(localStorage.getItem("testing"));

console.log(cachedData);

console.log(process.env.GEOLOCATION_API);

// var ip = "8.8.8.8";
// var api_key = process.env.GEOLOCATION_API;
// var url = `https://geo.ipify.org/api/v2/country?apiKey=${api_key}&ipAddress=${ip}`;

// axios
//   .get(`${url}`)
//   .then(function getData(response) {
//     console.log(response);
//     // response.json().then(function stuff(data) {
//     //   console.log(data);
//     // });
//     console.log(response.data);
//   })
//   .catch(function showError(error) {
//     console.log(error);
//   });

/**
 * setView
 * take latLng ([latitude,longitude], altitude)
 * **/

// const ipLocation = cachedData.ip;

updateAddressInformationValues(cachedData.infoData);

// use cachedData.location.lat and cachedData.location.log, put values in an array

showMapImage();

// var map = L.map("map").setView([51.505, -0.09], 13);

// L.tileLayer(
//   `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.MAPBOX_TOKEN}`,
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: process.env.MAPBOX_TOKEN,
//   }
// ).addTo(map);

// const ourIcon = L.icon({
//   iconUrl: locationArrow,
// });

// L.marker([51.505, -0.09], { icon: ourIcon }).addTo(map);

// $(function () {
//   $.ajax({
//     url: "https://geo.ipify.org/api/v1",
//     data: { apiKey: api_key, ipAddress: ip },
//     success: function (data) {
//       $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
//     },
//   });
// });

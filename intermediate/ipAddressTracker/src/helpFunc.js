const axios = require("axios").default;
import getData from "./fetchApi";
import { storage, stateAbbr, mapData } from "./data";
import locationArrow from "../images/icon-location.svg";
import {
  userInput,
  ipAddressContent,
  locationContent,
  timezoneContent,
  serviceProviderContent,
} from "./selectors";

// const storage = {
//   infoData: null,
//   fetchedData: null,
// };

export function getInputEnterKey(event) {
  if (
    event.code == "Enter" &&
    ipAddressConditionalChecker(event.target.value)
  ) {
    // const userIpAddressInput = event.target.value;
    // only run algorithm below
    // console.log(ipAddressConditionalChecker(event.target.value));
    fetchAndSaveData(event.target.value);
    // reset user input
    event.target.value = "";
    // getData(event.target.value).then(function workWithData(response) {
    //   //   console.log(response);
    //   const { data } = response;
    //   //   console.log(data);
    //   // save address information to storage obj in this module
    //   storage.infoData = {
    //     ipValue: data.ip,
    //     locationValue: {
    //       city: data.location.city,
    //       state: stateAbbr[data.location.region],
    //       zipcode: data.location.postalCode,
    //     },
    //     timezoneValue: data.location.timezone,
    //     serviceProvider: data.isp,
    //   };
    //   // copy data we get from promise to storage.fetchedData
    //   storage.fetchedData = { ...data };
    //   console.log(storage);
    //   console.log(stateAbbr);
    //   //   const valuesForMap = [data.location.lat, data.location.lng];
    //   //   const valuesForMap = [51.505, -0.09];
    //   // call showmapimage func
    //   showMapImage();
    //   // change content of dynamic span of address-information wrapper
    //   updateAddressInformationValues(storage.infoData);
    //   // copy fetched data and address information to localStorage
    //   // for initial load of App
    //   localStorage.setItem("savedData", JSON.stringify(storage));
    // });
  }
}

export function clickSearchGetData(event) {
  if (
    event.target.closest("BUTTON").getAttribute("class") == "search-btn" &&
    ipAddressConditionalChecker(userInput.value)
  ) {
    // const inputValue = userInput.value;
    fetchAndSaveData(userInput.value);
    // reset user input
    userInput.value = "";
  }
}

function ipAddressConditionalChecker(address) {
  // check if user input contain letters
  // we just want numbers
  const checkingAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
      address
    );
  return checkingAddress;
}

function fetchAndSaveData(userInput) {
  getData(userInput).then(function workWithData(response) {
    //   console.log(response);
    const { data } = response;
    //   console.log(data);
    // save address information to storage obj in this module
    storage.infoData = {
      ipValue: data.ip,
      locationValue: {
        city: data.location.city,
        state: stateAbbr[data.location.region],
        zipcode: data.location.postalCode,
      },
      timezoneValue: data.location.timezone,
      serviceProvider: data.isp,
    };
    // copy data we get from promise to storage.fetchedData
    storage.fetchedData = { ...data };
    console.log(storage);
    console.log(stateAbbr);
    const valuesForMap = [data.location.lat, data.location.lng];
    //   const valuesForMap = [51.505, -0.09];
    // call showmapimage func
    console.log(mapData.mapImg);
    if (mapData.mapImg) {
      mapData.mapImg.remove();
    }
    showMapImage(valuesForMap);

    // change content of dynamic span of address-information wrapper
    updateAddressInformationValues(storage.infoData);
    // copy fetched data and address information to localStorage
    // for initial load of App
    localStorage.setItem("savedData", JSON.stringify(storage));
  });
}

export function showMapImage(arrValues = [51.505, -0.09]) {
  // we have to remove the previous rendered map before we enter a new ip address
  var map = L.map("map").setView([...arrValues], 13);
  mapData.mapImg = map;
  L.tileLayer(
    `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.MAPBOX_TOKEN}`,
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: process.env.MAPBOX_TOKEN,
    }
  ).addTo(map);

  const ourIcon = L.icon({
    iconUrl: locationArrow,
  });

  L.marker([...arrValues], { icon: ourIcon }).addTo(map);
}

export function updateAddressInformationValues({
  ipValue,
  locationValue: { city, state, zipcode },
  timezoneValue,
  serviceProvider,
}) {
  // for city, state and zipcode we will use template literal
  // ip address
  ipAddressContent.innerText = ipValue;
  // location
  locationContent.innerText = `${city}, ${state} ${zipcode}`;
  // timezone
  timezoneContent.innerText = `UTC ${timezoneValue}`;
  // service provider
  serviceProviderContent.innerText = serviceProvider;
  //   console.log(ipValue);
  //   console.log(city);
  //   console.log(state);
  //   console.log(zipcode);
  //   console.log(timezoneValue);
  //   console.log(serviceProvider);
}

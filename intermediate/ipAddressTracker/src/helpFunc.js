const axios = require("axios").default;
import getData from "./fetchApi";
import locationArrow from "../images/icon-location.svg";

const storage = {
  infoData: null,
  fetchedData: null,
};

export function getInputEnterKey(event) {
  if (event.code == "Enter") {
    const userIpAddressInput = event.target.value;
    getData("8.8.8.8").then(function workWithData(response) {
      //   console.log(response);
      const { data } = response;
      //   console.log(data);
      // save address information to storage obj in this module
      storage.infoData = {
        ipValue: data.ip,
        locationValue: {
          city: data.location.city,
          state: data.location.region,
          zipcode: data.location.postalCode,
        },
        timezoneValue: data.location.timezone,
        serviceProvider: data.isp,
      };
      // copy data we get from promise to storage.fetchedData
      storage.fetchedData = { ...data };
      console.log(storage);
      // change content of dynamic span of address-information wrapper
      updateAddressInformationValues(storage.infoData);
      // copy fetched data and address information to localStorage
      // for initial load of App
      localStorage.setItem("testing", JSON.stringify(storage));
    });
  }
}

export function showMapImage(arrValues = [51.505, -0.09]) {
  var map = L.map("map").setView([...arrValues], 13);

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
  console.log(ipValue);
  console.log(city);
  console.log(state);
  console.log(zipcode);
  console.log(timezoneValue);
  console.log(serviceProvider);
}

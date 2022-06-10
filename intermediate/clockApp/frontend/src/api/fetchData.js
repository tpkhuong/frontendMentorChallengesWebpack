const axios = require("axios").default;
import { dataStorage } from "./storage";
// "2022-06-09T17:25:02-04:00".split("T")[1].split("-") for time
const testData = {
  data: {
    timezone: {
      id: "America/New_York",
      current_time: "2022-06-09T17:25:02-04:00",
      code: "EDT",
      is_daylight_saving: true,
      gmt_offset: -14400,
    },
    ip: "45.30.252.85",
    type: "v4",
    connection: {
      asn: 7018,
      organization: "ATT-INTERNET4",
      isp: "Att Services Inc",
    },
    location: {
      geonames_id: 4179074,
      latitude: 34.03215026855469,
      longitude: -84.70259094238281,
      zip: "30101",
      continent: {
        code: "NA",
        name: "North America",
        name_translated: "North America",
      },
      country: {
        alpha2: "US",
        alpha3: "USA",
        calling_codes: ["+1"],
        currencies: [
          {
            symbol: "$",
            name: "US Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "USD",
            name_plural: "US dollars",
          },
        ],
        emoji: "🇺🇸",
        ioc: "USA",
        languages: [
          {
            name: "English",
            name_native: "English",
          },
        ],
        name: "United States",
        name_translated: "United States",
        timezones: [
          "America/New_York",
          "America/Detroit",
          "America/Kentucky/Louisville",
          "America/Kentucky/Monticello",
          "America/Indiana/Indianapolis",
          "America/Indiana/Vincennes",
          "America/Indiana/Winamac",
          "America/Indiana/Marengo",
          "America/Indiana/Petersburg",
          "America/Indiana/Vevay",
          "America/Chicago",
          "America/Indiana/Tell_City",
          "America/Indiana/Knox",
          "America/Menominee",
          "America/North_Dakota/Center",
          "America/North_Dakota/New_Salem",
          "America/North_Dakota/Beulah",
          "America/Denver",
          "America/Boise",
          "America/Phoenix",
          "America/Los_Angeles",
          "America/Anchorage",
          "America/Juneau",
          "America/Sitka",
          "America/Metlakatla",
          "America/Yakutat",
          "America/Nome",
          "America/Adak",
          "Pacific/Honolulu",
        ],
        is_in_european_union: false,
      },
      city: {
        name: "Acworth",
        name_translated: "Acworth",
      },
      region: {
        fips: "",
        alpha2: "",
        name: "Georgia",
        name_translated: "Georgia",
      },
    },
  },
};

// get area/location for worldtimeapi call from timezone obj id property, use split "/"
// get latitude and longtitude for sunset/sunrise api call from location latitude/longtitude
// make api call to swagger ui for random quote

export async function testCall() {
  const response = await axios.get(
    "https://programming-quotes-api.herokuapp.com/Quotes/random"
  );
  return response.data;
}

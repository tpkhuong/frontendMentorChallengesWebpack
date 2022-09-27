/**
 * if we use "type":"module" in package.json
 * we have to use import instead of require
 * **/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
// const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "./frontend/src/main.js",
  ],
  module: {
    rules: [
      // without html-loader our img tag will not load img from url in src attr
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      { test: /\.(png|svg|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./frontend/src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
    // new Dotenv(),
  ],
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./frontend/src"),
      watch: true,
    },
  },
};

function test() {
  // data file is placeholder data. we will work with data from api call
  // const { data } = dataFile;
  const city = data.location.city.name;
  const standardTimezone = data.timezone.code;
  const country = data.location.country.alpha2;
  const latLongObj = data.location;
  const { latitude, longitude } = latLongObj;
  // hour,minute, seconds are number type
  const { hour, minute, seconds } = getTime(data.timezone.current_time);
  // meridiem value for meridiemElement is lowercase we use css to make it uppercase
  const { convertedHour, meridiem } = convertTimeFormat(hour);
  // const currentTime = `${convertedHour}:${minute}`;
  // time: currentTime,
  // get greetings
  // get icon (sun/moon) for greeting element
  const { greetingsMessage, sunMoonIcon } = greetingMessageIconCalculation(
    `${convertedHour}`,
    meridiem
  );
  // call useTimezone to update UI
  // useTimezone({
  //   ...timezoneObj,
  //   hr: convertedHour,
  //   min: minute,
  //   standardZone: standardTimezone,
  //   cityCountry: `in ${city}, ${country}`,
  //   locationMeridiem: meridiem,
  //   greetings: greetingsMessage,
  //   dayNightIcon: sunMoonIcon,
  // });

  // different way to use useState
  useTimezone((prevValues) => {
    return {
      ...prevValues,
      hr: convertedHour,
      min: minute,
      locationMeridiem: meridiem,
      standardZone: standardTimezone,
      cityCountry: `in ${city}, ${country}`,
      greetings: greetingsMessage,
      dayNightIcon: sunMoonIcon,
    };
  });

  /**
   * assign morning or evening to data-daynight attr of bg-img element
   * **/

  sunMoonIcon == "sun"
    ? sectionWrapperElement.setAttribute("data-daynight", "morning")
    : sectionWrapperElement.setAttribute("data-daynight", "evening");

  /**
   * assistive text element
   * **/

  assistiveTextElement.innerText = `${greetingsMessage}, it's currently. ${convertedHour} ${minute} ${meridiem} in ${city} ${country}`;
  assistiveTextHelper(
    assistiveTextElement,
    greetingsMessage,
    convertedHour,
    minute,
    meridiem,
    city,
    country
  );

  /**
   * bg-img section container
   * **/

  // if sunMoonIcon is moon assign value "evening" to element with attr data-daynight
  // if sunMoonIcon is sun assign value "morning" to element with attr data-daynight

  setTimeout(() => {
    dataStorage.time.greetingMessage =
      document.querySelector(".dynamic-greeting").innerText;
    dataStorage.time.sunMoonIcon = sunMoonIcon;
  }, 53);
  /**
   * clock algorithm. set value of hour and minute element
   * outside useState
   * if we call clock func inside our api .then() we won't have to get the innerText value of hour,minute,meridiem,greeting and icon elements
   * **/
  hourElement.innerText =
    convertedHour < 10 ? `0${convertedHour}` : `${convertedHour}`;
  minuteElement.innerText = minute < 10 ? `0${minute}` : `${minute}`;
  meridiemElement.innerText = meridiem;

  // save reference to hr,minute,seconds,meridiem, sunmoonicon, greetingMessage
  dataStorage.time.hour = convertedHour;
  dataStorage.time.minute = minute;
  dataStorage.time.seconds = seconds;
  dataStorage.time.meridiem = meridiem;
  dataStorage.time.sunMoonIcon = sunMoonIcon;
  dataStorage.time.greetingMessage = greetingsMessage;
  dataStorage.location.city = city;
  dataStorage.location.country = country;

  /**
   * calling clock func which takes three arguments
   * elements obj, storage data obj, stateObj
   * **/

  clock(
    {
      hourElement,
      minuteElement,
      meridiemElement,
      assistiveTextElement,
      sectionWrapperElement,
      dayYearElement,
      dayWeekElement,
      weekNumberElement,
    },
    dataStorage,
    {
      useTimezone,
    }
  );

  // figure out why seconds is NaN
}

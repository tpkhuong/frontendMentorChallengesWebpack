import { dataObj } from "./cachedData";
import sayHi from "./selectors";
import "../public/styles.css";

const testing = sayHi(dataObj.name);
console.log(testing.heading1.nextElementSibling);

// const jwtoken = require("jsonwebtoken");
import jwtoken from "jsonwebtoken";

export function generateToken(id) {
  return jwtoken.sign({ id }, process.env.NEXT_PUBLIC_JWT_SECRET, {
    expiresIn: "26d",
  });
}

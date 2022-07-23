import Local from "passport-local";
import { findUser, validatePassword } from "./user";

export const localStrategy = new Local.Strategy(function (
  username,
  password,
  done
) {
  console.log("username", username);
  console.log("password", password);
  findUser({ username })
    .then((user) => {
      console.log("user password-local", user);
      if (user && validatePassword(user, password)) {
        done(null, user);
      } else {
        done(new Error("Invalid username and password combination"));
      }
    })
    .catch((error) => {
      done(error);
    });
});

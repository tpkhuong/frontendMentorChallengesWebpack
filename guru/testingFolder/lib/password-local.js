import Local from "passport-local";
import { findUser, validatePassword } from "./db";

export const localStrategy = new Local.Strategy(function getUser(
  email,
  password,
  done
) {
  findUser({ email })
    .then((user) => {
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

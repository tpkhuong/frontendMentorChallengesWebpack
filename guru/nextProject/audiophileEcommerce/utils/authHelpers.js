// import modules
import { hash, compare } from "bcryptjs";
import { signIn, signOut } from "next-auth/react";
import axios from "axios";

/**
 * hashing password and verify helpers
 * **/

export async function hashPassword(password) {
  // bcryptjs.hash(password, salt)
  const hashed = await hash(password, 12);
  return hashed;
}

export async function verifyPassword(loginPassword, hashedPassword) {
  // bcryptjs.compare(password, hashedPassword)
  const isValid = await compare(loginPassword, hashedPassword);

  return isValid;
}

/**
 * create new user
 * **/

// using fetch

// export async function createUser(email, password) {
//   const response = await fetch("/api/auth/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   // browser console
//   console.log("response", response);

//   const data = await response.json();
//   // browser console
//   console.log("data", data);
//   if (!response.ok) {
//     throw new Error(data.message || "Oops! Fun just getting Started!");
//   }

//   return data;
// }

// using axios

export async function createUser(email, password) {
  const { data } = await axios.post("/api/auth/register", {
    email,
    password,
  });

  console.log(data);

  if (!data) {
    throw new Error(data.message || "Oops! Fun just getting Started!");
  }
  return data;
}

/**
 * submit button handler
 * **/

export async function submitNewUserHandler(event) {
  event.preventDefault();
  const {
    emailInputRef,
    passwordInputRef,
    confirmPasswordInputRef,
    setUser,
    contextRefObj,
  } = this;

  console.log(this);
  // email error count
  // const emailErrorCount =
  //   emailInputRef.current.value === ""
  //     ? 1
  //     : !emailInputRef.current.validity.valid
  //     ? 1
  //     : 0;

  // // password error count
  // const passwordErrorCount = passwordInputRef.current.value === "" ? 1 : 0;

  // // email input checker
  // if (emailErrorCount == 0) {
  //   emailInputRef.current.parentElement.setAttribute("data-isempty", "");
  //   emailInputRef.current.parentElement.setAttribute("data-isvalid", "");
  // } else {
  //   emailInputRef.current.value === ""
  //     ? emailInputRef.current.parentElement.setAttribute("data-isempty", "true")
  //     : (emailInputRef.current.parentElement.setAttribute("data-isempty", ""),
  //       !emailInputRef.current.validity.valid
  //         ? emailInputRef.current.parentElement.setAttribute(
  //             "data-isvalid",
  //             "false"
  //           )
  //         : emailInputRef.current.parentElement.setAttribute(
  //             "data-isvalid",
  //             ""
  //           ));
  // }
  // // password input checker

  // // when passwordErrorCount == 0 we want to check password and confirm password are a match

  // if (passwordErrorCount == 0) {
  //   passwordInputRef.current.parentElement.setAttribute("data-isempty", "");

  //   if (
  //     passwordInputRef.current.value !== confirmPasswordInputRef.current.value
  //   ) {
  //     passwordInputRef.current.parentElement.setAttribute(
  //       "data-ismatchedpassword",
  //       "false"
  //     );
  //     confirmPasswordInputRef.current.parentElement.setAttribute(
  //       "data-ismatchedpassword",
  //       "false"
  //     );
  //     return;
  //   } else {
  //     // run algorithm to create new user and remove "not match" text
  //     passwordInputRef.current.parentElement.setAttribute(
  //       "data-ismatchedpassword",
  //       ""
  //     );
  //     confirmPasswordInputRef.current.parentElement.setAttribute(
  //       "data-ismatchedpassword",
  //       ""
  //     );
  //     // run algorithm below when errors is 0

  //     const enteredEmail = emailInputRef.current.value;
  //     const enteredPassword = passwordInputRef.current.value;
  //     // create new user
  //     try {
  //       const result = await createUser(enteredEmail, enteredPassword);
  //       // result will be new user
  //       // browser console
  //       // console.log("result from calling createUser helper", result);
  //       const { user } = result;

  //       if (user) {
  //         // we want to re-render register page to run code in React.useEffect()
  //         // then run router.push("login")
  //         // if we are successful at creating new user
  //         // redirect to log in page
  //         setUser(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  // if (passwordErrorCount >= 1) {
  //   passwordInputRef.current.parentElement.setAttribute("data-isempty", "true");
  // }

  // if (
  //   passwordInputRef.current.value !== confirmPasswordInputRef.current.value
  // ) {
  //   // assign value "false" to parent element of passwordinputref and confirmpasswordref
  //   throw new Error("Make sure both password entered is a match.");
  // }
}

/**
 * login handler
 * **/

export async function loginHandler(event) {
  event.preventDefault();
  const { emailRef, passwordRef, loginFormContextObj } = this;
  const userEnteredEmail = emailRef.current.value;
  const userEnteredPassword = passwordRef.current.value;
  console.log("userEnteredEmail", userEnteredEmail);
  console.log("userEnteredPassword", userEnteredPassword);
  console.log("loginFormContextObj", loginFormContextObj);
  // run algorithm below after validation
  // const loginResult = await signIn("credentials", {
  //   // signin method default behavior is user ends back on page they started
  //   // after completing sign in
  //   // redirect false to handle sign in response on same page
  //   // redirect: false,
  //   callbackUrl: "/",
  //   email: userEnteredEmail,
  //   password: userEnteredPassword,
  // });
}

/**
 * logout handler
 * **/

export function logoutHandler(event) {
  signOut();
}

/**
 * error helper
 * **/

function getErrors(input) {}

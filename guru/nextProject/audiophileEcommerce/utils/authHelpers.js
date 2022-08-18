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
  const { emailInputRef, passwordInputRef, confirmPasswordInputRef, setUser } =
    this;

  if (
    passwordInputRef.current.value !== confirmPasswordInputRef.current.value
  ) {
    throw new Error("Make sure both password entered is a match.");
  }

  const enteredEmail = emailInputRef.current.value;
  const enteredPassword = passwordInputRef.current.value;
  // create new user
  try {
    const result = await createUser(enteredEmail, enteredPassword);
    // result will be new user
    // browser console
    // console.log("result from calling createUser helper", result);
    const { user } = result;

    if (user) {
      // we want to re-render register page to run code in React.useEffect()
      // then run router.push("login")
      // if we are successful at creating new user
      // redirect to log in page
      setUser(true);
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * login handler
 * **/

export async function loginHandler(event) {
  event.preventDefault();
  const { emailRef, passwordRef } = this;
  const userEnteredEmail = emailRef.current.value;
  const userEnteredPassword = passwordRef.current.value;
  console.log("userEnteredEmail", userEnteredEmail);
  console.log("userEnteredPassword", userEnteredPassword);
  const loginResult = await signIn("credentials", {
    // signin method default behavior is user ends back on page they started
    // after completing sign in
    // redirect false to handle sign in response on same page
    // redirect: false,
    callbackUrl: "/",
    email: userEnteredEmail,
    password: userEnteredPassword,
  });
}

/**
 * logout handler
 * **/

export function logoutHandler(event) {
  signOut();
}

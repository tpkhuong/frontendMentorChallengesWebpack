import { hash, compare } from "bcryptjs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
// import TestUser from "../models/TestUser";

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

export async function createUser(email, password) {
  const response = await fetch(`/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Opps! Fun just getting Started!");
  }

  return data;
}

export async function submitNewUserHandler(event) {
  event.preventDefault();
  const { emailInputRef, passwordInputRef, confirmPasswordInputRef } = this;
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
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function loginHandler(event) {
  // const router = useRouter();
  event.preventDefault();
  const { emailRef, passwordRef } = this;
  const userEnteredEmail = emailRef.current.value;
  const userEnteredPassword = passwordRef.current.value;

  const loginResult = await signIn("credentials", {
    // signin method default behavior is user ends back on page they started
    // after completing sign in
    redirect: "/",
    email: userEnteredEmail,
    password: userEnteredPassword,
  });
  console.log(loginResult);
}

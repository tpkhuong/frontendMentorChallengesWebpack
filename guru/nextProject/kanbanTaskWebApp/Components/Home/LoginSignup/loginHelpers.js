import { signIn, signOut } from "next-auth/react";

export async function loginSignUpHandler(event) {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  await signIn("email", {
    email,
    callbackUrl: "/dashboard",
  });
}

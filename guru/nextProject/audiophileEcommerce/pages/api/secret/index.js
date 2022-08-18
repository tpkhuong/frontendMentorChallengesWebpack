import { getSession } from "next-auth/react";

export default async function checkingSession(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.json({
      content: "Welcome to the secret page.",
    });
  } else {
    res.json({
      error: "You need to log in first.",
    });
  }
}

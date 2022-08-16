import { useSession } from "next-auth/react";

export default async function checkingSession(req, res) {
  const session = await useSession({ req });

  if (session) {
    res.send({
      content: "Welcome to the secret page.",
    });
  } else {
    res.send({
      error: "You need to log in first.",
    });
  }
}

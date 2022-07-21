import { getLoginSession } from "../../lib/auth";
import { findUser } from "../../lib/user";

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req);
    console.log("session", session);
    console.log("req", req.body);
    const user = (session && (await findUser(session))) ?? null;
    console.log("user in user.js", user);
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).end("Authentication token is invalid, please log in");
  }
}

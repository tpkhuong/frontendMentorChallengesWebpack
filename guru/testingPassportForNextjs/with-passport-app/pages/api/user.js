import { getLoginSession } from "../../lib/auth";
import { findUser } from "../../lib/user";

export default async function user(req, res) {
  try {
    console.log("req.body", req.body);
    const { username, password } = req.body;
    const session = await getLoginSession(req);
    console.log("getLoginSession", session);
    const user = (session && (await findUser({ username }))) ?? null;
    console.log("getLoginSession");
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).end("Authentication token is invalid, please log in");
  }
}

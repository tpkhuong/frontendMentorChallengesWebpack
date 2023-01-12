// import dbConnection from "../config/database";
// const User = dbConnection.models.User;
import User from "../models/userModel"
import Iron from "@hapi/iron";
import {MAX_AGE, setTokenCookie, getTokenCookie} from "./auth-cookies"

const TOKEN_SECRET = process.env.NEXT_PUBLIC_TOKEN_SECRET;

export default async function setLoginSession(res, session) {
  const createdAt = Date.now();
  // Create a session object with a max age that we can validate later
    const obj = { ...session, createdAt, maxAge: MAX_AGE };
    const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);

    setTokenCookie(res, token);
}

export default async function getLoginSession(req) {
    const token = getTokenCookie(req);

    if (!token) return;

    const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
    const expiresAt = session.createdAt + session.maxAge * 1000;

    // Validate the expiration date of the session
    if (Date.now() > expiresAt) {
        throw new Error("Session expired");
    }

    return session;
}
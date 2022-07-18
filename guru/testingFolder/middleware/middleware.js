import { NextRequest, NextResponse } from "next/server";
import jwtoken from "jsonwebtoken";
import dbConnection from "../utils/dbConnect";
const User = dbConnection.models.User;

export default async function middleware(req, res, next) {
  req.customProp = "world";
  res.json({ message: "Hello" });
  next();
}

// export const config = {
//   matcher: "/api/authUser/:path*",
// };

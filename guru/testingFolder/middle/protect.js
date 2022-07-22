import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { createRouter } from "next-connect";
import jwtoken from "jsonwebtoken";
import dbConnection from "../utils/dbConnect";
const User = dbConnection.models.User;

// export default async function protect(req, res, next) {
//   nextConnect().use((req, res, next) => {
//     req.customProp = "world";
//     res.json({ message: "Hello" });
//     next();
//   });
// }

// const auth = createRouter(NextApiRequest, NextApiResponse).use(
//   async (req, res) => {
//     req.customProp = "world";
//     res.json({ message: "Hello" });
//     next();
//   }
// );

// export default auth;

// export default function middleware(handler) {
//   return async function protect(req, res) {
//     res.json({ message: "Hello from protect js" });
//   };
// }

// export const config = {
//   matcher: "/api/authUser/:path*",
// };

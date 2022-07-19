import { NextRequest, NextResponse } from "next/server";
import jwtoken from "jsonwebtoken";
import dbConnection from "./utils/dbConnect";
const User = dbConnection.models.User;

export default async function middleware(NextRequest, NextResponse, next) {
  if (req.nextUrl.pathname.startsWith == "/api/authUser") {
    NextRequest.customProp = "world";
    return NextResponse.rewrite(new URL());
  }
  // NextRequest.customProp = "world";
  // NextResponse.json({ message: "Hello" });
}

export const config = {
  matcher: "/api/:path*",
};

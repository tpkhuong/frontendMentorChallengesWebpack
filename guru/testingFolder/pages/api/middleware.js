import { NextRequest, NextResponse } from "next/server";

export default async function authMiddleware(req, res, next) {}

export const config = {
  matcher: "/authUser/:path*",
};

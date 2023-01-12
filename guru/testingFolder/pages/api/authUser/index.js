import { NextRequest, NextResponse } from "next/server";
import { createRouter } from "next-connect";
import auth from "../../../middleware/protect";
import dbConnection from "../../../utils/dbConnect";
const User = dbConnection.models.User;

export default async function authHandler(req, res) {
  if (req.headers.authorization) {
    res.json({ message: "Hello from authUser" });
  }
  // res.json({ message: "Hello from authUser route" });
}

// const handler = createRouter(NextApiRequest, NextApiResponse);

// handler.use(auth).post(async (req, res) => {
//   console.log(req);
//   if (req.headers.authorization) {
//     res.json({ message: "Hello from authUser" });
//   }
// });

// export default handler;

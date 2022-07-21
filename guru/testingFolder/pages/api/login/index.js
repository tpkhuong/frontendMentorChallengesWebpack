// import dbConnection from "../../../utils/dbConnect";
import dbConnect from "../../../config/database";
import { generateToken } from "../../../utils/helpers";
import passport from "passport";
import nextConnect from "next-connect";
import { localStrategy } from "../../../lib/password-local";
import { setLoginSession } from "../../../lib/auth";
// import jwtoken from "jsonwebtoken";
// import bcrypt from "bcryptjs";
const User = dbConnection.models.User;

// export default async function loginHandler(req, res) {
//   console.log(req.headers.authorization);
//   const { email, password } = req.body;
//   // check user email
//   const currentUser = await User.findOne({ email });

//   //   if (currentUser) {
//   //     console.log(generateToken(currentUser.id));
//   //   }
//   //   console.log(currentUser);
//   //   const pwBoolean = await bcrypt.compare(password, currentUser.password);
//   //   console.log(pwBoolean);
//   if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
//     res.json({
//       _id: currentUser.id,
//       name: currentUser.name,
//       email: currentUser.email,
//       token: generateToken(currentUser._id),
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid inputs");
//   }
//   //   res.json({ message: "Hello from Login Api" });
// }

/**
 * next js passport example
 * **/

function authenticate(method, req, res) {
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    })(req, res);
  });
}

passport.use(localStrategy);

export default nextConnect()
  .use(passport.initialize())
  .post(async (req, res) => {
    try {
      const user = await authenticate("local", req, res);
      // session is the payload to save in the token, it may contain basic info about the user
      const session = { ...user };

      await setLoginSession(res, session);
      res.status(200).send({ done: true });
    } catch (error) {
      console.log(error);
      res.status(401).send(error.message);
    }
  });

/**
 * next js passport example
 * **/

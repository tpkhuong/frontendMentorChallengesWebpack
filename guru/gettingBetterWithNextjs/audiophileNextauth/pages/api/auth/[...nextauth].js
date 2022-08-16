import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// import { verifyPassword } from "../../../utils/authHelpers";
// import clientPromise from "../../../config/database";

/**
 * just mongodb without mongoose
 * **/

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         // connect to database
//         const client = await clientPromise;
//         // get users collection
//         const usersCollection = client.db().collection("users");
//         // find user
//         const isUserExist = await usersCollection.findOne({
//           email: credentials.email,
//         });
//         // if user doesnt exist throw error
//         if (!isUserExist) {
//           throw new Error("User not found!");
//         }
//         // verify password

//         const isPasswordValid = await verifyPassword(
//           credentials.password,
//           user.password
//         );
//         // if password not valid throw error
//         if (!isPasswordValid) {
//           throw new Error(
//             `Could not log user with email: ${credentials.email} in.`
//           );
//         }
//         // return user
//         return { email: user.email };
//       },
//     }),
//   ],
// });

/**
 * mongodb with mongoose
 * **/

import { verifyPassword } from "../../../utils/authHelpers";
import dbConnect from "../../../config/dbWithMongoose";
import TestUser from "../../../models/TestUser";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // connect to database
        await dbConnect();
        // get users collection
        // const usersCollection = client.db().collection("users");
        // find user
        const isUserExist = await TestUser.findOne({
          email: credentials.email,
        });
        // if user doesnt exist throw error
        if (!isUserExist) {
          throw new Error("User not found!");
        }
        // verify password

        const isPasswordValid = await verifyPassword(
          credentials.password,
          user.password
        );
        // if password not valid throw error
        if (!isPasswordValid) {
          throw new Error(
            `Could not log user with email: ${credentials.email} in.`
          );
        }
        // return user
        return { email: user.email };
      },
    }),
  ],
});

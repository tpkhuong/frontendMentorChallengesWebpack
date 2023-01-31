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

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../utils/authHelpers";
import dbConnect from "../../../config/mongooseMongoDatabase";
// import TestUser from "../../../models/TestUsers";
import User from "../../../models/Users";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // connect to database
        await dbConnect();
        // get users collection
        // const usersCollection = client.db().collection("users");
        // find user
        console.log("credentials", credentials);
        const foundUser = await User.findOne({
          email: credentials.email,
        });
        // console.log("foundUser", foundUser);

        // if user doesnt exist throw error
        if (!foundUser) {
          throw new Error("User not found!");
        }
        // console.log(foundUser.password);
        // verify password

        const isPasswordValid = await verifyPassword(
          credentials.password,
          foundUser.password
        );
        // console.log("isPasswordValid", isPasswordValid);
        // if password not valid throw error
        if (!isPasswordValid) {
          throw new Error(
            `Could not log user with email: ${credentials.email} in.`
          );
        }
        // return user
        return { email: foundUser.email };
      },
    }),
  ],
});

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         // connect to database
//         await dbConnect();
//         // get users collection
//         // const usersCollection = client.db().collection("users");
//         // find user
//         console.log("credentials", credentials);

//         const foundUser = await TestUser.findOne({
//           email: credentials.email,
//         });
//         // if user doesnt exist throw error
//         if (!foundUser) {
//           throw new Error("User not found!");
//         }
//         console.log(foundUser.password);
//         // verify password

//         const isPasswordValid = await verifyPassword(
//           credentials.password,
//           foundUser.password
//         );
//         // console.log("isPasswordValid", isPasswordValid);
//         // if password not valid throw error
//         if (!isPasswordValid) {
//           throw new Error(
//             `Could not log user with email: ${credentials.email} in.`
//           );
//         }
//         // return user
//         return { email: foundUser.email };
//       },
//     }),
//   ],
// });

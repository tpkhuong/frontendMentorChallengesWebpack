import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import { PrismaClient } from "@prisma/client";
import clientPromise from "../../../config/mongoDB";

// const prisma = new PrismaClient();

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
  adapter: MongoDBAdapter(clientPromise),
  // adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/",
  },
  providers: [
    // EmailProvider({
    //   server: `smtp://${process.env.EMAIL_SERVER_USER}:${process.env.EMAIL_SERVER_PASSWORD}@${process.env.EMAIL_SERVER_HOST}:${process.env.EMAIL_SERVER_PORT}`,
    //   from: process.env.EMAIL_FROM,
    // }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default NextAuth(authOptions);

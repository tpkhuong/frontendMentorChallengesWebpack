// import { PrismaClient, Prisma } from "@prisma/client";

// const prisma = new PrismaClient();

import clientPromise from "../../../config/mongoDB";

export default async function testCreateBoardsHandler(req, res) {
  const { method, body } = req;
  //   console.log(req);
  if (method === "POST") {
    // console.log(body);
    const userEmail = body.email;

    const clientConnect = await clientPromise;
    const usersCollection = !clientConnect.db().collection("users")
      ? clientConnect.db().createCollection("users")
      : clientConnect.db().collection("users");

    const userExist = await usersCollection.find({ email: userEmail });

    if (userExist) {
      await usersCollection.updateOne(
        { email: userEmail },
        {
          $set: {
            boards: [
              {
                title: "Platform Launch",
                user: "coolperson@gmail.com",
                columns: {
                  todo: [],
                  doing: [],
                  done: [],
                },
                index: 0,
                isSelected: true,
              },
              {
                title: "Marketing Plan",
                user: "coolperson@gmail.com",
                columns: {
                  todo: [],
                  doing: [],
                  done: [],
                },
                index: 1,
                isSelected: false,
              },
              {
                title: "Roadmap",
                user: "coolperson@gmail.com",
                columns: {
                  todo: [],
                  doing: [],
                  done: [],
                },
                index: 2,
                isSelected: false,
              },
            ],
          },
        }
      );
      // console.log(createdData);
      res.status(200).json({ message: "THIS IS PRISMA!!! Hello World!!!" });
      // if (createdData) {
      //   res.status(200).json({ message: "THIS IS PRISMA!!! Hello World!!!" });
      // }
    }

    // await prisma.$connect();
    // find user
    // add boards property to user
    // const userExist = await prisma.user.findUnique({
    //   where: {
    //     email: "tpkhuong@gmail.com",
    //   },
    // });
    // if (userExist) {
    //   console.log(userExist, "userExist");
    //   // let user = Prisma.UserCreateInput;
    //   // user = {
    //   //   email:""
    //   // }
    //   // const createdUser = await prisma.user.create({
    //   //   data: {
    //   //     ...userExist,
    //   //     boards: [
    //   //       {
    //   //         title: "Platform Launch",
    //   //         user: "coolperson@gmail.com",
    //   //         columns: {
    //   //           todo: [],
    //   //           doing: [],
    //   //           done: [],
    //   //         },
    //   //         index: 0,
    //   //         isSelected: true,
    //   //       },
    //   //       {
    //   //         title: "Marketing Plan",
    //   //         user: "coolperson@gmail.com",
    //   //         columns: {
    //   //           todo: [],
    //   //           doing: [],
    //   //           done: [],
    //   //         },
    //   //         index: 1,
    //   //         isSelected: false,
    //   //       },
    //   //       {
    //   //         title: "Roadmap",
    //   //         user: "coolperson@gmail.com",
    //   //         columns: {
    //   //           todo: [],
    //   //           doing: [],
    //   //           done: [],
    //   //         },
    //   //         index: 2,
    //   //         isSelected: false,
    //   //       },
    //   //     ],
    //   //   },
    //   // });

    //   // const firstBoard = await prisma.board.create({
    //   //   data: {
    //   //     title: "Marketing Plan",
    //   //     index: 0,
    //   //     isSelected: false,
    //   //     user: userExist,
    //   //   },
    //   // });

    //   const updateUser = await prisma.user.update({
    //     where: {
    //       id: userExist.id,
    //     },
    //     data: {
    //       ...userExist,
    //       boards: [
    //         {
    //           title: "Platform Launch",
    //           user: "coolperson@gmail.com",
    //           columns: {
    //             todo: [],
    //             doing: [],
    //             done: [],
    //           },
    //           index: 0,
    //           isSelected: true,
    //         },
    //         {
    //           title: "Marketing Plan",
    //           user: "coolperson@gmail.com",
    //           columns: {
    //             todo: [],
    //             doing: [],
    //             done: [],
    //           },
    //           index: 1,
    //           isSelected: false,
    //         },
    //         {
    //           title: "Roadmap",
    //           user: "coolperson@gmail.com",
    //           columns: {
    //             todo: [],
    //             doing: [],
    //             done: [],
    //           },
    //           index: 2,
    //           isSelected: false,
    //         },
    //       ],
    //     },
    //   });
    //   // console.log(createdUser, "createdUser");
    //   console.log(updateUser, "updateUser");
    //   res.status(200).json({ message: "THIS IS PRISMA!!! Hello World!!!" });
    // }
    // res.status(200).json({ message: "Found user", user: userExist });
    // res.status(200).json({ message: "Found user" });
  }
}

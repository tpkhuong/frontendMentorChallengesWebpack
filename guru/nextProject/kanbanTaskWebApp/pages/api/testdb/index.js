import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function testCreateBoardsHandler(req, res) {
  const { method, body } = req;
  //   console.log(req);
  if (method === "POST") {
    console.log(body);
    await prisma.$connect();
    // find user
    // add boards property to user
    const userExist = await prisma.user.findUnique({
      where: {
        email: "tpkhuong@gmail.com",
      },
    });
    if (userExist) {
      console.log(userExist, "userExist");
      const createdUser = await prisma.user.create({
        data: {
          ...userExist,
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
              selected: true,
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
              selected: false,
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
              selected: false,
            },
          ],
        },
      });
      console.log(createdUser, "createdUser");
      res.status(200).json({ message: "THIS IS PRISMA!!! Hello World!!!" });
    }
  }

  //   //   res.status(200).json({ message: "Found user", user: userExist });
}

import dbConnection from "../../../utils/dbConnect";
import { generateToken } from "../../../utils/helpers";
import jwtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
const User = dbConnection.models.User;

export default async function loginHandler(req, res) {
  console.log(req.headers.authorization);
  const { email, password } = req.body;
  // check user email
  const currentUser = await User.findOne({ email });

  //   if (currentUser) {
  //     console.log(generateToken(currentUser.id));
  //   }
  //   console.log(currentUser);
  //   const pwBoolean = await bcrypt.compare(password, currentUser.password);
  //   console.log(pwBoolean);
  if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
    res.json({
      _id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      token: generateToken(currentUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid inputs");
  }
  //   res.json({ message: "Hello from Login Api" });
}

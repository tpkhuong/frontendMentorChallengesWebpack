import { hashPassword } from "../../../utils/authHelpers";
import dbConnect from "../../../config/mongooseMongoDatabase";
import Customer from "../../../models/Customers";
import User from "../../../models/Users";
import TestUser from "../../../models/TestUsers";

export default async function registerUserHandler(req, res) {
  const { method, body } = req;
  if (method != "POST") return;
  // server console/cli in vs code
  // console.log(req.body);
  const { email, password } = body;
  // server console/cli in vs code
  // console.log(req.body);
  /**
   * dont have to check email or password is empty here.
   * we handle it in authhelpers.js
   * **/
  // if (!email || !password) {
  //   res.status(422).json({
  //     message: "Please check if email or password was entered.",
  //   });
  //   return;
  // }
  // connect to db
  await dbConnect();
  /**
   * use email to find customer in collection if record exist get customer id
   * **/
  // const userExist = await TestUser.findOne({ email: email });
  // user User models
  const userExist = await User.findOne({ email: email });
  const customerExist = await Customer.findOne({ email: email });
  if (userExist) {
    res.status(422).json({ message: "User already exists!" });
    return;
  }
  // create new user
  // hash password

  const hashedPassword = await hashPassword(password);

  // const newUser = await TestUser.create({
  //   email,
  //   password: hashedPassword,
  // });

  // user User models: get customer id
  const newUser = await User.create({
    email,
    password: hashedPassword,
  });
  /**
   * check if there is a data entry in customer collection with the email the user entered
   * in the register form/page
   * **/
  if (newUser) {
    if (customerExist) {
      // update customer with user id
      customerExist.user = userExist._id;
      // update user with customer id
      userExist.customer = customerExist._id;
      await Promise.all([customerExist.save(), userExist.save()]);
    }
    // if we are successful at creating new user
    // redirect to log in page
    // server console/cli in vs code
    // console.log("newUser", newUser);
    res.status(200).json({ message: "User Created!", user: newUser });
  } else {
    res.status(422).json({ message: "How did we get here?" });
  }
}

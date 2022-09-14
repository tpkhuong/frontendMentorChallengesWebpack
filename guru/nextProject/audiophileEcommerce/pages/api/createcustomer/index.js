/**
 * make a call to this api in showordermodal func in helpers.js
 * **/

import User from "../../../models/Users";
import Customer from "../../../models/Customers";

export default async function customerHandler(req, res) {
  /**
   * we want to use email and look in user collection if there is a user record with the
   * same email. if there is, get user id and add to customer record/collection
   * **/
  console.log(req.body);
}

export default async function testcall(req, res) {
  console.log("this is req.body from /apr/testcall", req.body);
  console.log("Hello all");
  res.status(200).json({ message: "We got the data!" });
}

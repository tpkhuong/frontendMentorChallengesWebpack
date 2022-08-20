export default function testcall(req, res) {
  console.log(req.body);
  console.log("Hello all");
  res.status(200).json({ message: "We got the data!" });
}

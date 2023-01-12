// desc get user
// route GET /api/users
// private access

function getUsers(req, res) {
  res.status(200).json({ message: "Get user" });
}
// desc Set user
// route POST /api/users
// private access

function createUser(req, res) {
  console.log(req.body);
  res.status(200).json({ message: "create user" });
}
// desc Update user
// route PUT /api/users/:id
// private access

function updateUser(req, res) {
  res.status(200).json({ message: `update user ${req.params.id}` });
}
// desc delete user
// route DELETE /api/users/:id
// private access

function deleteUser(req, res) {
  res.status(200).json({ message: `delete user ${req.params.id}` });
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

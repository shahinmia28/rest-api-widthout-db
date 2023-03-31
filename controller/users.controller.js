let users = require("../model/users.model");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllUsers = (req, res) => {
  res.status(200).send(users);
};
// create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).send(users);
};

// update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.email = email;
    });
  res.status(200).send(users);
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(200).send(users);
};
module.exports = { getAllUsers, createUser, updateUser, deleteUser };

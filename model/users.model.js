const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "shahin mia",
    email: "shahin@gmail.com",
  },
  {
    id: uuidv4(),
    name: "kakole",
    email: "kakole@gmail.com",
  },
  {
    id: uuidv4(),
    name: "hafsa",
    email: "hafsa@gmail.com",
  },
];
module.exports = users;

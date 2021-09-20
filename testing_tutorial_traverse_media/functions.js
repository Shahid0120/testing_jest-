const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  createUser: () => {
    const user = { firstName: "Shahid" };
    user["lastName"] = "Hussain";
    return user;
  },
  containerWeight: () => {
    return 1600;
  },
  fetchUser: () => 
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error")
};

module.exports = functions;

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  createUser : () => {
      const user = {firstName: "Shahid"}
      user["lastName"] = "Hussain";
      return user;
  },
  containerWeight: () => {
      return 1600;
  }
};

module.exports = functions;


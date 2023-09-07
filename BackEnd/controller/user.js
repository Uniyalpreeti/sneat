const { SuccessResponse, ErrorResponse } = require("../utils/messageResponse");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const newPassword = bcrypt.hash(password, salt);

  const findEmail = await User.findOne({
    email: email,
  });

  try {
    if (!findEmail) {
      throw "Email already exist!";
    } else {
      if (password === confirmPassword) {
        const userlogin = await User.create({
          email: email,
          password: newPassword,
        });
        return SuccessResponse(res, 200, userlogin, "User created succesfully");
      }
    }
  } catch (error) {
    return ErrorResponse(res, error, 400);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findEmail = await User.findOne({
      email: email,
    });
    if (!findEmail) {
      throw "User doen't exist!";
    } else {
      const matchPassword = bcrypt.compareSync(password, findEmail.password);
      return SuccessResponse(res, 200, matchPassword, "Login succesfully");
    }
  } catch (error) {
    return ErrorResponse(res, error, 400);
  }
};

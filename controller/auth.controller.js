const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User')
const ApiError = require('../utils/Errors/ApiError')
const bcrypt = require("bcryptjs")

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  };

  
const comparePassword = async (inputPassword, userPassword) => {
  let validPassword = await bcrypt.compare(inputPassword, userPassword);
  return validPassword;
};

exports.allUser = async (req, res, next)=>{
  try {

    const allUser = await User.find()

    // let token = signToken(User._id);
    res.status(200).json({
      status: "success",
      message: allUser,
      // token
    })
    
  } catch (error) {
    next(error)
  }
}
exports.register = async (req, res, next)=>{
    try {
        //find if user already exist
         const { body } = req;
        const userEmailExist = await User.findOne({ email: body.email });
        if (userEmailExist) {
          return next(
            new ApiError(
              `${req.body.email} has already been taken try a different email`,
              400
            )
          );
        }
        // const userNameExist = await User.findOne({ username: req.body.username });
        // if (userNameExist) {
        //   return next(
        //     new ApiError(`${req.body.username} already exist, try another username`)
        //   );
        // }
        // console.log(body);
       
        // const user = new User({
        //   firstname: body.firstname,
        //   lastname: body.lastname,
        //   username: body.username,
        //   email: body.email,
        //   gender: body.gender,
        //   phonenumber: body.phonenumber,
        //   nationality: body.nationality,
        //   password: body.password,
        //   confirmPassword: body.confirmPassword,
          
        // });
    
        // await user.save();

        const detail = await User.create(body)
        let token = signToken(detail._id);
        res.status(201).json({
          status: 'success',
          message: detail,
          token
          
        });
      } catch (error) {
        next(error);
      }
}

exports.login = async (req, res, next) => {
    try {
       const { body } = req;
      const user = await User.findOne({ email: body.email });
      // console.log(req.headers)
      if (!user) {
        return next(
          new ApiError(
            `${body.email} does not exist, please create an account`,
            404
          )
        );
      }
  
      const validPassword = await comparePassword(
        body.password,
        user.password
      );
      // console.log(validPassword);
  
      if (!validPassword) {
        return next(new ApiError('invalid details', 404));
      }
  
      let token = signToken(user._id);
      // console.log(token)
  
      res.status(200).json({
        status: 'success',
        message: user,
        token,
      });
    } catch (error) {
      next(error);
    }
  };

  exports.currentUser = (req, res, next)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
      });
  }
 

  exports.authorization = async (req, res, next) => {
    try {
      let token;
  
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
      }
      // console.log(req)
      if (!token) {
        return next(new ApiError('please login to get access', 401));
      }
  
      let decode = await jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
  
      let currentUser = await User.findById({ _id: decode.id });
  
      if (!currentUser) {
        return next(new ApiError('unauthorized user', 401));
      }
  
      req.user = currentUser;
      next();
    } catch (error) {
      next(error);
    }
  };

  exports.roles = (...roles) => {
  // role [admin, user, guest]
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ApiError('unathorized access', 403));
    }
    next();
  };
};
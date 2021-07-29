const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum:['user', 'admin', 'guest'],
    default: 'user'
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
   nationality: {
    type: String,
    required: true,
  },
  //   imgUrl: {
  //     type: String,
  //     required: false,
  //   },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function(next){
  try{
    this.password = await bcrypt.hash(this.password, 10)
    return next()
  }catch(error){
    next(error)
  }
})

module.exports = User = mongoose.model('users', UserSchema);

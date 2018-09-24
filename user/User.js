var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  roll_no: String,
  batchyr:String,
  phone:String,
  check:String,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

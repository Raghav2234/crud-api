var mongoose = require('mongoose');  
var OrderSchema = new mongoose.Schema({  
  name: String,
  phone: String,
  address: String,
  amount:String,
  created: { type: Date, default: Date.now },
  accepted: Boolean
});
mongoose.model('Order', OrderSchema);

module.exports = mongoose.model('Order');

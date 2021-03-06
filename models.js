var Mongoose = require('mongoose');


var inventorySchema = Mongoose.Schema({
  item_name: String,
  status: String,
  modified_by: String,
  red: String,
  yellow: String,
  orange: String,
  last_modified: {type: Date, default: Date.now}
});

exports.Item = Mongoose.model('Item', inventorySchema);
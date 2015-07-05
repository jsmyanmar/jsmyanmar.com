var mongoose = require("mongoose");
var config;

try {
  config = require("../config.json");
} catch (e) {
  console.error(e);
} finally {
  mongoose.connect(config.db.url+ config.db.name);
}

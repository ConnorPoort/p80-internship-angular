
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var WebsiteSchema = new Schema({
  name: String,
  url: String,
  visable:{
    type: Boolean,
  default: false}
});
var Website = mongoose.model('Website', WebsiteSchema);

/*
function getAll() {
  Website.find()
}
function getOne(err, id) {
if(err){throw err}
  Website.find(id)
}
function findAndDelete(err, id) {
getOne(id).delete()
}
function findAndUpdate(err, id) {

}
*/

// make this available to our users in our Node applications
module.exports = Website;

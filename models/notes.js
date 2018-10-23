// console.log("notes is connected");

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteschema = new Schema({
    title: String,
    body: String
});

var note = mongoose.model("note", noteschema);

module.exports = note;
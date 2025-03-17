const mongoose = require("mongoose");

const Studentschema = new mongoose.Schema({
    id: {trpe: String, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    status: {type:String, enum:["Active", "Inactive"], default: "Active"},
});

module.exports = mongoose.model("student", Studentschema);
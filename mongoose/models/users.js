const mongoose = require("mongoose");

const users = new mongoose.Schema({
  _id: String,
  name: String,
  age: {
    type: Number,
    validate: {
      validator: (val) => val >= 18 && val <= 50,
      message: (props) => `${props.value} is not between 18 and 50`,
    },
  },
  pos: String,
  balance: Number,
  due: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

//! User defined methods on whole schema
users.methods.greet = function () {
  console.log(`USER: ${this.name}`);
};

//! User defined methods on custom fns
users.statics.findByName = function (name) {
  return this.find({ name: name });
};

//! Virtuals
users.virtual("namedID").get(function () {
  return `<${this._id}>|${this.name}`;
});

//! Middleware that runs everytime data is saved to database
// users.pre  - happens before save
// users.post - happens after save
users.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", users);

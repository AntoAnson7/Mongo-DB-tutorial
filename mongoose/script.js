const mongoose = require("mongoose");
const User = require("./models/users");

const usr_in = {
  _id: "yu657363",
  name: "Gomez",
  age: 19,
  pos: "Student",
  balance: 1000,
  due: 5000,
};

mongoose
  .connect("mongodb+srv://antoanson:Mikha%402011@mongotut.xcuaj4v.mongodb.net/")
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(err));

const createUser = (user) => {
  User.create(user)
    .then(() => console.log("saved"))
    .catch((err) => console.log(err.message));
};
//! Various ways to update values:
const altUpdate = async (id, name) => {
  try {
    const val = await User.updateOne({ _id: id }, { name: name });
    console.log(val);
  } catch (e) {
    console.log(e.message);
  }
};

const updateUser = async (id, bal) => {
  const update = await User.findByIdAndUpdate(id, {
    balance: bal,
    updatedAt: Date.now(),
  });
  console.log(update);
};

const updateUsingFind = async (id, name) => {
  try {
    const val = await User.findOne({ _id: id });
    val.name = name;
    val.save();
  } catch (e) {
    console.log(e.message);
  }
};
//! ******************************************

const findByIdorName = (id, name = null) => {
  User.findOne({ _id: id }).then((user) => {
    console.log(user.name);
    user.greet();
    console.log(user.namedID);
  });
  if (name != null) {
    User.findByName(name).then((user) => {
      console.log(user);
    });
  }
};

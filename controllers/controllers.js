const User = require("../models/models");
const asyncHandler = require("express-async-handler");

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ count: users.length, Users: users });
  } catch (error) {
    res.json(error);
  }
};

exports.AddUser = asyncHandler(async (req, res) => {
  const { name, email, age, city, language } = req.body;

  if (!email || !name || !age || !city || !language) {
    res.status(400);

    throw new Error("All fields are required");
  } else {
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      res.status(400);
      throw new Error("Email already exists. Please provide a new email");
    } else {
      const userToAdd = await User.create(req.body);
      res.status(200).json(userToAdd);
    }
  }
});

exports.UpdateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, age, city, language } = req.body;

    if (!email || !name || !age || !city || !language) {
      res.status(400);
      throw new Error("All fields are required");
      
    } else {
      try {
        
        const userToUpdate = await User.findByIdAndUpdate({ _id: id }, {name,age,city,language});
      } catch (error) {
        res.status(400).json(error)
      }
      
    
    }
  } 
);

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userToDelete = await User.findByIdAndDelete(id);
    if (!userToDelete) {
      res.json({ msg: "Wrong id" });
    } else {
      res.json({ msg: `User with id ${id} deleted successfully` });
    }
  } catch (error) {
    res.json(error);
  }
};

const mongoose = require("mongoose");

const MongoDB_URL =
  "mongodb+srv://jaymannem21:jaymannem21@cluster0.06hrckl.mongodb.net/";

mongoose
  .connect(MongoDB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection failed", error);
  });

// user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// user model
const User = mongoose.model("User", userSchema);

async function runQueries() {
  try {
    // create a new document
    // const newUser = new User({
    //   name: "mannem reddy",
    //   email: "mannemreddy@gmail.com",
    //   age: 25,
    //   isActive: true,
    //   tags: ["Software Developer"]
    // });

    // await newUser.save();
    // console.log("created a new user", newUser);

    // get all users
    // const allUsers = await User.find({});
    // console.log(allUsers);

    // get in-active users
    // const getInActiveUsers = await User.find({isActive: false});
    // console.log(getInActiveUsers)

    // get first user
    // const getKumarUser = await User.findOne({name: "kumar"});
    // console.log(getKumarUser)

    // get only name and email
    // const getNameAndEmailOnly = await User.find({}, "name email");
    // console.log(getNameAndEmailOnly)

    // find users by using _id
    // const findUserById = await User.findById("69501faf1b7210933a3395d1");
    // console.log(findUserById)

    // get last created user
    // const getUser = await User.findById(newUser._id);
    // console.log(getUser)

    // include name and email, exclude_id
    // const
    // getUsers = await User.find().select("name email -_id");
    // console.log(getUsers);

    // get limited users
    // const users = await User.find().select("name email -_id").limit(5).skip(2);
    // console.log(users)

    // get users in decending order
    // const decusers = await User.find().select("name age -_id").sort({age: -1});
    // const aseusers = await User.find().select("name age -_id").sort({age: 1});
    // console.log(aseusers)

    // count documents
    // const totalDocs = await User.countDocuments({});
    // const OlderUsers = await User.countDocuments({ age: {$gt: 20}});
    // const inActiveUsers = await User.countDocuments({isActive: false});

    // console.log('totalDocs', totalDocs)
    // console.log('OlderUsers', OlderUsers)
    // console.log('inActiveUsers', inActiveUsers)

    // Delete documents
    // const deleteUser = await User.deleteMany({name: "mannem reddy"});
    // console.log(deleteUser)

    // find by id and delete
    // const findByIdAndDelete = await User.findByIdAndDelete("69502b4cc48df6828e0e1ff6");
    // console.log(findByIdAndDelete)

    // Update documents
    // const updateUser = await User.findByIdAndUpdate(
    //   "695022897b98150a12195120",
    //   {
    //     $set: { age: 2, isActive: false },
    //     $push: { tags: "updated" },
    //   },
    //   { new: true }
    // );

    // console.log(updateUser);
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueries();

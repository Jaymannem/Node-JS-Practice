const Course = require("../models/Courses");

async function addCourse(req, res) {
  try {
    const formData = req.body;
    const newCourse = await Course.create(formData);

    res.status(201).json({
      status: true,
      message: "course created successfully!",
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "failed to add course",
    });
  }
}

async function getAllCourses(req, res) {
  try {
    const books = await Course.find({});
    if(books.length > 0) {
      res.status(200).json({
        status: true, 
        message: "Books fetched successfully", 
        data: books
    })
    } else {
      res.status(404).json({
        status: false, 
        message: "No books found", 
        data: books
    })
    }
  } catch (error) {
    console.log("error", error)
    res.status(500).json({
      status: false,
      message: "failed to fetch courses",
    });
  }
}

async function getSingleCourse(req, res) {}

async function updateCourse(req, res) {}

async function deleteCourse(req, res) {}

module.exports = {
  addCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};

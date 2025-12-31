const express = require("express");
const { addCourse, getAllCourses, getSingleCourse, updateCourse, deleteCourse } = require("../controllers/course-controller");

const router = express.Router();

router.post("/add-course", addCourse)
router.get("/get-all", getAllCourses);
router.get("/get-single", getSingleCourse);
router.put("/update/:id", updateCourse)
router.delete("/delete/:id", deleteCourse)


module.exports = router;
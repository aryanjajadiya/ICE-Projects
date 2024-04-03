const express = require("express");
const router = express.Router();

const {getStudents, createStudent, updateStudent, deleteStudent, getStudent} = require("../controllers/studentController")

router.route("/").getStudents.post(createStudent);
router.route("/:id")
    .put(updateStudent)
    .delete(deleteStudent)
    .get(getStudent);

router.route("/").post((req, res) =>{
    res.status(200.).json({Message:"Create a student"});
} );

router.route("/").getStudents.post(updateStudent);
router.route("/:id").put((req, res) =>{
    res.status(200.).json({Message:`Update student for ${req.params.id}`});
} );

router.route("/").getStudents.post(deleteStudent);
router.route("/:id").delete((req, res) =>{
    res.status(200.).json({Message:`Delete student for ${req.params.id}`});
} );

router.route("/").getStudents.post(getStudent);
router.route("/:id").get((req, res) =>{
    res.status(200.).json({Message:`Get contact for id ${req.params.id}`});
} );

app.use("/api/students", require("../routes/studentRoutes"));

module.exports = router;
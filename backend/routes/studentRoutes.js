const express = require("express");
const Student = require("../models/student");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

//Add Student
router.post("/", protect, async (req, res) => {
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    }catch (error){
        res.status(500).json({error: error.message});
    }
    });

    //Get All Students
    router.get("/", protect, async (req, res) => {
        try{
            const students = await Student.find();
            res.status(200).json(students);
        }catch (error){
            res.status(500).json({error: error.message});
        }
    });

    //Edit Student
    router.put("/:id", protect, async (req, res) => {
        try{
            const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(student);
        }catch (error){
            res.status(500).json({error: error.message});
        }
    });

    //Delete Student
    router.delete("/:id", protect, async (req, res) => {
        try{
            await Student.findByIdAndDelete(req.params.id);
            res.json({message: "Student deleted successfully"});
        }catch (error){
            res.status(500).json({error: error.message});
        }   
    });

    router.patch("/:id/status", protect, async (req, res) => {
        try {
          const student = await Student.findById(req.params.id);
          if (!student) return res.status(404).json({ message: "Student not found" });
      
          // Toggle status
          student.status = student.status === "Active" ? "Inactive" : "Active";
          await student.save();
      
          res.json(student);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
      

    //Change Student status
    router.patch("/:id/status", protect, async (req, res) => {
        try{
            const student = await Student.findById(req.params.id);
            if (!studnet) return res.status(404).json({message: "Student not found"});

            studnet.status = studnet.status === "Active" ? "Inactive" : "Active";
            await student.save();

            res.json(student);
        }catch (error){
            res.status(500).json({error: error.message});
        }
    });

    module.exports = router;
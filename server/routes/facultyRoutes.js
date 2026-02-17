const express = require("express");
const Faculty = require("../models/Faculty");
const upload = require("../middleware/upload");
const verifyToken = require("../middleware/auth");

const router = express.Router();

/* GET ALL FACULTY */
router.get("/", async (req, res) => {
  const faculty = await Faculty.find().sort({ createdAt: -1 });
  res.json(faculty);
});

/* CREATE FACULTY (Admin Only) */
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const newFaculty = new Faculty({
      name: req.body.name,
      department: req.body.department,
      designation: req.body.designation,
      research: req.body.research,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (error) {
    res.status(500).json({ message: "Error creating faculty" });
  }
});

/* UPDATE FACULTY (Admin Only) - NEW ROUTE */
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { name, department, designation, research } = req.body;
    let updateData = { name, department, designation, research };

    // If a new image is uploaded, update the image path
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedFaculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } // This returns the updated document
    );

    if (!updatedFaculty) {
      return res.status(404).json({ message: "Faculty member not found" });
    }

    res.json(updatedFaculty);
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Error updating faculty" });
  }
});

/* DELETE */
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: "Faculty deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting faculty" });
  }
});

module.exports = router;

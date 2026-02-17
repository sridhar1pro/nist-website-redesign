const express = require("express");
const Lab = require("../models/Lab");
const upload = require("../middleware/upload");
const verifyToken = require("../middleware/auth");
const router = express.Router();

/**
 * GET LABS
 * Supports: 
 * 1. All labs (for Admin) -> /api/labs
 * 2. By Department -> /api/labs?dept=Computer Science
 */
router.get("/", async (req, res) => {
  try {
    const { dept } = req.query;
    let query = {};

    if (dept) {
      // Case-insensitive exact match for department names
      query.department = { $regex: new RegExp("^" + dept + "$", "i") };
    }

    const labs = await Lab.find(query).sort({ createdAt: -1 });
    res.json(labs);
  } catch (error) {
    console.error("Fetch Labs Error:", error);
    res.status(500).json({ message: "Error fetching labs" });
  }
});

/**
 * CREATE LAB (Admin Only)
 */
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, department, description } = req.body;
    
    // Validate required fields
    if (!title || !department) {
      return res.status(400).json({ message: "Title and Department are required" });
    }

    const newLab = new Lab({
      title,
      department,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newLab.save();
    res.status(201).json(newLab);
  } catch (error) {
    console.error("Lab creation error:", error);
    res.status(500).json({ message: "Error creating lab" });
  }
});

/**
 * UPDATE LAB (Admin Only) 
 * Added this route to fix the 404 error on update button click
 */
router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const { title, department, description } = req.body;
    let updateData = { title, department, description };

    // Update image path only if a new file is uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    // Use findByIdAndUpdate to target the specific lab ID sent from the frontend
    const updatedLab = await Lab.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true } // Ensures the function returns the updated document rather than the old one
    );

    if (!updatedLab) {
      return res.status(404).json({ message: "Lab not found" });
    }

    res.json(updatedLab);
  } catch (error) {
    console.error("Lab update error:", error);
    res.status(500).json({ message: "Error updating lab" });
  }
});

/**
 * DELETE LAB (Admin Only)
 */
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deletedLab = await Lab.findByIdAndDelete(req.params.id);
    if (!deletedLab) return res.status(404).json({ message: "Lab not found" });
    res.json({ message: "Lab deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting lab" });
  }
});

module.exports = router;
const upload = require("../utils/multer");
const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const router = express.Router();
const News = require("../models/News");

// CREATE news
router.post("/", protect, upload.single("image"), async (req, res) => {
  try {
    const news = await News.create({
  title: req.body.title,
  description: req.body.description,
  image: req.file ? `/uploads/${req.file.filename}` : "",
});
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

// UPDATE news
router.put("/:id", protect, upload.single("image"), async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        image: req.file
          ? `/uploads/${req.file.filename}`
          : req.body.image,
      },
      { new: true }
    );

    res.json(updatedNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE news
router.delete("/:id", protect, async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

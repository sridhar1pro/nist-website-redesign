const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// Import Routes
const newsRoutes = require("./routes/newsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const labRoutes = require("./routes/labRoutes");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nist-website-redesign-ymmc.vercel.app"
    ],
    credentials: true,
  })
);

app.use(express.json());

// Static Folder for File Uploads
// This allows the frontend to access images at http://localhost:5000/uploads/filename.jpg
app.use("/uploads", express.static("uploads")); 

// Routes
app.use("/api/news", newsRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/labs", labRoutes);

app.get("/", (req, res) => {
  res.send("NIST University Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
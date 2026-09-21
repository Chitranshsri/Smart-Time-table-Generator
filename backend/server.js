const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/subjects", require("./routes/subjectRoutes"));
app.use("/api/teachers", require("./routes/teacherRoutes"));
app.use("/api/classes", require("./routes/classRoutes"));
app.use("/api/timetable", require("./routes/timetableRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/teacher-timetable", require("./routes/teacherTimetableRoute"));

// Leave management
app.use("/api/leaves", require("./routes/leaveRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Root Health Check Route
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Smart Timetable Generator Backend REST API is running live!",
    database: "MongoDB Atlas Connected",
    author: "Chitransh Srivastava"
  });
});

// Serve frontend only if dist exists
const fs = require("fs");
const distPath = path.join(__dirname, "../frontend/dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}


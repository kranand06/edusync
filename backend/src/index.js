import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.config.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();

const app = express();

// CORS middleware setup at the very top
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));


app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

// API routes
app.use("/api/auth", authRoute);

// Health check route
app.get("/", (req, res) => {
  res.send("EduSync backend is running ✅");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port: ${port}`);
});

connectDB()
  .then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });

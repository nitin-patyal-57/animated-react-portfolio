import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  console.log("MongoDB connected")
  .then(() => {
    app.listen(4000, () =>
      console.log("Backend running on http://localhost:4000")
    );
  })
  .catch(err => console.log(err));

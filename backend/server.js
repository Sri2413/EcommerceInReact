const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB connection error:", err));

const ecommercecollectionsSchema = new mongoose.Schema({
  img: String,
  description: String,
});

const ecommercecollection = mongoose.model(
  "ecommercecollection",
  ecommercecollectionsSchema
);

app.get("/api/ecommercecollections", async (req, res) => {
  try {
    const ecommercecollections = await ecommercecollection.find();
    res.json(ecommercecollections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

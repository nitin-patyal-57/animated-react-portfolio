import express from "express";

const router = express.Router();

router.post("/ca", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;

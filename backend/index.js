// backend/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const path = require("path"); // ✅ REQUIRED

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

// ================= MIDDLEWARES =================
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));
app.use(express.json());

// ================= SERVE FRONTEND =================
// ✅ This must be OUTSIDE routes
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// ================= TEST ROUTES =================
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Frontend connected successfully 🚀",
  });
});

// ================= CONTACT API =================
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      success: false,
      error: "Email service failed",
    });
  }
});

// ================= REACT ROUTER FIX =================
// ✅ Must be LAST
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`✅ Backend server running on port ${PORT}`);
});

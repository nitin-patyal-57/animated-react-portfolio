// backend/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const path = require("path"); // keep path for serving frontend

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// ================= MIDDLEWARE =================
app.use(
  cors({
    origin: "https://animated-react-portfolio-16.onrender.com", // frontend URL
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// ================= TEST ROUTES =================
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Frontend connected successfully 🚀",
  });
});

// ================= CONTACT API =================
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // 1️⃣ Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  try {
    // 2️⃣ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (NOT normal password)
      },
    });

    // 3️⃣ Email content
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

    // 4️⃣ Send mail
    await transporter.sendMail(mailOptions);

    // 5️⃣ Response
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

// ================= SERVE FRONTEND =================
app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

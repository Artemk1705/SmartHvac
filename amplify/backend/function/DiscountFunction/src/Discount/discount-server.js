const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const serverless = require("serverless-http");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: process.env.AMAZON_HOST,
  port: process.env.AMAZON_PORT,
  secure: false,
  auth: {
    user: process.env.AMAZON_MAILER_USER,
    pass: process.env.AMAZON_MAILER_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP server connection error:", error);
  } else {
    console.log("SMTP server is ready to take our messages");
  }
});

app.post("/discount", (req, res) => {
  console.log("Received form data:", req.body);
  const { fullName, email, phone, city } = req.body;

  if (!email) {
    res.status(400).json({ success: false, error: "Email is required" });
    return;
  }

  const mailToUser = {
    from: "notification@smart-hvacus.com",
    to: email,
    subject: "Schedule Submitted Successfully",
    html: `
      <p>Thank you for scheduling a service. We will contact you shortly.</p>
      <p>Please note that this is an automated message, and there is no need to reply to it.</p>
    `,
  };

  const mailOptions = {
    from: "schedule-notification@smart-hvacus.com",
    to: "valllarisa76@gmail.com",
    subject: "New customer`s discount!",
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      City: ${city}
    `,
  };

  transporter.sendMail(mailToUser, (error, info) => {
    if (error) {
      console.error("Error sending user notification:", error.message);
    } else {
      console.log("User notification sent successfully:", info.response);
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error.message);
      res
        .status(500)
        .json({ success: false, error: "Error sending email: " + error });
    } else {
      console.log("Email sent successfully to admin:", info.response);
      res.status(200).json({
        success: true,
        message: "Service booking submitted successfully",
      });
    }
  });
});

app.use((err, req, res, next) => {
  if (err) {
    console.error("General error:", err.message);
    res
      .status(500)
      .json({ success: false, error: "General error: " + err.message });
  } else {
    next();
  }
});

module.exports = app;
module.exports.handler = serverless(app);

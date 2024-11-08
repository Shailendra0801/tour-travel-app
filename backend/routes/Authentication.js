const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const SendMail = require("../utils/sendMail");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
}

// Sign Up route
router.post("/signup", [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("Valid email is required."),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long.")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, message: "User  already exists" });
        }

        // Hashing password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        // Creating verification token
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { 
            expiresIn: "1h", 
        });

        // Verification link
        const link = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

        // Sending confirmation mail
        const html = `<h2>Verify your email</h2>
                      <p>Click the link below to confirm your email:</p>
                      <a href="${link}">Verify Email</a>`;
        await SendMail(email, "Email Verification", html);

        res.status(201).json({ success: true, message: "Verification mail sent. Please check your inbox." });
    } catch (error) {
        console.error(error); // Logging error for debugging
        res.status(500).json({ success: false, error: error.message });
    }
});

// Route for email verification
router.get("/verify-email", async (req, res) => {
    const token = req.query.token;

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(400).json({ success: false, message: "User  not found" });
        }

        // Email verification
        user.isVerified = true;
        await user.save();

        res.json({ success: true, message: "Email verified successfully!" });
    } catch (error) {
        console.error(error); // Logging error for debugging
        res.status(500).json({ success: false, error: "Invalid or expired token!" });
    }
});

module.exports = router;
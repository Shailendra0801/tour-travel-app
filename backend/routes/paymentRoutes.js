import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";

const router = express.Router();

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET
});

// Creating order route
router.post("/create-order", async (req, res) => {
    try {
        const { amount } = req.body;

        // Input validation
        if (!amount || amount <= 0) {
            return res.status(400).json({ success: false, message: "Invalid amount" });
        }

        const options = {
            amount: amount * 100, // amount in paise
            currency: "INR",
            receipt: crypto.randomUUID(),
        };

        const order = await razorpayInstance.orders.create(options);
        res.status(201).json({
            success: true,
            orderId: order.id,
            amount: order.amount,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ success: false, message: "Failed to create order", error: error.message });
    }
});

// Verifying payment route
router.post("/verify-payment", async (req, res) => {
    const { orderId, paymentId, razorpaySignature, userId, packageId, vehicleType, numberOfTourists, totalPrice } = req.body;

    // Validate incoming request
    if (!orderId || !paymentId || !razorpaySignature) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(`${orderId}|${paymentId}`)
        .digest("hex");

    if (generatedSignature === razorpaySignature) {
        try {
            // Save booking to Firestore
            await db.collection("bookings").add({
                userId,
                packageId,
                vehicleType,
                numberOfTourists,
                totalPrice,
                paymentStatus: "verified",
                bookingDate: new Date(),
            });
            res.status(200).json({ success: true, message: "Payment verified and booking created" });
        } catch (error) {
            console.error("Error saving booking:", error);
            res.status(500).json({ success: false, message: "Failed to save booking", error: error.message });
        }
    } else {
        res.status(400).json({ success: false, message: "Payment verification failed" });
    }
});

export default router;
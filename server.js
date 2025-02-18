const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create Order
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise (smallest currency unit)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });
    res.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
});

// Verify Payment
app.post("/verify-payment", (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest("hex");

  console.log("Generated Signature:", generatedSignature);
  console.log("Received Signature:", razorpay_signature);

  if (generatedSignature === razorpay_signature) {
    res.json({ status: "success" });
  } else {
    res.status(400).json({ status: "failure" });
  }
});

const PORT = process.env.PORT || 5001; // Change from 5000 to 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

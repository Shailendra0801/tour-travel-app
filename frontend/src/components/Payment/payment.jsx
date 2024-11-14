import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const PaymentComponent = ({ totalAmount }) => {
  const [loading, setLoading] = useState(false);

  const createRazorpayOptions = (order) => ({
    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay Key ID
    amount: order.amount,
    currency: order.currency,
    name: "Tour Booking",
    description: "Tour and Travel Package",
    order_id: order.id,
    handler: async (response) => {
      const paymentData = {
        order_id: order.id,
        payment_id: response.razorpay_payment_id,
        signature: response.razorpay_signature,
      };
      try {
        const verifyResponse = await axios.post(
          process.env.REACT_APP_VERIFY_PAYMENT_URL,
          paymentData
        );
        if (verifyResponse.data.success) {
          alert("Payment successful and verified!");
        } else {
          alert("Payment verification failed!");
        }
      } catch (error) {
        console.error("Error verifying payment: ", error);
        alert("Payment verification encountered an error.");
      }
    },
    prefill: {
      name: "Your Name",
      email: "your.email@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3399cc",
    },
  });

  const handlePayment = async () => {
    const orderUrl = process.env.REACT_APP_CREATE_ORDER_URL;

    setLoading(true);
    try {
      // Create order
      const { data } = await axios.post(orderUrl, {
        amount: totalAmount,
        currency: "INR",
      });
      const { order } = data;

      // Razorpay options
      const options = createRazorpayOptions(order);
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error in payment: ", error);
      alert("Payment process encountered an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? "Processing..." : "Pay Now"}
    </button>
  );
};

PaymentComponent.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

export default PaymentComponent;
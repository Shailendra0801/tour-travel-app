import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const BookPackage = ({ packageId, vehicleType, numberOfTourists, totalPrice }) => {
  const [userId] = useState("user-id-placeholder"); // To be replaced with actual user ID from Firebase Auth

  const handleBooking = async () => {
    try {
      await addDoc(collection(db, "bookings"), {
        userId,
        packageId,
        vehicleType,
        numberOfTourists,
        totalPrice,
        status: "pending",
        bookingDate: Timestamp.now(),
      });
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking package:", error);
      alert("Booking failed.");
    }
  };

  return (
    <button onClick={handleBooking}>
      Confirm Booking
    </button>
  );
};

export default BookPackage;

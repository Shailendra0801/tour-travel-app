import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const VehicleSelection = ({ numberOfTourists }) => {
  const [vehicles, setVehicles] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchVehicles = async () => {
      const querySnapshot = await getDocs(collection(db, "vehicles"));
      const availableVehicles = querySnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(vehicle => vehicle.capacity >= numberOfTourists);
      setVehicles(availableVehicles);
    };
    fetchVehicles();
  }, [numberOfTourists]);

  return (
    <div>
      {vehicles.map(vehicle => (
        <div key={vehicle.id}>
          <h4>{vehicle.type}</h4>
          <p>Capacity: {vehicle.capacity}</p>
          <p>Price per day: ₹{vehicle.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleSelection;

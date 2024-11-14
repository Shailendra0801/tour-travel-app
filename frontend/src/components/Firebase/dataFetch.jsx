import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const TourPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const packagesCollection = collection(db, "packages");
      const packagesSnapshot = await getDocs(packagesCollection);
      const packagesList = packagesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPackages(packagesList);
    };

    fetchPackages();
  }, []);

  return (
    <div>
      <h2>Available Tour Packages</h2>
      {packages.map((pkg) => (
        <div key={pkg.id}>
          <h3>{pkg.name}</h3>
          <p>{pkg.description}</p>
          <p>Price: ₹{pkg.price}</p>
        </div>
      ))}
    </div>
  );
};

export default TourPackages;

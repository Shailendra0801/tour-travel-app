import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1 className="text-2xl font-bold p-5">Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Barapatthar"
          text="Barapatthar, just 2 km from Nainital, offers a serene retreat with lush surroundings 
          and exciting horse riding trails. Perfect for nature lovers and adventure seekers, it serves 
          as a gateway to panoramic views and tranquil trails leading to attractions like Tiffin Top. 
          Ideal for a short, peaceful escape from the bustling town Nainital."
           />

        <TripData
          image={Trip2}
          heading="Khurpa Tal"
          text="Khurpa Tal, nestled about 11 km from Nainital, is a hidden gem known for its emerald-green 
          waters surrounded by lush forests and terraced fields. A peaceful escape from the town's hustle, 
          this picturesque lake is ideal for photography, nature walks, and picnics, offering an untouched 
          and tranquil vibe for visitors." 
           />

        <TripData
          image={Trip3}
          heading="AC Cave"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. 
          Paris, its fashion houses, classical art museums including the Louvre and monuments like the 
          Eiffel Tower."
           />
      </div>
    </div>
  );
}

export default Trip;

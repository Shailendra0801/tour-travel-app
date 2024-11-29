import DestinationData from "./DestinationData";
import "./Destination.css";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see alot within a time frame</p>
      
      <DestinationData
        className="first-des"
        name="nainital"
        heading="Nainital"
        text="Nainital, nestled in the Kumaon hills of Uttarakhand, is a charming hill station 
        centered around the emerald Naini Lake. Surrounded by lush forests and snow-capped peaks, 
        it offers breathtaking natural beauty and a tranquil atmosphere. Visitors can enjoy a serene 
        boat ride on the lake, explore the vibrant Mall Road, or visit iconic spots like Naina Devi 
        Temple, Snow View Point, and Tiffin Top. Known for its colonial charm and pleasant weather, 
        Nainital is a favorite destination for families, honeymooners, and adventure seekers alike. 
        Its rich cultural heritage, scenic vistas, and countless attractions make it a must-visit gem of the Himalayas." 
        img1={Mountain1}
        img2={Mountain2}
        />

      <DestinationData
       className="first-des-reverse"
       heading="Mukteshwar"
       name="mukteshwar"
        text="Mukteshwar, a charming hill station located about 50 km from Nainital, offers breathtaking 
        views of the snow-clad Himalayas and lush green valleys. Known for its tranquility, Mukteshwar is 
        home to the famous Mukteshwar Dham Temple, perched atop a hill and steeped in history. Adventure 
        enthusiasts can enjoy trekking, rock climbing, and rappelling, while nature lovers can revel in 
        the serene beauty of dense forests and orchards. The sunrise and sunset here are particularly mesmerizing, 
        making Mukteshwar a perfect blend of adventure, spirituality, and natural splendor​." 
        img1={Mountain3}
        img2={Mountain4}
         />
    </div>
  );
};

export default Destination;

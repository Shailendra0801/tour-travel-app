import DestinationData from "./DestinationData";
import "./Destination.css";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/5.jpg";
import Mountain4 from "../../assets/8.jpg";

const DestinationService = () => {
  return (
    <div className="destination">
        <h1>Tour Packages</h1>
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

        <DestinationData
        className="first-des"
        heading="Himalaya Darshan"
        name="himalaya"
            text="The Himalayas in Uttarakhand offer an unparalleled experience of natural beauty, adventure, 
            and spiritual tranquility. Home to towering snow-capped peaks, lush green valleys, and pristine 
            rivers, this region attracts trekkers, nature lovers, and pilgrims alike. Destinations like the 
            Valley of Flowers, Kedarnath, and Auli provide breathtaking views and opportunities for hiking, 
            skiing, or simply soaking in the serene landscapes. Rich in biodiversity and culture, the Himalayas 
            here are also dotted with quaint villages and temples, offering a perfect blend of exploration and 
            relaxation for all types of travelers." 
            img1={Mountain3}
            img2={Mountain4}
         />

        <DestinationData
        className="first-des-reverse"
        heading="Ranikhet"
        name="ranikhet"
            text="Ranikhet, a serene hill station in Uttarakhand, enchants visitors with its lush green meadows, 
            dense pine forests, and breathtaking views of the Himalayas. Located about 60 km from Nainital, 
            it is known as the `Queen's Meadow`, offering a perfect blend of natural beauty and colonial charm. 
            Popular attractions include the Chaubatia Orchards, showcasing a variety of fruits, and the Jhula Devi Temple, 
            revered for its spiritual significance. Adventure enthusiasts can explore nearby trekking trails, while others 
            can enjoy the tranquility of nature walks or picnics amidst the pristine surroundings. Whether for relaxation 
            or exploration, Ranikhet provides an idyllic retreat​." 
            img1={Mountain3}
            img2={Mountain4}
         />

        <DestinationData
        className="first-des"
        heading="Lake Tour"
        name="lake"
            text="The Nainital Lake Tour is a captivating journey through the picturesque lakes of the Nainital district, offering a 
            mix of natural beauty, tranquility, and adventure. Starting with the iconic Naini Lake, surrounded by lush hills and 
            bustling marketplaces, visitors can enjoy boating, serene walks, or simply soak in the charm of the vibrant surroundings. 
            The tour extends to hidden gems like Bhimtal, Sattal, and Naukuchiatal, each with its unique charm—Bhimtal’s island, 
            Sattal’s interconnected lakes, and Naukuchiatal’s nine corners are highlights. Ideal for nature lovers and photographers, 
            the lake tour promises an unforgettable experience in the serene landscapes of Uttarakhand​." 
            img1={Mountain3}
            img2={Mountain4}
         />
    </div>
  );
};

export default DestinationService;

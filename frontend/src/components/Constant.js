// Sample JSON data (assuming it's imported or defined in the same file)
const toursData = {
"tours": [
  {
    "title": "nainital",
    "description" : "Nainital is a beautiful hill station located in the Kumaon region of Uttarakhand, famous for its picturesque Naini Lake. Visitors can enjoy boating, take a walk along Mall Road, and visit prominent spots like the Naina Devi Temple, Snow View Point, and Tiffin Top, offering spectacular views of the surrounding hills. The town is also home to many charming cottages and hotels with scenic views.",
    "heading": "Nainital Darshan",
    "locations": [
        "Bara Pathar",
        "Lover's Point",
        "Sukhatal",
        "Suicide Point",
        "Khurpatal View",
        "Naini View",
        "Sariatal",
        "Waterfall",
        "Himalaya Darshan",
        "Mansa Devi Temple"
    ],
    "prices": {
        "Alto": "Rs 3700/-",
        "Eco": "Rs 3900/-",
        "Tavera": "Rs 5300/-"
    },
    "image" : 'nainital.jpg'
    
  },
  {
    "title": "himalaya",
    "description" : "Situated about 8 km from Nainital, the Himalaya Darshan viewpoint offers panoramic views of the majestic Himalayan peaks. It is one of the most popular attractions in Nainital and a perfect spot for nature lovers. The view of the snow-clad peaks, surrounded by lush green hills and valleys, provides a serene and peaceful experience.",
    "heading": "Himalaya Darshan (2 Hours by Taxi)",
    "locations": [
        "Khurpatal View",
        "Bara Pathar",
        "Sukhatal",
        "Lover's Point",
        "Suicide Point",
        "Naini View Point",
        "Himalaya Darshan"
    ],
    "prices": {
        "Alto": "Rs 2800/-",
        "Eco": "Rs 3500/-",
        "Tavera": "Rs 4200/-"
    },
    "image" : 'nainital.jpg'
    },
    {
        "title": "lake",
        "description" : "Nainital and the surrounding areas are dotted with serene lakes, each offering unique experiences. For instance, Bhimtal, Sattal, and Naukuchia Tal are all famous for their tranquil settings and opportunities for boating and nature walks. Sattal, a group of seven interconnected lakes, is perfect for a day trip, while Bhimtal offers a large lake with an island in the middle​.",
        "heading": "Lake Tour (Half Day by Taxi)",
        "locations": [
          "Pines Salfi",
          "Bhowali",
          "Bhimtal",
          "Sat Tal",
          "Kamaltal",
          "Naldamayanti Tal",
          "Naukuchiatal",
          "Hanumangarh"
        ],
        "prices": {
          "Alto": "Rs 4500/-",
          "Eco": "Rs 5000/-",
          "Tavera": "Rs 6000/-"
        },
        "image" : 'nainital.jpg'
      },
      {
        "title": "mukteshwar",
        "description" : "Mukteshwar, located about 51 km from Nainital, is a peaceful hill station known for its panoramic views of the Himalayas. Attractions include the Mukteshwar Mahadev Temple, a revered spot for pilgrims, the Gorakhal Temple, and scenic tea gardens. It’s an excellent destination for those seeking solitude and natural beauty.",
        "heading": "Mukteshwar (6-7 Hours by Taxi)",
        "locations": [
          "Pines Salfi",
          "Bhowali",
          "Ghorakhal Temple",
          "Tea Garden",
          "Apple Garden",
          "Mukteshwar",
          "Chauli Ki Jali",
          "Shiv Mahadev Temple",
          "Rock Climbing",
          "Himalaya View"
        ],
        "prices": {
          "Alto": "Rs 4500/-",
          "Eco": "Rs 5000/-",
          "Tavera": "Rs 7000/-"
        },
        "image" : 'nainital.jpg'
      },
      {
        "title": "ranikhet",
        "description" : "Ranikhet, about 60 km from Nainital, is a charming hill station known for its natural beauty and quiet ambiance. The town is home to attractions like the Jhula Devi Temple, Army Museum, Kalika Temple, and lush golf courses. It is an ideal place for a peaceful retreat amidst pine forests and snow-capped mountains.",
        "heading": "Ranikhet",
        "locations": [
          "Pines Salfi",
          "Bhowali",
          "Kainchi Temple",
          "Frog Point",
          "River Kalika Temple",
          "Golf Ground",
          "Mankameshwari Temple",
          "Julla Devi",
          "Mansa Devi",
          "Shawal Factory"
        ],
        "prices": {
          "Alto": "Rs 4500/-",
          "Eco": "Rs 5000/-",
          "Tavera": "Rs 7000/-"
        },
        "image" : 'nainital.jpg'
    }

  ]
};
  


export default function getTourDetails(title) {
    return toursData.tours.find(tour => tour.title === title) || null;
}


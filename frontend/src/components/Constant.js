// Sample JSON data (assuming it's imported or defined in the same file)
const toursData = {
"tours": [
    {
    "title": "nainital",
    "heading": "Nainital Darshan",
    "description" : "Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi,",
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
    "description" : "Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi,",
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
        "heading": "lake",
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
        }
      },
      {
        "heading": "mukteshwar",
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
        }
      },
      {
        "title": "ranikhet",
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
        }
    }
]
};

export default function getTourDetails(title) {
    return toursData.tours.find(tour => tour.title === title) || null;
}


// Listing data extracted from the Airbnb reference page
// Source: https://airbnb-clone-umber-two.vercel.app/

export const LISTING = {
  id: "1599895892448055764",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment",
  location: "Candolim, Goa, India",
  rating: 4.97,
  reviewCount: 33,
  specs: {
    guests: 3,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  coordinates: {
    lat: 15.5175,
    lng: 73.77843,
  },
  host: {
    name: "Mirashya Homes",
    firstName: "Mirashya",
    isSuperhost: false,
    since: "2024",
    responseRate: "100%",
    responseTime: "within an hour",
    avatar: "/images/avatars/host.jpg",
    // Extended stats shown in Meet your host card (reference screenshots)
    totalReviews: 1463,
    hostRating: 4.68,
    yearsHosting: 2,
    bio: [
      { icon: "born", text: "Born in the 80s" },
      { icon: "school", text: "Where I went to school: NICMAR GOA" },
    ],
  },
  coHosts: [
    { name: "Sharath",           avatar: "/images/avatars/cohost_sharath.jpg",  initials: "S",  color: "#5C6BC0" },
    { name: "Aman Dev Pahwa",    avatar: "/images/avatars/cohost_aman.jpg",     initials: "A",  color: "#26A69A" },
    { name: "Maria Karen Priyanka", avatar: "/images/avatars/cohost_maria.jpg", initials: "M",  color: "#EF5350" },
    { name: "Simran",            avatar: "/images/avatars/cohost_simran.jpg",   initials: "Si", color: "#AB47BC" },
    { name: "Pallavi",           avatar: "/images/avatars/cohost_pallavi.jpg",  initials: "P",  color: "#FF7043" },
    { name: "Sanyukta",          avatar: "/images/avatars/cohost_sanyukta.jpg", initials: "Sa", color: "#66BB6A" },
    { name: "Shruti",            avatar: null,                                   initials: "S",  color: "#8D6E63" },
    { name: "Amisha",            avatar: null,                                   initials: "A",  color: "#42A5F5" },
  ],
  description: {
    short: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
    full: `Escape to Amor de Goa by Mirashya Homes, a serene 1BHK retreat in the heart of Candolim—perfect for couples, families, solo travelers, and work-from-anywhere stays. Thoughtfully designed with modern comforts and a touch of Goan charm, this space blends relaxation with convenience.

🛁 Highlights You'll Love
• Private Jacuzzi for a relaxing unwind
• Cozy, stylish living space with modern interiors
• Private balcony for peaceful mornings & evenings
• Access to a tranquil shared swimming pool

🛏️ Comfort & Living
• Plush bedroom for restful sleep
• Bright, well-designed living area
• Clean bathroom with essential toiletries

🍳 Fully Equipped Kitchen
Cook with ease—includes cookware, utensils & appliances for short or long stays

📍 Prime Location – Candolim
• 10 mins to Candolim Beach
• Easy access to Baga, Calangute, Sinquerim & Fort Aguada
• Surrounded by cafés, restaurants, bars & supermarkets
• ~35–40 mins from MOPA Airport

✨ Amenities for a Perfect Stay
• High-speed Wi-Fi + dedicated workspace (WFH ready)
• Smart TV with streaming apps
• Housekeeping support
• Free parking
• Secure gated community with caretaker
• Pet-friendly 🐾

🌴 Ideal For
• Romantic getaways
• Family vacations
• Workations
• Peaceful staycations`,
  },
  highlights: [
    {
      icon: "LOCATION",
      title: "Great location",
      subtitle: "90% of recent guests gave the location a 5-star rating.",
    },
    {
      icon: "CHECKIN",
      title: "Self check-in",
      subtitle: "Check yourself in with the lockbox.",
    },
    {
      icon: "HOST",
      title: "Mirashya is a great host",
      subtitle: "Recent guests have rated their hosting highly.",
    },
    {
      icon: "CANCELLATION",
      title: "Free cancellation for 48 hours",
      subtitle: "Get a full refund if you change your mind.",
    },
  ],
  amenities: [
    // Kitchen
    { title: "Kitchen", icon: "COOKING", available: true, group: "Kitchen" },
    { title: "Refrigerator", icon: "FRIDGE", available: true, group: "Kitchen" },
    { title: "Microwave", icon: "MICROWAVE", available: true, group: "Kitchen" },
    { title: "Cooking basics", icon: "COOKING_BASICS", available: true, group: "Kitchen" },
    { title: "Dishes and silverware", icon: "DISHES", available: true, group: "Kitchen" },
    { title: "Freezer", icon: "FREEZER", available: true, group: "Kitchen" },
    { title: "Hot water kettle", icon: "KETTLE", available: true, group: "Kitchen" },
    { title: "Rice maker", icon: "RICE", available: true, group: "Kitchen" },
    // Bathroom
    { title: "Hot water", icon: "HOT_WATER", available: true, group: "Bathroom" },
    { title: "Hair dryer", icon: "HAIR_DRYER", available: true, group: "Bathroom" },
    { title: "Cleaning products", icon: "CLEANING", available: true, group: "Bathroom" },
    { title: "Body soap", icon: "SOAP", available: true, group: "Bathroom" },
    { title: "Shampoo", icon: "SHAMPOO", available: true, group: "Bathroom" },
    { title: "Conditioner", icon: "CONDITIONER", available: true, group: "Bathroom" },
    // Bedroom & laundry
    { title: "Washer", icon: "WASHER", available: true, group: "Bedroom and laundry" },
    { title: "Dryer", icon: "DRYER", available: true, group: "Bedroom and laundry" },
    { title: "Essentials", icon: "ESSENTIALS", available: true, group: "Bedroom and laundry" },
    { title: "Hangers", icon: "HANGERS", available: true, group: "Bedroom and laundry" },
    { title: "Bed linens", icon: "LINENS", available: true, group: "Bedroom and laundry" },
    { title: "Extra pillows and blankets", icon: "PILLOWS", available: true, group: "Bedroom and laundry" },
    { title: "Iron", icon: "IRON", available: true, group: "Bedroom and laundry" },
    // Entertainment
    { title: "TV", icon: "TV", available: true, group: "Entertainment" },
    // Family
    { title: "Crib", icon: "CRIB", available: false, group: "Family" },
    { title: "High chair", icon: "HIGH_CHAIR", available: false, group: "Family" },
    { title: "Children's books and toys", icon: "TOYS", available: false, group: "Family" },
    // Heating & cooling
    { title: "Air conditioning", icon: "AC", available: true, group: "Heating and cooling" },
    { title: "Ceiling fan", icon: "FAN", available: true, group: "Heating and cooling" },
    // Home safety
    { title: "Fire extinguisher", icon: "FIRE_EXTINGUISHER", available: true, group: "Home safety" },
    { title: "First aid kit", icon: "FIRST_AID", available: true, group: "Home safety" },
    { title: "Carbon monoxide alarm", icon: "CO_ALARM", available: false, group: "Home safety" },
    { title: "Smoke alarm", icon: "SMOKE_ALARM", available: false, group: "Home safety" },
    // Internet & office
    { title: "Wifi", icon: "WIFI", available: true, group: "Internet and office" },
    { title: "Dedicated workspace", icon: "WORKSPACE", available: true, group: "Internet and office" },
    // Outdoor
    { title: "Pool", icon: "POOL", available: true, group: "Outdoor" },
    { title: "Hot tub", icon: "JACUZZI", available: true, group: "Outdoor" },
    { title: "Private patio or balcony", icon: "BALCONY", available: true, group: "Outdoor" },
    // Parking & facilities
    { title: "Free parking on premises", icon: "PARKING", available: true, group: "Parking and facilities" },
    { title: "Gym", icon: "GYM", available: true, group: "Parking and facilities" },
    // Services
    { title: "Long-term stays allowed", icon: "LONGTERM", available: true, group: "Services" },
    { title: "Self check-in", icon: "LOCK_BOX", available: true, group: "Services" },
    { title: "Pets allowed", icon: "PETS", available: true, group: "Services" },
    { title: "Luggage dropoff allowed", icon: "LUGGAGE", available: true, group: "Services" },
    // Exterior
    { title: "Exterior security cameras on property", icon: "SURVEILLANCE", available: true, group: "Home safety" },
  ],
  // Shown on main page (top 10)
  topAmenities: [
    { title: "Mountain view", icon: "MOUNTAIN", available: false },
    { title: "Kitchen", icon: "COOKING", available: true },
    { title: "Wifi", icon: "WIFI", available: true },
    { title: "Dedicated workspace", icon: "WORKSPACE", available: true },
    { title: "Free parking on premises", icon: "PARKING", available: true },
    { title: "Pool", icon: "POOL", available: true },
    { title: "Hot tub", icon: "JACUZZI", available: true },
    { title: "Pets allowed", icon: "PETS", available: true },
    { title: "Exterior security cameras on property", icon: "SURVEILLANCE", available: true },
    { title: "Carbon monoxide alarm", icon: "CO_ALARM", available: false },
  ],
  photos: [
    { id: "2597711731", caption: "Living room", localPath: "/images/listing/photo_01_2597711731.jpg" },
    { id: "2597711755", caption: "Living room", localPath: "/images/listing/photo_02_2597711755.jpg" },
    { id: "2597711760", caption: "Living room", localPath: "/images/listing/photo_03_2597711760.jpg" },
    { id: "2481343372", caption: "Living room", localPath: "/images/listing/photo_04_2481343372.jpg" },
    { id: "2483661863", caption: "Living room", localPath: "/images/listing/photo_05_2483661863.jpg" },
    { id: "2481343147", caption: "Living room", localPath: "/images/listing/photo_06_2481343147.jpg" },
    { id: "2481343021", caption: "Living room", localPath: "/images/listing/photo_07_2481343021.jpg" },
    { id: "2483654732", caption: "Living room", localPath: "/images/listing/photo_08_2483654732.jpg" },
    { id: "2483654737", caption: "Living room", localPath: "/images/listing/photo_09_2483654737.jpg" },
    { id: "2483654777", caption: "Living room", localPath: "/images/listing/photo_10_2483654777.jpg" },
    { id: "2597712394", caption: "Kitchen", localPath: "/images/listing/photo_11_2597712394.jpg" },
    { id: "2597712388", caption: "Kitchen", localPath: "/images/listing/photo_12_2597712388.jpg" },
    { id: "2481343166", caption: "Bedroom", localPath: "/images/listing/photo_13_2481343166.jpg" },
    { id: "2483655537", caption: "Bedroom", localPath: "/images/listing/photo_14_2483655537.jpg" },
    { id: "2483655663", caption: "Bedroom", localPath: "/images/listing/photo_15_2483655663.jpg" },
    { id: "2483655705", caption: "Bedroom", localPath: "/images/listing/photo_16_2483655705.jpg" },
    { id: "2483655754", caption: "Bedroom", localPath: "/images/listing/photo_17_2483655754.jpg" },
    { id: "2483655793", caption: "Bedroom", localPath: "/images/listing/photo_18_2483655793.jpg" },
    { id: "2483656323", caption: "Bathroom", localPath: "/images/listing/photo_19_2483656323.jpg" },
    { id: "2483658418", caption: "Gym", localPath: "/images/listing/photo_20_2483658418.jpg" },
    { id: "2483658480", caption: "Gym", localPath: "/images/listing/photo_21_2483658480.jpg" },
    { id: "2483658491", caption: "Gym", localPath: "/images/listing/photo_22_2483658491.jpg" },
    { id: "2483658583", caption: "Gym", localPath: "/images/listing/photo_23_2483658583.jpg" },
    { id: "2483658630", caption: "Gym", localPath: "/images/listing/photo_24_2483658630.jpg" },
    { id: "2483681093", caption: "Exterior", localPath: "/images/listing/photo_25_2483681093.jpg" },
    { id: "2483681114", caption: "Exterior", localPath: "/images/listing/photo_26_2483681114.jpg" },
    { id: "2483681115", caption: "Exterior", localPath: "/images/listing/photo_27_2483681115.jpg" },
    { id: "2483681141", caption: "Exterior", localPath: "/images/listing/photo_28_2483681141.jpg" },
    { id: "2483681146", caption: "Exterior", localPath: "/images/listing/photo_29_2483681146.jpg" },
    { id: "2483681191", caption: "Exterior", localPath: "/images/listing/photo_30_2483681191.jpg" },
    { id: "2481343116", caption: "Pool", localPath: "/images/listing/photo_31_2481343116.jpg" },
    { id: "2483655024", caption: "Pool", localPath: "/images/listing/photo_32_2483655024.jpg" },
    { id: "2483655054", caption: "Pool", localPath: "/images/listing/photo_33_2483655054.jpg" },
    { id: "2481342975", caption: "Additional", localPath: "/images/listing/photo_34_2481342975.jpg" },
    { id: "2483654744", caption: "Additional", localPath: "/images/listing/photo_35_2483654744.jpg" },
    { id: "2483661799", caption: "Additional", localPath: "/images/listing/photo_36_2483661799.jpg" },
    { id: "2483661809", caption: "Additional", localPath: "/images/listing/photo_37_2483661809.jpg" },
    { id: "2483661849", caption: "Additional", localPath: "/images/listing/photo_38_2483661849.jpg" },
    { id: "2483661851", caption: "Additional", localPath: "/images/listing/photo_39_2483661851.jpg" },
    { id: "2483661855", caption: "Additional", localPath: "/images/listing/photo_40_2483661855.jpg" },
    { id: "2483661957", caption: "Additional", localPath: "/images/listing/photo_41_2483661957.jpg" },
    { id: "2483662009", caption: "Additional", localPath: "/images/listing/photo_42_2483662009.jpg" },
    { id: "2597711772", caption: "Additional", localPath: "/images/listing/photo_43_2597711772.jpg" },
  ],
  reviews: [
    {
      id: "r1",
      author: "Priya",
      avatar: null,
      date: "September 2025",
      rating: 5,
      comment:
        "Amazing stay! The jacuzzi was the highlight of our trip. The apartment is exactly as shown in photos, clean and well-maintained. Mirashya was very helpful and responsive.",
    },
    {
      id: "r2",
      author: "Rahul",
      avatar: null,
      date: "August 2025",
      rating: 5,
      comment:
        "Perfect location in Candolim. The pool and jacuzzi were a great addition. The apartment has all the amenities you need. Would definitely come back!",
    },
    {
      id: "r3",
      author: "Sneha",
      avatar: null,
      date: "August 2025",
      rating: 5,
      comment:
        "Lovely property with great interiors. The host was very responsive and check-in was smooth. Beach is just 10 minutes away. Highly recommend for couples.",
    },
    {
      id: "r4",
      author: "Arjun",
      avatar: null,
      date: "July 2025",
      rating: 5,
      comment:
        "Great place to stay in Goa! Clean, well-equipped kitchen, comfortable bed and the jacuzzi was amazing. Location is perfect - close to restaurants and nightlife.",
    },
    {
      id: "r5",
      author: "Kavya",
      avatar: null,
      date: "July 2025",
      rating: 5,
      comment:
        "Wonderful experience! The apartment is cozy, clean and has everything you need. The private jacuzzi was a perfect touch for our anniversary trip.",
    },
    {
      id: "r6",
      author: "Vikram",
      avatar: null,
      date: "June 2025",
      rating: 5,
      comment:
        "Very nice property in a gated community. Felt very safe. The gym and pool were great bonuses. Host was very accommodating with our requests.",
    },
  ],
  ratingBreakdown: {
    overall: 4.97,
    cleanliness: 4.9,
    accuracy: 4.9,
    checkIn: 5.0,
    communication: 5.0,
    location: 4.8,
    value: 4.9,
  },
  sleepingArrangements: [
    {
      room: "Bedroom",
      type: "1 double bed",
      imageId: "2481343166",
      localPath: "/images/listing/photo_13_2481343166.jpg",
    },
  ],
  houseRules: {
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    maxGuests: 3,
    noSmoking: true,
    noPets: false,
    noParties: true,
    quietHours: "10:00 PM - 8:00 AM",
    rules: [
      "Guest capacity should be respected. Unaccounted guests are not allowed.",
      "Pool timings are 9 am to 7pm. No eating/drinking/smoking near the pool area.",
      "The apartment has an inverter backup in case of any occasional power outages.",
      "Being located in a gated community, we don't allow loud music in the property.",
      "Early check-ins/Late checkouts are subject to availability and will be charged additionally.",
      "Linen (bed linen & towels) will be changed every 3 days.",
      "Check-in and Luggage assistance to be provided.",
      "Housekeeping Staff will be available between 9 am to 6 pm.",
    ],
  },
  pricing: {
    basePrice: 3500,
    currency: "₹",
    cleaningFee: 500,
    serviceFee: 700,
    extraGuestFee: 1000,
  },
};

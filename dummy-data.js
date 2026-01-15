const categories = [
  {
    name: "Skid Steers",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1055.png?v=16",
    link: "/listings/for-sale/skid-steers/1055",
  },
  {
    name: "Mini Excavators",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1033.png?v=16",
    link: "/listings/for-sale/mini-up-to-12000-lbs-excavators/1033",
  },
  {
    name: "Excavators",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1031.png?v=16",
    link: "/listings/for-sale/excavators/1031",
  },
  {
    name: "Forklifts",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1036.png?v=16",
    link: "/listings/for-sale/forklifts-lifts/1036",
  },
  {
    name: "Lifts",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1040.png?v=16",
    link: "/listings/for-sale/lifts/1040",
  },
  {
    name: "Dozers",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1025.png?v=16",
    link: "/listings/for-sale/dozers/1025",
  },
  {
    name: "Trenchers / Cable Plows",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1058.png?v=16",
    link: "/listings/for-sale/trenchers-slash-cable-plows/1058",
  },
  {
    name: "Cranes",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1015.png?v=16",
    link: "/listings/for-sale/cranes/1015",
  },
  {
    name: "Loader Backhoes",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1046.png?v=16",
    link: "/listings/for-sale/loader-backhoes/1046",
  },
  {
    name: "Wheel Loaders",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1060.png?v=16",
    link: "/listings/for-sale/wheel-loaders/1060",
  },
  {
    name: "Forestry Equipment",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1035.png?v=16",
    link: "/listings/for-sale/forestry-equipment/1035",
  },
  {
    name: "Drills",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1028.png?v=16",
    link: "/listings/for-sale/drills/1028",
  },
  {
    name: "Motor Graders",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1048.png?v=16",
    link: "/listings/for-sale/motor-graders/1048",
  },
  {
    name: "Sweepers / Broom Equipment",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1057.png?v=16",
    link: "/listings/for-sale/sweepers-slash-broom-equipment/1057",
  },
  {
    name: "Aggregate Equipment",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1001.png?v=16",
    link: "/listings/for-sale/aggregate-equipment/1001",
  },
  {
    name: "Telehandlers",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1038.png?v=16",
    link: "/listings/for-sale/telehandlers-lifts/1038",
  },
  {
    name: "Off-Highway Trucks",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1049.png?v=16",
    link: "/listings/for-sale/off-highway-trucks/1049",
  },
  {
    name: "Asphalt / Pavers / Concrete Equipment",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_1007.png?v=16",
  },
  {
    name: "Construction Attachments",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_81.png?v=16",
  },
  {
    name: "Dismantled Machines",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_400002.png?v=16",
  },
  {
    name: "Parts",
    img: "https://media.sandhills.com/CDN/Images/Icons/Categories/PNG/Machinery/Icon_400003.png?v=16",
  },
];

const manufacturers = [
  {
    name: "Caterpillar",
    categories: ["Skid Steers", "Excavators", "Dozers", "Wheel Loaders"],
    logo: "https://example.com/logos/caterpillar.png",
  },
  {
    name: "John Deere",
    categories: [
      "Skid Steers",
      "Mini Excavators",
      "Loader Backhoes",
      "Forestry Equipment",
    ],
    logo: "https://example.com/logos/johndeere.png",
  },
  {
    name: "Bobcat",
    categories: [
      "Skid Steers",
      "Mini Excavators",
      "Telehandlers",
      "Loader Backhoes",
    ],
    logo: "https://example.com/logos/bobcat.png",
  },
  {
    name: "Komatsu",
    categories: ["Excavators", "Dozers", "Motor Graders", "Wheel Loaders"],
    logo: "https://example.com/logos/komatsu.png",
  },
  {
    name: "Kubota",
    categories: [
      "Mini Excavators",
      "Skid Steers",
      "Drills",
      "Forestry Equipment",
    ],
    logo: "https://example.com/logos/kubota.png",
  },
  {
    name: "JLG",
    categories: ["Lifts", "Telehandlers", "Forklifts"],
    logo: "https://example.com/logos/jlg.png",
  },
  {
    name: "Terex",
    categories: ["Cranes", "Telehandlers", "Lifts", "Forklifts"],
    logo: "https://example.com/logos/terex.png",
  },
  {
    name: "Volvo",
    categories: ["Excavators", "Wheel Loaders", "Dozers", "Motor Graders"],
    logo: "https://example.com/logos/volvo.png",
  },
  {
    name: "Hitachi",
    categories: ["Excavators", "Dozers", "Wheel Loaders"],
    logo: "https://example.com/logos/hitachi.png",
  },
  {
    name: "CASE Construction",
    categories: ["Skid Steers", "Loader Backhoes", "Excavators", "Dozers"],
    logo: "https://example.com/logos/case.png",
  },
];

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const conditions = ["New", "Like New", "Used", "Refurbished"];

const locations = [
  "Dallas, TX",
  "Houston, TX",
  "Phoenix, AZ",
  "Denver, CO",
  "Chicago, IL",
  "Orlando, FL",
  "Sacramento, CA",
  "Nashville, TN",
  "Raleigh, NC",
  "Baton Rouge, LA",
];

const featuresByCategory = {
  "Skid Steers": ["Quick Attach", "High-Flow Hydraulics", "Enclosed Cab"],
  "Mini Excavators": ["Zero Tail Swing", "Rubber Tracks", "Aux Hydraulics"],
  Excavators: ["A/C Cab", "Auto Idle", "Backup Camera"],
  Dozers: ["PAT Blade", "GPS Ready", "ROPS Cab"],
  "Wheel Loaders": ["Joystick Steering", "Quick Coupler", "Load Assist"],
  Lifts: ["Platform Controls", "4WD", "Non-Marking Tires"],
  Forklifts: ["Side Shift", "Pneumatic Tires", "Propane Engine"],
  Telehandlers: ["Frame Leveling", "4WD", "Quick Attach"],
  Cranes: ["Load Moment Indicator", "Outriggers", "Enclosed Cab"],
  "Loader Backhoes": ["Extendahoe", "Pilot Controls", "4WD"],
};

const imagesByCategory = {
  "Skid Steers": [
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
  ],

  "Mini Excavators": [
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
    "https://images.unsplash.com/photo-1620825019627-46b88d3c7c61",
  ],

  Excavators: [
    "https://images.unsplash.com/photo-1501706362039-c6e80948c04d",
    "https://images.unsplash.com/photo-1606836591695-4d58a3ecb7a9",
  ],

  Dozers: [
    "https://images.unsplash.com/photo-1597008641621-1c3f77d5c9db",
    "https://images.unsplash.com/photo-1617191519105-d07b98d2a5a3",
  ],

  "Wheel Loaders": [
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    "https://images.unsplash.com/photo-1581091870627-3a87c7a1c1f8",
  ],

  Lifts: [
    "https://images.unsplash.com/photo-1590496793929-36417d3117a3",
    "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
  ],

  Forklifts: [
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
    "https://images.unsplash.com/photo-1616432043562-3671c0a3f8a3",
  ],

  Telehandlers: [
    "https://images.unsplash.com/photo-1617191519014-52c6dbbb6d35",
    "https://images.unsplash.com/photo-1617957743094-7b5e8c4e2eaa",
  ],

  Cranes: [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1597008642560-7e2ddc7b68c1",
  ],

  "Loader Backhoes": [
    "https://images.unsplash.com/photo-1601918774946-25832a4be0d6",
    "https://images.unsplash.com/photo-1590650153994-5e3bff7a8d21",
  ],
};

function generateProducts(count = 100) {
  const products = [];

  for (let i = 1; i <= count; i++) {
    const manufacturer = getRandomItem(manufacturers);
    const category = getRandomItem(manufacturer.categories);

    const year = randomBetween(2016, 2024);
    const hours =
      year >= 2023 ? randomBetween(50, 500) : randomBetween(800, 6500);

    const priceBase = {
      "Skid Steers": 45000,
      "Mini Excavators": 38000,
      Excavators: 110000,
      Dozers: 95000,
      "Wheel Loaders": 130000,
      Lifts: 65000,
      Forklifts: 42000,
      Telehandlers: 52000,
      Cranes: 210000,
      "Loader Backhoes": 75000,
    };

    const price = priceBase[category] + randomBetween(-15000, 20000);

    products.push({
      id: `P-${1000 + i}`,
      title: `${manufacturer.name} ${category.slice(
        0,
        -1
      )} Model ${randomBetween(200, 999)}`,
      category,
      manufacturer: manufacturer.name,
      model: `M${randomBetween(200, 999)}`,
      year,
      hours,
      condition: getRandomItem(conditions),
      price: price || 1000,
      location: getRandomItem(locations),
      images: imagesByCategory[category] || "",
      description: `Reliable ${category.toLowerCase()} built by ${
        manufacturer.name
      } for heavy-duty job site performance.`,
      features: featuresByCategory[category] || [],
      createdAt: new Date().toISOString(),
    });
  }

  return products;
}

module.exports = { categories, manufacturers, generateProducts };

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

module.exports = { categories, manufacturers };

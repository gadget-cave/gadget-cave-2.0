const products = [
  {
    name: "Wireless Earphones-CMF BY NOTHING",
    category: "Earphones",
    image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
    description: "High-quality sound and battery life.",
    price: "₹899",
    longDescription: "Enjoy crisp and clear sound with deep bass. Battery lasts up to 10 hours per charge.",
    extraImages: []
  },
  {
    name: "HEADPHONES-P9",
    category: "Headsets",
    image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
    description: "High quality, C-type charging",
    price: "₹699",
    longDescription: "",
    extraImages: []
  },
  {
    name: "Samsung Watch with Airpods",
    category: "Smartwatches",
    image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
    description: "Fitness tracker and call support.",
    price: "₹1199",
    longDescription: "",
    extraImages: []
  },
  {
    name: "CASIO G-SHOCK",
    category: "Watches",
    image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
    description: "Awesome quality, chain model.",
    price: "₹999",
    longDescription: "",
    extraImages: []
  },
  {
    name: "TRACKON - watch",
    category: "Watches",
    image: "https://i.ibb.co/sp6nVFHD/TRACKON-watch.jpg",
    description: "Awesome quality,trending model.",
    price: "₹599",
    longDescription: "",
    extraImages: []
  },
  {
    name: "Marshal Ember ANC - earpods",
    category: "Earphones",
    image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
    description: "High-quality sound,6 eartips,1 charging cable.",
    price: "₹999",
    longDescription: "",
    extraImages: []
  },
  {
    name: "MZ bluetooth speaker",
    category: "Speakers",
    image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
    description: "High-quality sound and trending model.",
    price: "₹699",
    longDescription: "",
    extraImages: []
  },
  {
    name: "HTC-trimmer",
    category: "Trimmers",
    image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
    description: "Awesome quality,latest arrivals.",
    price: "₹649",
    longDescription: "",
    extraImages: []
  },
  {
    name: "Magnet locking watch",
    category: "Watches",
    image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
    description: "Click more details☝️.",
    price: "₹749",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
      "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
    ]
  },
  {
    name: "MARSHALL headset",
    category: "Headsets",
    image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
    description: "High-quality sound and latest arrivals.",
    price: "₹949",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg"
    ]
  }
];
products.push(
  {
    name: "BOAT AIRBUDS",
    category: "Earphones",
    image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
    description: "Click more details☝️.",
    price: "₹749",
    longDescription: "500 mAh battery, wireless earpods, call time up to 5hr.",
    extraImages: [
      "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
      "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
    ]
  },
  {
    name: "Best Ever Combo",
    category: "Combo",
    image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
    description: "Click more details☝️.",
    price: "₹1499",
    longDescription: "Apple watch + P9 headset + airpods 2 + Random bag",
    extraImages: [
      "https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"
    ]
  },
  {
    name: "WATCH- LG GOLD",
    category: "Watches",
    image: "https://i.ibb.co/KjxM14sD/LG-GOLD-watch.jpg",
    description: "Click more details☝️.",
    price: "₹549",
    longDescription: "Awesome quality, latest arrivals",
    extraImages: [
      "https://i.ibb.co/sdkX47Kz/LG-GOLD-green.jpg"
    ]
  },
  {
    name: "BOAT Airdopes 600",
    category: "Earphones",
    image: "https://i.ibb.co/JjvhcFZt/BOAT-airdopes-600.jpg",
    description: "Click more details☝️.",
    price: "₹749",
    longDescription: "Wireless earphone, 500 mAh battery, call time up to 5hr",
    extraImages: [
      "https://i.ibb.co/5xT1pQ4R/BOAT-airdopes-600-black.jpg",
      "https://i.ibb.co/vxJsdnfB/BOAT-airdopes-600-blue.jpg"
    ]
  },
  {
    name: "Samsung GALAXY BUDS 2 PRO",
    category: "Earphones",
    image: "https://i.ibb.co/j9thw23H/Samsung-GALAXY-BUDS-2-PRO.jpg",
    description: "Click more details☝️.",
    price: "₹849",
    longDescription: "Touch operation, Type-C charging, 700mAh battery, Ceramic finish, Lossless connectivity.",
    extraImages: [
      "https://i.ibb.co/ksq6jSHQ/galaxy-buds-white.jpg",
      "https://i.ibb.co/Z63zTgRN/galaxy-buds-black.jpg"
    ]
  },
  {
    name: "Ultra Smart Watch Special Edition",
    category: "Smartwatches",
    image: "https://i.ibb.co/xq4Tr7FS/Ultra-smart-watch-special-edition.jpg",
    description: "Click more details☝️",
    price: "₹749",
    longDescription: "5+ menu styles, FitPro app, wireless charging, etc.",
    extraImages: [
      "https://i.ibb.co/qLk2hhLv/ultra.jpg"
    ]
  },
  {
    name: "MASSAGE GUN",
    category: "Other Products",
    image: "https://i.ibb.co/fYbbQTbc/MASSAGE-GUN.jpg",
    description: "Percussion Massage Gun with Interchangeable Heads",
    price: "₹749",
    longDescription: "",
    extraImages: []
  },
  {
    name: "Premium Airpods Pro2",
    category: "Earphones",
    image: "https://i.ibb.co/Xrv0n01C/apple-airpod-pro-2-mix.jpg",
    description: "Click more details☝️",
    price: "₹799",
    longDescription: "5-8 hrs battery, metal engraving, sensors, premium build, 598mAh battery, Extra buds",
    extraImages: [
      "https://i.ibb.co/XxD8StC8/apple-airpod-pro2-black.jpg",
      "https://i.ibb.co/LhZRNFQf/apple-airpod-pro2-white.jpg"
    ]
  },
  {
    name: "YIXIAO Powerbank",
    category: "Power Banks",
    image: "https://i.ibb.co/qYxy1H2s/powerbank-1.jpg",
    description: "Click more details☝️",
    price: "₹1399",
    longDescription: "10,000mAh, Dual input port, New arrival",
    extraImages: [
      "https://i.ibb.co/PZ42nSxb/power-bank-1-0.jpg",
      "https://i.ibb.co/cMX6WDB/power-bank-1-1.jpg"
    ]
  },
  {
    name: "HTC TRIMMER (New)",
    category: "Trimmers",
    image: "https://i.ibb.co/jvwSjGPs/htc-trimmer-1.jpg",
    description: "Click more details☝️",
    price: "₹699",
    longDescription: "Premium quality, latest arrival, trending model",
    extraImages: [
      "https://i.ibb.co/Mk9b03nh/htc-trimmer-1-0jpg.jpg"
    ]
  }
);

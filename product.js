const products = [
  {
    category: "Earphones",
    name: "Wireless Earphones-CMF BY NOTHING",
    image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
    description: "High-quality sound and battery life.",
    price: "₹899",
    longDescription: "Enjoy crisp and clear sound with deep bass. Battery lasts up to 10 hours per charge.",
    extraImages: []
  },
  {
    category: "Headphones",
    name: "HEADPHONES-P9",
    image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
    description: "High quality, C-type charging",
    price: "₹699",
    longDescription: "Comfortable padded earcups with crystal-clear audio. USB-C fast charging support.",
    extraImages: []
  },
  {
    category: "Watches",
    name: "Samsung Watch with Airpods",
    image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
    description: "Fitness tracker and call support.",
    price: "₹1199",
    longDescription: "Track fitness, sleep, and calls. Includes bonus airpods.",
    extraImages: []
  },
  {
    category: "Watches",
    name: "CASIO G-SHOCK",
    image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
    description: "Awesome quality, chain model.",
    price: "₹999",
    longDescription: "Stylish, shock-resistant design, waterproof and durable.",
    extraImages: []
  },
  {
    category: "Watches",
    name: "TRACKON - watch",
    image: "https://i.ibb.co/sp6nVFHD/TRACKON-watch.jpg",
    description: "Awesome quality,trending model.",
    price: "₹599",
    longDescription: "Minimalist design with metallic finish and smooth strap.",
    extraImages: []
  },
  {
    category: "Earphones",
    name: "Marshal Ember ANC - earpods",
    image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
    description: "High-quality sound,6 eartips,1 charging cable.",
    price: "₹999",
    longDescription: "6 ear tips for comfort, fast charging, ANC for noise-free music.",
    extraImages: []
  },
  {
    category: "Speakers",
    name: "MZ bluetooth speaker",
    image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
    description: "High-quality sound and trending model.",
    price: "₹699",
    longDescription: "Clear bass, rechargeable, compact and stylish build.",
    extraImages: []
  },
  {
    category: "Trimmers",
    name: "HTC-trimmer",
    image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
    description: "Awesome quality,latest arrivals.",
    price: "₹649",
    longDescription: "Adjustable blades, USB charging, long-lasting battery.",
    extraImages: []
  },
  {
    category: "Watches",
    name: "Magnet locking watch",
    image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "Elegant magnetic strap with durable metal dial.",
    extraImages: [
      "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
      "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
    ]
  },
  {
    category: "Headphones",
    name: "MARSHALL headset",
    image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
    description:"High-quality sound and latest arrivals.",
    price: "₹949",
    longDescription: "Premium over-ear design with dynamic bass.",
    extraImages: [
      "https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg"
    ]
  },
  {
    category: "Earphones",
    name: "BOAT AIRBUDS",
    image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "500 mah battery,wireless earpods, call time upto 5hr",
    extraImages: [
      "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
      "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
    ]
  },
  {
    category: "Combos",
    name: "best ever combo",
    image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
    description: "click more details☝️.",
    price: "₹1499",
    longDescription: "Apple watch + P9 headset + airpods 2 + Random bag",
    extraImages: [
      "https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"
    ]
  },
  {
    category: "Watches",
    name: "WATCH- LG GOLD",
    image: "https://i.ibb.co/KjxM14sD/LG-GOLD-watch.jpg",
    description: "click more details☝️.",
    price: "₹549",
    longDescription:"Awesome quality, latest arrivals",
    extraImages: [
      "https://i.ibb.co/sdkX47Kz/LG-GOLD-green.jpg"
    ]
  },
  {
    category: "Earphones",
    name: "BOAT Airdopes 600",
    image: "https://i.ibb.co/JjvhcFZt/BOAT-airdopes-600.jpg",
    description: "click more detils☝️. ",
    price: "₹749",
    longDescription:"Wireless earphone, 500 mAh battery, call time up to 5hr",
    extraImages:[
      "https://i.ibb.co/5xT1pQ4R/BOAT-airdopes-600-black.jpg",
      "https://i.ibb.co/vxJsdnfB/BOAT-airdopes-600-blue.jpg"
    ]
  },
  {
    category: "Earphones",
    name: "Samsung GALAXY BUDS 2 PRO",
    image: "https://i.ibb.co/j9thw23H/Samsung-GALAXY-BUDS-2-PRO.jpg",
    description: "click more details☝️.",
    price: "₹849",
    longDescription: "Touch operation, type-C charging, 700mAh, PixArt chipset.",
    extraImages: [
      "https://i.ibb.co/ksq6jSHQ/galaxy-buds-white.jpg",
      "https://i.ibb.co/Z63zTgRN/galaxy-buds-black.jpg"
    ]
  },
  {
    category: "Watches",
    name: "Ultra smart watch special edition",
    image: "https://i.ibb.co/xq4Tr7FS/Ultra-smart-watch-special-edition.jpg",
    description: "click more details☝️",
    price: "₹749",
    longDescription: "5+ menu styles, FitPro app, wireless charging.",
    extraImages:[
      "https://i.ibb.co/qLk2hhLv/ultra.jpg"
    ]
  },
  {
    category: "Health",
    name: "MASSAGE GUN",
    image: "https://i.ibb.co/fYbbQTbc/MASSAGE-GUN.jpg",
    description: "Strike Handheld Percussion Massage Gun",
    price: "₹749",
    longDescription:"Interchangeable Massage Heads. Ideal for pain relief.",
    extraImages:[]
  },
  {
    category: "Earphones",
    name: "premium airpods pro2",
    image: "https://i.ibb.co/Xrv0n01C/apple-airpod-pro-2-mix.jpg",
    description: "click more details☝️",
    price: "₹799",
    longDescription:"5-8 hours battery backup including case, Sensors, Premium Metal Engraving.",
    extraImages:[
      "https://i.ibb.co/XxD8StC8/apple-airpod-pro2-black.jpg",
      "https://i.ibb.co/LhZRNFQf/apple-airpod-pro2-white.jpg"
    ]
  }
  // Add more products below similarly...
];

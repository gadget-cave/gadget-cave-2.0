const products = [
  {
    name: "Wireless Earphones-CMF BY NOTHING",
    image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
    description: "High-quality sound and battery life.",
    price: "₹899",
    longDescription: "Enjoy crisp and clear sound with deep bass. Battery lasts up to 10 hours per charge.",
    category: "Earphones",
    extraImages: []
  },
  {
    name: "HEADPHONES-P9",
    image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
    description: "High quality, C-type charging",
    price: "₹699",
    longDescription: "",
    category: "Headsets",
    extraImages: []
  },
  {
    name: "Samsung Watch with Airpods",
    image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
    description: "Fitness tracker and call support.",
    price: "₹1199",
    longDescription: "",
    category: "Smartwatches",
    extraImages: []
  },
  {
    name: "CASIO G-SHOCK",
    image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
    description: "Awesome quality, chain model.",
    price: "₹999",
    longDescription: "",
    category: "Watches",
    extraImages: []
  },
  {
    name: "Marshal Ember ANC - earpods",
    image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
    description: "High-quality sound,6 eartips,1 charging cable.",
    price: "₹999",
    longDescription: "",
    category: "Earphones",
    extraImages: []
  },
  {
    name: "MZ bluetooth speaker",
    image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
    description: "High-quality sound and trending model.",
    price: "₹699",
    longDescription: "",
    category: "Speakers",
    extraImages: []
  },
  {
    name: "HTC-trimmer",
    image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
    description: "Awesome quality,latest arrivals.",
    price: "₹649",
    longDescription: "",
    category: "Trimmers",
    extraImages: []
  },
  {
    name: "Magnet locking watch",
    image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "",
    category: "Watches",
    extraImages: [
      "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
      "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
    ]
  },
  {
    name: "MARSHALL headset",
    image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
    description: "High-quality sound and latest arrivals.",
    price: "₹949",
    longDescription: "",
    category: "Headsets",
    extraImages: [
      "https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg"
    ]
  },
  {
    name: "BOAT AIRBUDS",
    image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "500 mah battery,wireless earpods, call time upto 5hr",
    category: "Earphones",
    extraImages: [
      "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
      "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
    ]
  },
  {
    name: "YIXIAO Powerbank",
    image: "https://i.ibb.co/qYxy1H2s/powerbank-1.jpg",
    description: "click more details☝️",
    price: "₹1399",
    longDescription: "10,000 mAh powerbank , Awesome Quality ▪️New Arrivals ▪️Dual input port",
    category: "Power Banks",
    extraImages: [
      "https://i.ibb.co/PZ42nSxb/power-bank-1-0.jpg",
      "https://i.ibb.co/cMX6WDB/power-bank-1-1.jpg"
    ]
  },
  {
    name: "HTC TRIMMER 1.0",
    image: "https://i.ibb.co/jvwSjGPs/htc-trimmer-1.jpg",
    description: "click more details☝️",
    price: "₹699",
    longDescription: "-PREMIUM QUALITY , LATEST ARRIVALS , TRENDING MODEL",
    category: "Trimmers",
    extraImages: [
      "https://i.ibb.co/Mk9b03nh/htc-trimmer-1-0jpg.jpg"
    ]
  },
  {
    name: "BOAT Airdopes 600",
    image: "https://i.ibb.co/JjvhcFZt/BOAT-airdopes-600.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "Wireless earphone,500 mah battery,call time upto 5hr",
    category: "Earphones",
    extraImages: [
      "https://i.ibb.co/5xT1pQ4R/BOAT-airdopes-600-black.jpg",
      "https://i.ibb.co/vxJsdnfB/BOAT-airdopes-600-blue.jpg"
    ]
  },
  {
    name: "DELTON Watch",
    image: "https://i.ibb.co/8gmpXQXH/delton-watch-1-0.jpg",
    description: "click more details☝️.",
    price: "₹599",
    longDescription: "AWESOME QUALITY , LATEST ARRIVALS , UNISEX WATCHES , TRENDING MODEL",
    category: "Watches",
    extraImages: [
      "https://i.ibb.co/cpTJjYG/delton-watch-1-1.jpg",
      "https://i.ibb.co/2HrhckZ/delton-watch-1-2.jpg"
    ]
  },
  {
    name: "Combo Pack: Watch + Headset + Airpods",
    image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
    description: "click more details☝️.",
    price: "₹1499",
    longDescription: "Apple watch + P9 headset + airpods 2 + Rendom bag",
    category: "Combos",
    extraImages: [
      "https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"
    ]
  },
  {
    name: "JBL TUNE 510",
    image: "https://i.ibb.co/tMvfYQpB/J-BL-tune-510-1-o.jpg",
    description: "click more details☝️.",
    price: "₹829",
    longDescription: "TF card support , Aux cable Support , wireless , connected with ios& android , powerful sound with 360 AUDIO , wire free",
    category: "Headsets",
    extraImages: [
      "https://i.ibb.co/twRfYk42/J-BL-tune-510-1-2.jpg",
      "https://i.ibb.co/h1Y61XZF/J-BL-tune-510-1-1.jpg"
    ]
  }
];

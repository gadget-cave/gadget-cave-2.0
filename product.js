const products = [
  // ✅ EARPHONES
  {
    name: "Wireless Earphones-CMF BY NOTHING",
    category: "Earphones",
    image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
    description: "High-quality sound and battery life.",
    price: "₹899",
    longDescription:"Enjoy crisp and clear sound with deep bass. Battery lasts up to 10 hours per charge.",
    extraImages:[]
  },
  {
    name: "Marshal Ember ANC - earpods",
    category: "Earphones",
    image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
    description: "High-quality sound,6 eartips,1 charging cable.",
    price: "₹999",
    longDescription:"",
    extraImages:[]
  },
  {
    name: "BOAT AIRBUDS",
    category: "Earphones",
    image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription:"500 mah battery, wireless earpods, call time upto 5hr",
    extraImages:[
      "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
      "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
    ]
  },
  {
    name: "BOAT Airdopes 600",
    category: "Earphones",
    image: "https://i.ibb.co/JjvhcFZt/BOAT-airdopes-600.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription:"Wireless earphone, 500 mah battery, call time upto 5hr",
    extraImages:[
      "https://i.ibb.co/5xT1pQ4R/BOAT-airdopes-600-black.jpg",
      "https://i.ibb.co/vxJsdnfB/BOAT-airdopes-600-blue.jpg"
    ]
  },
  {
    name: "Samsung GALAXY BUDS 2 PRO",
    category: "Earphones",
    image: "https://i.ibb.co/j9thw23H/Samsung-GALAXY-BUDS-2-PRO.jpg",
    description: "click more details☝️.",
    price: "₹849",
    longDescription: "Touch operation, type-c charging, 700mAh battery, Ceramic Finish premium design",
    extraImages: [
      "https://i.ibb.co/ksq6jSHQ/galaxy-buds-white.jpg",
      "https://i.ibb.co/Z63zTgRN/galaxy-buds-black.jpg"
    ]
  },
  {
    name: "premium airpods pro2",
    category: "Earphones",
    image: "https://i.ibb.co/Xrv0n01C/apple-airpod-pro-2-mix.jpg",
    description: "click more details☝️",
    price: "₹799",
    longDescription:"5-8 hours backup, 598mah, Premium Metal, Extra buds",
    extraImages:[
      "https://i.ibb.co/XxD8StC8/apple-airpod-pro2-black.jpg",
      "https://i.ibb.co/LhZRNFQf/apple-airpod-pro2-white.jpg"
    ]
  },

  // ✅ HEADSETS
  {
    name: "HEADPHONES-P9",
    category: "Headsets",
    image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
    description: "High quality, C-type charging",
    price: "₹699",
    longDescription:"",
    extraImages:[]
  },
  {
    name: "MARSHALL headset",
    category: "Headsets",
    image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
    description:"High-quality sound, latest arrivals.",
    price: "₹949",
    longDescription:"",
    extraImages:[ "https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg" ]
  },
  {
    name: "JBL TUNE 510",
    category: "Headsets",
    image: "https://i.ibb.co/tMvfYQpB/J-BL-tune-510-1-o.jpg",
    description: "click more details☝️.",
    price: "₹829",
    longDescription:"TF card support, Aux, wireless, powerful sound with 360 AUDIO",
    extraImages:[
      "https://i.ibb.co/twRfYk42/J-BL-tune-510-1-2.jpg",
      "https://i.ibb.co/h1Y61XZF/J-BL-tune-510-1-1.jpg"
    ]
  },

  // ✅ WATCHES
  {
    name: "CASIO G-SHOCK",
    category: "Watches",
    image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
    description: "Awesome quality, chain model.",
    price: "₹999",
    longDescription:"",
    extraImages:[]
  },
  {
    name: "Magnet locking watch",
    category: "Watches",
    image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription:"",
    extraImages:[
      "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
      "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
    ]
  },
  {
    name: "WATCH- LG GOLD",
    category: "Watches",
    image: "https://i.ibb.co/KjxM14sD/LG-GOLD-watch.jpg",
    description: "click more details☝️.",
    price: "₹549",
    longDescription:"Awesome quality, latest arrivals",
    extraImages:[
      "https://i.ibb.co/sdkX47Kz/LG-GOLD-green.jpg"
    ]
  },
  {
    name: "TISSOT watch",
    category: "Watches",
    image: "https://i.ibb.co/XZm2C6F4/tissot-watch-1-0.jpg",
    description: "click more details☝️.",
    price: "₹649",
    longDescription:"Gents watch, premium quality",
    extraImages:[
      "https://i.ibb.co/gZMr1b76/tissot-watch-1-1jpg.jpg",
      "https://i.ibb.co/V4hC7XB/tissot-watch-1-2.jpg"
    ]
  },
  {
    name: "DELTON watch",
    category: "Watches",
    image: "https://i.ibb.co/8gmpXQXH/delton-watch-1-0.jpg",
    description: "click more details☝️.",
    price: "₹599",
    longDescription:"Unisex model, trending",
    extraImages:[
      "https://i.ibb.co/cpTJjYG/delton-watch-1-1.jpg",
      "https://i.ibb.co/2HrhckZ/delton-watch-1-2.jpg"
    ]
  },
  {
    name: "CASIO watch",
    category: "Watches",
    image: "https://i.ibb.co/Zprbcj0B/casio-1-0.jpg",
    description: "click more details☝️.",
    price: "₹699",
    longDescription:"Awesome quality, unisex, trending",
    extraImages:[
      "https://i.ibb.co/ycVh0skx/casio-1-1.jpg"
    ]
  },
  {
    name: "NIKE WATCH",
    category: "Watches",
    image: "https://i.ibb.co/9HbxGww8/nike-watch-1-0.jpg",
    description: "click more details☝️.",
    price: "₹1599",
    longDescription:"Good quality, new arrival",
    extraImages:[]
  },

  // ✅ SMARTWATCHES
  {
    name: "Samsung Watch with Airpods",
    category: "Smartwatches",
    image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
    description: "Fitness tracker and call support.",
    price: "₹1199",
    longDescription:"",
    extraImages:[]
  },
  {
    name: "Ultra smart watch special edition",
    category: "Smartwatches",
    image: "https://i.ibb.co/xq4Tr7FS/Ultra-smart-watch-special-edition.jpg",
    description: "click more details☝️",
    price: "₹749",
    longDescription:"5+ menu style, Fitpro app, wireless charging",
    extraImages:[
      "https://i.ibb.co/qLk2hhLv/ultra.jpg"
    ]
  },
  {
    name: "TRACKON - watch",
    category: "Smartwatches",
    image: "https://i.ibb.co/sp6nVFHD/TRACKON-watch.jpg",
    description: "Awesome quality, trending model.",
    price: "₹599",
    longDescription:"",
    extraImages:[]
  },

  // ✅ SPEAKERS
  {
    name: "MZ bluetooth speaker",
    category: "Speakers",
    image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
    description: "High-quality sound and trending model.",
    price: "₹699",
    longDescription:"",
    extraImages:[]
  },

  // ✅ TRIMMERS
  {
    name: "HTC-trimmer",
    category: "Trimmers",
    image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
    description: "Awesome quality, latest arrivals.",
    price: "₹649",
    longDescription:"",
    extraImages:[]
  },
  {
    name: "HTC TRIMMER",
    category: "Trimmers",
    image: "https://i.ibb.co/jvwSjGPs/htc-trimmer-1.jpg",
    description: "click more details☝️",
    price: "₹699",
    longDescription:"Premium quality, latest arrivals",
    extraImages:[
      "https://i.ibb.co/Mk9b03nh/htc-trimmer-1-0jpg.jpg"
    ]
  },

  // ✅ POWERBANK
  {
    name: "YIXIAO, powerbank",
    category: "Power Banks",
    image: "https://i.ibb.co/qYxy1H2s/powerbank-1.jpg",
    description: "click more details☝️",
    price: "₹1399",
    longDescription:"10,000 mAh, dual input port",
    extraImages:[
      "https://i.ibb.co/PZ42nSxb/power-bank-1-0.jpg",
      "https://i.ibb.co/cMX6WDB/power-bank-1-1.jpg"
    ]
  },

  // ✅ MASSAGER
  {
    name: "MASSAGE GUN",
    category: "Other",
    image: "https://i.ibb.co/fYbbQTbc/MASSAGE-GUN.jpg",
    description: "Handheld Percussion Massage Gun",
    price: "₹749",
    longDescription:"",
    extraImages:[]
  },

  // ✅ COMBO
  {
    name: "best ever combo",
    category: "Combos",
    image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
    description: "click more details☝️.",
    price: "₹1499",
    longDescription:"Apple watch + P9 headset + airpods 2 + bag",
    extraImages:[
      "https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"
    ]
  }
];

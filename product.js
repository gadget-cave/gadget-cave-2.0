const products = [
  /* Earphones */
  {
    name: "Wireless Earphones-CMF BY NOTHING",
    category: "Earphones",
    image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
    description: "High‑quality sound and battery life.",
    price: "₹899",
    longDescription: "10 hr playback, deep bass",
    extraImages: []
  },
  {
    name: "Marshal Ember ANC - earpods",
    category: "Earphones",
    image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
    description: "High‑quality sound, ANC",
    price: "₹999",
    longDescription: "",
    extraImages: []
  },
  {
    name: "BOAT AIRBUDS",
    category: "Earphones",
    image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
    description: "500 mAh battery, wireless",
    price: "₹749",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
      "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
    ]
  },
  {
    name: "Samsung GALAXY BUDS 2 PRO",
    category: "Earphones",
    image: "https://i.ibb.co/j9thw23H/Samsung-GALAXY-BUDS-2-PRO.jpg",
    description: "Detail‑rich, Ceramic finish",
    price: "₹849",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/ksq6jSHQ/galaxy-buds-white.jpg",
      "https://i.ibb.co/Z63zTgRN/galaxy-buds-black.jpg"
    ]
  },
  {
    name: "Premium AirPods Pro2",
    category: "Earphones",
    image: "https://i.ibb.co/Xrv0n01C/apple-airpod-pro-2-mix.jpg",
    description: "Premium build, 5‑8 hr battery",
    price: "₹799",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/XxD8StC8/apple-airpod-pro2-black.jpg",
      "https://i.ibb.co/LhZRNFQf/apple-airpod-pro2-white.jpg"
    ]
  },

  /* Headsets */
  {
    name: "HEADPHONES‑P9",
    category: "Headsets",
    image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
    description: "C‑type charging, crisp sound",
    price: "₹699",
    longDescription: "",
    extraImages: []
  },
  {
    name: "MARSHALL Headset",
    category: "Headsets",
    image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
    description: "Robust Marshall sound",
    price: "₹949",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg"
    ]
  },
  {
    name: "JBL TUNE 510",
    category: "Headsets",
    image: "https://i.ibb.co/tMvfYQpB/J-BL-tune-510-1-o.jpg",
    description: "TF, Aux, 360 Audio",
    price: "₹829",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/twRfYk42/J-BL-tune-510-1-2.jpg",
      "https://i.ibb.co/h1Y61XZF/J-BL-tune-510-1-1.jpg"
    ]
  },

  /* Watches */
  {
    name: "CASIO G‑SHOCK",
    category: "Watches",
    image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
    description: "Rugged & durable",
    price: "₹999",
    longDescription: "",
    extraImages: []
  },
  {
    name: "Magnet Locking Watch",
    category: "Watches",
    image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
    description: "Brown & green variants",
    price: "₹749",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
      "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
    ]
  },
  {
    name: "WATCH‑ LG GOLD",
    category: "Watches",
    image: "https://i.ibb.co/KjxM14sD/LG-GOLD-watch.jpg",
    description: "Stylish gold tone",
    price: "₹549",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/sdkX47Kz/LG-GOLD-green.jpg"
    ]
  },
  {
    name: "TISSOT Watch",
    category: "Watches",
    image: "https://i.ibb.co/XZm2C6F4/tissot-watch-1-0.jpg",
    description: "Elegant gents watch",
    price: "₹649",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/gZMr1b76/tissot-watch-1-1jpg.jpg",
      "https://i.ibb.co/V4hC7XB/tissot-watch-1-2.jpg"
    ]
  },
  {
    name: "DELTON Watch",
    category: "Watches",
    image: "https://i.ibb.co/8gmpXQXH/delton-watch-1-0.jpg",
    description: "Unisex trending",
    price: "₹599",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/cpTJjYG/delton-watch-1-1.jpg",
      "https://i.ibb.co/2HrhckZ/delton-watch-1-2.jpg"
    ]
  },
  {
    name: "NIKE WATCH",
    category: "Watches",
    image: "https://i.ibb.co/9HbxGww8/nike-watch-1-0.jpg",
    description: "Stylish, new arrival",
    price: "₹1599",
    longDescription: "",
    extraImages: []
  },

  /* Smartwatches */
  {
    name: "Samsung Watch + Airpods",
    category: "Smartwatches",
    image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
    description: "Tracker + calls",
    price: "₹1199",
    longDescription: "",
    extraImages: []
  },
  {
    name: "Ultra Smart Watch Special",
    category: "Smartwatches",
    image: "https://i.ibb.co/xq4Tr7FS/Ultra-smart-watch-special-edition.jpg",
    description: "FitPro apps+,wireless charging",
    price: "₹749",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/qLk2hhLv/ultra.jpg"
    ]
  },
  {
    name: "TRACKON Watch",
    category: "Smartwatches",
    image: "https://i.ibb.co/sp6nVFHD/TRACKON-watch.jpg",
    description: "Trending model",
    price: "₹599",
    longDescription: "",
    extraImages: []
  },

  /* Speakers */
  {
    name: "MZ Bluetooth Speaker",
    category: "Speakers",
    image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
    description: "Good bass, trending",
    price: "₹699",
    longDescription: "",
    extraImages: []
  },

  /* Trimmers */
  {
    name: "HTC Trimmer",
    category: "Trimmers",
    image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
    description: "Latest arrivals",
    price: "₹649",
    longDescription: "",
    extraImages: []
  },
  {
    name: "HTC TRIMMER Premium",
    category: "Trimmers",
    image: "https://i.ibb.co/jvwSjGPs/htc-trimmer-1.jpg",
    description: "Premium quality model",
    price: "₹699",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/Mk9b03nh/htc-trimmer-1-0jpg.jpg"
    ]
  },

  /* Power Banks */
  {
    name: "YIXIAO Powerbank",
    category: "Power Banks",
    image: "https://i.ibb.co/qYxy1H2s/powerbank-1.jpg",
    description: "10,000 mAh, dual input",
    price: "₹1399",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/PZ42nSxb/power-bank-1-0.jpg",
      "https://i.ibb.co/cMX6WDB/power-bank-1-1.jpg"
    ]
  },

  /* Other */
  {
    name: "MASSAGE GUN",
    category: "Other",
    image: "https://i.ibb.co/fYbbQTbc/MASSAGE-GUN.jpg",
    description: "Hand‑held percussion",
    price: "₹749",
    longDescription: "",
    extraImages: []
  },

  /* Combos */
  {
    name: "Best Ever Combo",
    category: "Combos",
    image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
    description: "Watch + headset + airpods + bag",
    price: "₹1499",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"
    ]
  }
];

const products = [
    {
        id: 1,
        name: "Wireless Earphones-CMF BY NOTHING",
        image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
        description: "High-quality sound and battery life.",
        price: 899,
        longDescription: "Enjoy crisp and clear sound with deep bass. Battery lasts up to 10 hours per charge.",
        extraImages: [],
        category: "Earphones"
    },
    {
        id: 2,
        name: "HEADPHONES-P9",
        image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
        description: "High quality, C-type charging",
        price: 699,
        longDescription: "",
        extraImages: [],
        category: "Headphones"
    },
    {
        id: 3,
        name: "Samsung Watch with Airpods",
        image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
        description: "Fitness tracker and call support.",
        price: 1199,
        longDescription: "",
        extraImages: [],
        category: "Smartwatches"
    },
    {
        id: 4,
        name: "CASIO G-SHOCK",
        image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
        description: "Awesome quality, chain model.",
        price: 999,
        longDescription: "",
        extraImages: [],
        category: "Watches"
    },
    {
        id: 5,
        name: "TRACKON - watch",
        image: "https://i.ibb.co/sp6nVFHD/TRACKON-watch.jpg",
        description: "Awesome quality,trending model.",
        price: 599,
        longDescription: "",
        extraImages: [],
        category: "Watches"
    },
    {
        id: 6,
        name: "Marshal Ember ANC - earpods",
        image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
        description: "High-quality sound,6 eartips,1 charging cable.",
        price: 999,
        longDescription: "",
        extraImages: [],
        category: "Earphones"
    },
    {
        id: 7,
        name: "MZ bluetooth speaker",
        image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
        description: "High-quality sound and trending model.",
        price: 699,
        longDescription: "",
        extraImages: [],
        category: "Speakers"
    },
    {
        id: 8,
        name: "HTC-trimmer",
        image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
        description: "Awesome quality,latest arrivals.",
        price: 649,
        longDescription: "",
        extraImages: [],
        category: "Trimmers"
    },
    {
        id: 9,
        name: "Magnet locking watch",
        image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
        description: "click more details☝️.",
        price: 749,
        longDescription: "",
        extraImages: [
            "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
            "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
        ],
        category: "Watches"
    },
    {
        id: 10,
        name: "MARSHALL headset",
        image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
        description: "High-quality sound and latest arrivals.",
        price: 949,
        longDescription: "",
        extraImages: [
            "https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg"
        ],
        category: "Headphones"
    },
    {
        id: 11,
        name: "BOAT AIRBUDS",
        image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
        description: "click more details☝️.",
        price: 749,
        longDescription: "500 mah battery,wireless earpods, call time upto 5hr",
        extraImages: [
            "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
            "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
        ],
        category: "Earphones"
    },
    {
        id: 12,
        name: "best ever combo",
        image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
        description: "click more details☝️.",
        price: 1499,
        longDescription: "Apple watch + P9 headset + airpods 2 + Rendom bag",
        extraImages: [
            "https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"
        ],
        category: "Combos"
    },
    {
        id: 13,
        name: "WATCH- LG GOLD",
        image: "https://i.ibb.co/KjxM14sD/LG-GOLD-watch.jpg",
        description: "click more details☝️.",
        price: 549,
        longDescription: "Awesome quality, latest arrivals",
        extraImages: [
            "https://i.ibb.co/sdkX47Kz/LG-GOLD-green.jpg"
        ],
        category: "Watches"
    },
    {
        id: 14,
        name: "BOAT Airdopes 600",
        image: "https://i.ibb.co/JjvhcFZt/BOAT-airdopes-600.jpg",
        description: "click more detils☝️.",
        price: 749,
        longDescription: "Wireless earphone,500 mah battery,call time upto 5hr",
        extraImages: [
            "https://i.ibb.co/5xT1pQ4R/BOAT-airdopes-600-black.jpg",
            "https://i.ibb.co/vxJsdnfB/BOAT-airdopes-600-blue.jpg"
        ],
        category: "Earphones"
    },
    {
        id: 15,
        name: "Samsung GALAXY BUDS 2 PRO",
        image: "https://i.ibb.co/j9thw23H/Samsung-GALAXY-BUDS-2-PRO.jpg",
        description: "click more details☝️.",
        price: 849,
        longDescription: "Touch operation, type-c charging, Battery Capacity 700mAh, Ceramic Finish premium Earbuds Design, Next Generation PixArt Chipset For Lossless Connectivity.",
        extraImages: [
            "https://i.ibb.co/ksq6jSHQ/galaxy-buds-white.jpg",
            "https://i.ibb.co/Z63zTgRN/galaxy-buds-black.jpg"
        ],
        category: "Earphones"
    },
    {
        id: 16,
        name: "Ultra smart watch special edition",
        image: "https://i.ibb.co/xq4Tr7FS/Ultra-smart-watch-special-edition.jpg",
        description: "click more details☝️",
        price: 749,
        longDescription: "5+menu style, fitpro app, wireless charging, etc..",
        extraImages: [
            "https://i.ibb.co/qLk2hhLv/ultra.jpg"
        ],
        category: "Smartwatches"
    },
    {
        id: 17,
        name: "MASSAGE GUN",
        image: "https://i.ibb.co/fYbbQTbc/MASSAGE-GUN.jpg",
        description: "Massage Gun | Strike Handheld Percussion Massage Gun with Interchangeable Massage Heads",
        price: 749,
        longDescription: "",
        extraImages: [],
        category: "Other"
    },
    {
        id: 18,
        name: "premium airpods pro2",
        image: "https://i.ibb.co/Xrv0n01C/apple-airpod-pro-2-mix.jpg",
        description: "click more details☝️",
        price: 799,
        longDescription: "5-8 hours battery backup including case, Premium build material, Compatible with all devices, Both Sensors Fully Functional, 598mah battery, Premium Metal Engraving, Extra buds",
        extraImages: [
            "https://i.ibb.co/XxD8StC8/apple-airpod-pro2-black.jpg",
            "https://i.ibb.co/LhZRNFQf/apple-airpod-pro2-white.jpg"
        ],
        category: "Earphones"
    },
    {
        id: 19,
        name: "YIXIAO, powerbank",
        image: "https://i.ibb.co/qYxy1H2s/powerbank-1.jpg",
        description: "click more details☝️",
        price: 1399,
        longDescription: "10,000 mAh powerbank, Awesome Quality ▪️New Arrivals ▪️Dual input port",
        extraImages: [
            "https://i.ibb.co/PZ42nSxb/power-bank-1-0.jpg",
            "https://i.ibb.co/cMX6WDB/power-bank-1-1.jpg"
        ],
        category: "Powerbanks"
    },
    {
        id: 20,
        name: "HTC TRIMMER",
        image: "https://i.ibb.co/jvwSjGPs/htc-trimmer-1.jpg",
        description: "click more details☝️",
        price: 699,
        longDescription: "PREMIUM QUALITY , LATEST ARRIVALS , TRENDING MODEL",
        extraImages: [
            "https://i.ibb.co/Mk9b03nh/htc-trimmer-1-0jpg.jpg"
        ],
        category: "Trimmers"
    },
    {
        id: 21,
        name: "NIKE WATCH",
        image: "https://i.ibb.co/9HbxGww8/nike-watch-1-0.jpg",
        description: "click more details☝️",
        price: 1599,
        longDescription: "NEW ARRIVAL ,GOOD QUALITY",
        extraImages: [],
        category: "Watches"
    },
    {
        id: 22,
        name: "CASIO watch",
        image: "https://i.ibb.co/Zprbcj0B/casio-1-0.jpg",
        description: "click more details☝️",
        price: 699,
        longDescription: "AWESOME QUALITY , LATEST ARRIVALS , UNISEX WATCHES , TRENDING MODEL",
        extraImages: [
            "https://i.ibb.co/ycVh0skx/casio-1-1.jpg"
        ],
        category: "Watches"
    },
    {
        id: 23,
        name: "JBL TUNE 510",
        image: "https://i.ibb.co/tMvfYQpB/J-BL-tune-510-1-o.jpg",
        description: "click more details☝️",
        price: 829,
        longDescription: "TF card support , Aux cable Support , wireless , connected with iOS & Android , powerful sound with 360 AUDIO , wire free",
        extraImages: [
            "https://i.ibb.co/twRfYk42/J-BL-tune-510-1-2.jpg",
            "https://i.ibb.co/h1Y61XZF/J-BL-tune-510-1-1.jpg"
        ],
        category: "Headphones"
    },
    {
        id: 24,
        name: "TISSOT watch",
        image: "https://i.ibb.co/XZm2C6F4/tissot-watch-1-0.jpg",
        description: "click more details☝️",
        price: 649,
        longDescription: "AWESOME QUALITY , LATEST ARRIVALS , GENTS WATCHES , TRENDING MODEL",
        extraImages: [
            "https://i.ibb.co/gZMr1b76/tissot-watch-1-1jpg.jpg",
            "https://i.ibb.co/V4hC7XB/tissot-watch-1-2.jpg"
        ],
        category: "Watches"
    },
    {
        id: 25,
        name: "DELTON watch",
        image: "https://i.ibb.co/8gmpXQXH/delton-watch-1-0.jpg",
        description: "click more details☝️",
        price: 599,
        longDescription: "AWESOME QUALITY , LATEST ARRIVALS , UNISEX WATCHES , TRENDING MODEL",
        extraImages: [
            "https://i.ibb.co/cpTJjYG/delton-watch-1-1.jpg",
            "https://i.ibb.co/2HrhckZ/delton-watch-1-2.jpg"
        ],
        category: "Watches"
    }
];

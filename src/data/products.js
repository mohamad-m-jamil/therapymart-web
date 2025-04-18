const products = [
  {
    id: 1,
    name: "yoga mat (black and blue)",
    price: 3.5,
    category: "fitness",
    description: "Durable, non-slip yoga mat for stability during yoga and fitness exercises.",
    images: [
      "/yoga-matblu.jpg",
      "/yoga-matbla.jpg",
    ]
  },
  {
    id: 2,
    name: "rubber band (blue, yellow, black, red)",
    price: 1,
    category: "fitness",
    description: "Medium-resistance elastic band ideal for strength and flexibility training.",
    images: [
      "/rubber-band.jpg",
    ]
  },
  {
    id: 3,
    name: "resistance small band (mauve, navy blue, sea blue, white blue)",
    price: 0.5,
    category: "fitness",
    description: "Compact resistance band for targeted muscle training and mobility.",
    images: [
      "/resistance-small-band.jpg",
      "/resistance-small-band1.jpg",
      "/resistance-small-band2.jpg",
      "/resistance-small-band3.jpg",
    ]
  },
  {
    id: 4,
    name: "yoga block",
    price: 2,
    category: "fitness",
    description: "High-density foam block to assist with balance and deep stretches.",
    images: [
      "/yoga-block.jpg",
      "/yoga-block1.jpg",
    ]
  },
  {
    id: 5,
    name: "foamroller",
    price: 4,
    category: "fitness",
    description: "Muscle recovery tool for self-massage, tension relief, and flexibility.",
    images: [
      "/foamroller.jpg",
      "/foamroller1.jpg",
    ]
  },
  {
    id: 6,
    name: "gym ball (mauve)",
    price: 3,
    category: "fitness",
    description: "Versatile fitness ball for posture support, pilates, and home workouts.",
    images: [
      "/gym-ball1.jpg",
    ]
  },
  {
    id: 7,
    name: "gym ball (blue)",
    price: 4.5,
    category: "fitness",
    description: "Stability ball for core training, stretching, and balance improvement.",
    images: [
      "/gym-ball2.jpg",
    ]
  },
  {
    id: 8,
    name: "abdominal wheel",
    price: 4,
    category: "fitness",
    description: "Core trainer for building abdominal strength and stability.",
    images: [
      "/abdominal-wheel.jpg",
    ]
  },
  {
    id: 9,
    name: "bosu ball (mauve , blue)",
    price: 20,
    category: "fitness",
    description: "Balance trainer with flat and dome sides for core, cardio, and strength.",
    images: [
      "/bosu-ball.jpg",
      "/bosu-ballmauve.jpg",
      "/bosu-ballblu.jpg",
    ]
  },
  {
    id: 10,
    name: "grip",
    price: 4.5,
    category: "fitness",
    description: "Hand grip trainer to increase forearm strength and grip endurance.",
    images: [
      "/grip.jpg",
    ]
  },
  {
    id: 11,
    name: "tension rope",
    price: 11,
    category: "fitness",
    description: "Versatile resistance rope for strength training and full-body workouts.",
    images: [
      "/tension-rope1.jpg",
      "/tension-rope2.jpg",
      "/tension-rope3.jpg",
      "/tension-rope4.jpg",
      "/tension-rope5.jpg",
    ]
  },
  {
    id: 12,
    name: "mini massage gun",
    price: 5,
    category: "massage-tools",
    description: "Compact, powerful device for deep muscle massage and pain relief.",
    images: [
      "/mini-massage-gun.jpg",
      "/mini-massage-gun1.jpg",
      "/mini-massage-gun2.jpg",
    ]
  },
  {
    id: 13,
    name: "massage stick m2",
    price: 2.5,
    category: "massage-tools",
    description: "Handheld stick for targeting tight muscles and improving circulation.",
    images: [
      "/massage-stick-m2.jpg",
      "/massage-stick-m21.jpg",
    ]
  },
  {
    id: 14,
    name: "massage stick m3",
    price: 2,
    category: "massage-tools",
    description: "Upgraded massage stick designed for deeper muscle penetration and relief.",
    images: [
      "/massage-stick-m3.jpg",
      "/massage-stick-m31.jpg",
    ]
  },
  {
    id: 15,
    name: "Neck massager",
    price: 4,
    category: "massage-tools",
    description: "Neck massager designed to relieve cervical spine pressure and pain.",
    images: [
      "/Neck-massager1.jpg",
      "/Neck-massager2.jpg",
      "/Neck-massager3.jpg",
    ]
  },
  {
    id: 16,
    name: "eye massager",
    price: 14.5,
    category: "massage-tools",
    description: "Gentle massager for eye strain relief, dark circles, and relaxation.",
    images: [
      "/eye-massager1.jpg",
      "/eye-massager2.jpg",
    ]
  },
  {
    id: 17,
    name: "Neck massager (Out of stock)",
    price: 0,
    category: "massage-tools",
    description: "Neck massager designed to relieve cervical spine pressure and pain.",
    images: [
      "/neck--massager1.jpg",
      "/neck--massager2.jpg",
      "/neck--massager3.jpg",
    ]
  },
  {
    id: 18,
    name: "shoulder massage",
    price: 11,
    category: "massage-tools",
    description: "Ergonomic massager designed to relieve shoulder tension and stiffness.",
    images: [
      "/shoulder-massage1.jpg",
      "/shoulder-massage2.jpg",
      "/shoulder-massage3.jpg",
      "/shoulder-massage4.jpg",
      "/shoulder-massage5.jpg",
    ]
  },
  {
    id: 19,
    name: "head massager",
    price: 18,
    category: "massage-tools",
    description: "Scalp and head massage tool to reduce stress and stimulate blood flow.",
    images: [
      "/head-massager1.jpg",
      "/head-massager2.jpg",
      "/head-massager3.jpg",
    ]
  },
  {
    id: 20,
    name: "Kids Elbow Brace Support",
    price: 25,
    category: "pain-relief",
    description: "Kids Elbow Brace Support, Adjustable Elbow Fixation Brace Post Op Injury Recovery, for Children Broken Arm, Elbow, Wrist.",
    images: [
      "/kids-elbow-brace-support.jpg",
    ]
  },
  {
    id: 21,
    name: "Corrector Back-Support Bandage Shoulder",
    price: 15,
    category: "pain-relief",
    description: "Corrector Back-Support Bandage Shoulder Corset Back Support Posture Correction Invisible Breathable Hunchback Correction Belt Adult Children Students Open Back Posture Belt with Chest Hunchback.",
    images: [
      "/Corrector-Back-Support-Bandage-Shoulder.jpg",
      "/Corrector-Back-Support-Bandage-Shoulder2.jpg",
    ]
  },
  {
    id: 22,
    name: "Medical Children's Arm Sling",
    price: 15,
    category: "pain-relief",
    description: "Medical Children's Arm Sling Upper Hand Protector Kids Arm Sling Shoulder Splint Brace For Children.",
    images: [
      "/Medical-Children's-Arm-Sling1.jpg",
      "/Medical-Children's-Arm-Sling12.jpg",
    ]
  },
  {
    id: 23,
    name: "Adjustable-wrist-immobilizer-pediatrics",
    price: 22,
    category: "pain-relief",
    description: "Adjustable wrist immobilizer pediatrics carpal tunnel syndrome children wrist splint wrist support brace for kids.",
    images: [
      "/Adjustable-wrist-immobilizer-pediatrics1.jpg",
      "/Adjustable-wrist-immobilizer-pediatrics2.jpg",
    ]
  },
  {
    id: 24,
    name: "This Walking Boot",
    price: 100,
    category: "pain-relief",
    description: "This Walking Boot can replace plaster, is breathable, and is better than plaster..",
    images: [
      "/This-Walking-Boot1.jpg",
      "/This-Walking-Boot2.jpg",
    ]
  },
  {
    id: 25,
    name: "Orthopedic Knee Immobilizer For Childern",
    price: 45,
    category: "pain-relief",
    description: "Orthopedic Knee Immobilizer For Childern.",
    images: [
      "/Orthopedic-Knee-Immobilizer-For-Childern1.jpg",
      "/Orthopedic-Knee-Immobilizer-For-Childern2.jpg",
    ]
  },
  {
    id: 26,
    name: "",
    price: 80,
    category: "pain-relief",
    description: ".",
    images: [
      "/angel1.jpg",
      "/angel2.jpg",
    ]
  },
  {
    id: 27,
    name: "",
    price: 20,
    category: "pain-relief",
    description: ".",
    images: [
      "/id1.jpg",
      "/id12.jpg",
    ]
  },
  {
    id: 28,
    name: "",
    price: 15,
    category: "pain-relief",
    description: ".",
    images: [
      "/id21.jpg",
      "/id22.jpg",
    ]
  },
  {
    id: 29,
    name: "",
    price: 12,
    category: "pain-relief",
    description: ".",
    images: [
      "/id33.jpg",
      "/id32.jpg",
      "/id31.jpg",
    ]
  },
  {
    id: 30,
    name: "Indicated to treat neck and upper back",
    price: 100,
    category: "pain-relief",
    description: "Product application: Indicated to treat neck and upper back injuries such as post-trauma, arthritis, acute pain, spinal stenosis, and post-surgery fractures or injuries..",
    images: [
      "/id41.jpg",
      "/id42.jpg",
      "/id43.jpg",
    ]
  },
  {
    id: 31,
    name: "",
    price: 25,
    category: "pain-relief",
    description: ".",
    images: [
      "/id51.jpg",
      "/id52.jpg",
      "/id53.jpg",
    ]
  },
  {
    id: 32,
    name: "",
    price: 65,
    category: "pain-relief",
    description: ".",
    images: [
      "/id61.jpg",
    ]
  },
  {
    id: 33,
    name: "",
    price: 10,
    category: "pain-relief",
    description: ".",
    images: [
      "/id71.jpg",
      "/id72.jpg",
    ]
  },



  {
    id: 34,
    name: "",
    price: 15,
    category: "pain-relief",
    description: ".",
    images: [
      "/id81.jpg",
      "/id82.jpg",
    ]
  },
  {
    id: 35,
    name: "",
    price: 35,
    category: "pain-relief",
    description: ".",
    images: [
      "/id91.jpg",
      "/id92.jpg",
    ]
  },
  {
    id: 36,
    name: "",
    price: 3,
    category: "pain-relief",
    description: ".",
    images: [
      "/id101.jpg",
    ]
  },
  {
    id: 37,
    name: "",
    price: 3,
    category: "pain-relief",
    description: ".",
    images: [
      "/id111.jpg",
    ]
  },
  {
    id: 38,
    name: "",
    price: 65,
    category: "pain-relief",
    description: ".",
    images: [
      "/id121.jpg",
      "/id122.jpg",
    ]
  },
  {
    id: 39,
    name: "",
    price: 100,
    category: "pain-relief",
    description: ".",
    images: [
      "/id141.jpg",
      "/id142.jpg",
    ]
  },
  {
    id: 40,
    name: "",
    price: 60,
    category: "pain-relief",
    description: ".",
    images: [
      "/id131.jpg",
      "/id132.jpg",
    ]
  },
  {
    id: 41,
    name: "",
    price: 100,
    category: "pain-relief",
    description: ".",
    images: [
      "/id151.jpg",
    ]
  },
  {
    id: 42,
    name: "",
    price: 40,
    category: "pain-relief",
    description: ".",
    images: [
      "/id161.jpg",
      "/id162.jpg",
    ]
  },
  {
    id: 43,
    name: "",
    price: 30,
    category: "pain-relief",
    description: ".",
    images: [
      "/id181.jpg",
      "/id182.jpg",
    ]
  },
  {
    id: 44,
    name: "",
    price: 35,
    category: "pain-relief",
    description: ".",
    images: [
      "/id191.jpg",
      "/id192.jpg",
    ]
  },
  {
    id: 45,
    name: "",
    price: 40,
    category: "pain-relief",
    description: ".",
    images: [
      "/id211.jpg",
      "/id201.jpg",
    ]
  },
  {
    id: 46,
    name: "",
    price: 100,
    category: "pain-relief",
    description: ".",
    images: [
      "/id221.jpg",
      "/id222.jpg",
    ]
  },
  {
    id: 47,
    name: "",
    price: 50,
    category: "pain-relief",
    description: ".",
    images: [
      "/id231.jpg",
      "/id232.jpg",
    ]
  },
  {
    id: 48,
    name: "",
    price: 50,
    category: "pain-relief",
    description: ".",
    images: [
      "/id241.jpg",
    ]
  },
  {
    id: 49,
    name: "",
    price: 5,
    category: "pain-relief",
    description: ".",
    images: [
      "/id251.jpg",
    ]
  },
  {
    id: 50,
    name: "",
    price: 10,
    category: "pain-relief",
    description: ".",
    images: [
      "/id261.jpg",
    ]
  },
  {
    id: 51,
    name: "",
    price: 15,
    category: "pain-relief",
    description: ".",
    images: [
      "/id271.jpg",
      "/id272.jpg",
    ]
  },
  {
    id: 52,
    name: "",
    price: 20,
    category: "pain-relief",
    description: ".",
    images: [
      "/id281.jpg",
      "/id282.jpg",
    ]
  },
  {
    id: 53,
    name: "",
    price: 15,
    category: "pain-relief",
    description: ".",
    images: [
      "/id291.jpg",
      "/id292.jpg",
    ]
  },
  {
    id: 54,
    name: "",
    price: 20,
    category: "pain-relief",
    description: ".",
    images: [
      "/id301.jpg",
    ]
  },
  {
    id: 55,
    name: "",
    price: 20,
    category: "pain-relief",
    description: ".",
    images: [
      "/id311.jpg",
    ]
  },
  {
    id: 56,
    name: "",
    price: 150,
    category: "pain-relief",
    description: ".",
    images: [
      "/id321.jpg",
      "/id322.jpg",
    ]
  },
];

export const getAllProducts = () => {
  try {
    return products;
  } catch (error) {
    console.error("Error getting all products:", error);
    return [];
  }
};

export const getProductById = (id) => {
  try {
    // Make sure id is a valid number
    const productId = parseInt(id);
    if (isNaN(productId)) {
      console.error("Invalid product ID format:", id);
      return null;
    }
    
    const product = products.find(product => product.id === productId);
    
    if (!product) {
      console.error("Product not found with ID:", id);
      return null;
    }
    
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export const searchProducts = (query) => {
  try {
    if (!query) return products;
    
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};
const products = [
  {
    id: 1,
    name: "Medical Scrubs Set",
    price: 45.99,
    category: "medical-equipment",
    description: "Comfortable and durable scrubs set for medical professionals. Made from high-quality fabric that's both breathable and easy to clean. Available in multiple sizes and colors.",
    images: [
      "/id11.jpg",
      "/id12.jpg",
    ]
  },
  {
    id: 2,
    name: "Digital Thermometer",
    price: 29.99,
    category: "medical-equipment",
    description: "High-precision digital thermometer with quick reading capabilities. Features a clear LCD display and memory function to store previous readings.",
    images: [
      "/id21.jpg",
      "/id22.jpg",
      "/id23.jpg",
      "/id24.jpg",
    ]
  },
  {
    id: 3,
    name: "Professional Stethoscope",
    price: 120.00,
    category: "medical-equipment",
    description: "High-quality stethoscope designed for medical professionals. Features excellent acoustic sensitivity and comfortable ear tips for extended use.",
    images: [
      "/id31.jpg",
    ]
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    price: 75.50,
    category: "medical-equipment",
    description: "Automatic blood pressure monitor with easy-to-read display. Provides accurate measurements and stores previous readings for tracking purposes.",
    images: [
      "/id41.jpg",
      "/id42.jpg",
    ]
  },
  {
    id: 5,
    name: "Medical Lab Coat",
    price: 35.99,
    category: "medical-equipment",
    description: "Professional white lab coat for medical and laboratory settings. Features multiple pockets and durable, easy-to-clean fabric.",
    images: [
      "/id51.jpg",
      "/id52.jpg",
      "/id53.jpg",
    ]
  },
  {
    id: 6,
    name: "Pulse Oximeter",
    price: 49.99,
    category: "medical-equipment",
    description: "Portable fingertip pulse oximeter that quickly and accurately measures blood oxygen levels and pulse rate. Includes a clear LED display and automatic power-off feature.",
    images: [
      "/id61.jpg",
    ]
  },
  {
    id: 7,
    name: "Medical ID Badge Holder",
    price: 12.99,
    category: "medical-equipment",
    description: "Durable badge holder with retractable reel for medical ID cards. Available in multiple colors with a strong clip attachment.",
    images: [
      "/id71.jpg",
    ]
  },
  {
    id: 8,
    name: "Compression Socks Set",
    price: 24.95,
    category: "electrical-equipment",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id81.jpg",
    ]
  },
  {
    id: 9,
    name: "Compression Socks Set",
    price: 24.95,
    category: "electrical-equipment",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id91.jpg",
    ]
  },
  {
    id: 10,
    name: "Compression Socks Set",
    price: 24.95,
    category: "electrical-equipment",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id101.jpg",
    ]
  },
  {
    id: 11,
    name: "Compression Socks Set",
    price: 24.95,
    category: "electrical-equipment",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id111.jpg",
    ]
  },
  {
    id: 12,
    name: "electrical-equipment",
    price: 24.95,
    category: "medical-equipment",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id121.jpg",
      "/id122.jpg",
      "/id123.jpg",
      "/id124.jpg",
    ]
  },
  {
    id: 13,
    name: "electrical-equipment",
    price: 24.95,
    category: "medical-equipment",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id131.jpg",
      "/id132.jpg",
      "/id133.jpg",
      "/id134.jpg",
    ]
  },
  {
    id: 14,
    name: "Compression Socks Set",
    price: 24.95,
    category: "physical-therapy",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id141.jpg",
      "/id142.jpg",
      "/id143.jpg",
    ]
  },
  {
    id: 15,
    name: "Compression Socks Set",
    price: 24.95,
    category: "physical-therapy",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id151.jpg",
      "/id152.jpg",
      "/id153.jpg",
    ]
  },
  {
    id: 16,
    name: "Compression Socks Set",
    price: 24.95,
    category: "physical-therapy",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id161.jpg",
      "/id162.jpg",
      "/id163.jpg",
    ]
  },
  {
    id: 17,
    name: "Compression Socks Set",
    price: 24.95,
    category: "physical-therapy",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id171.jpg",
      "/id172.jpg",
      "/id173.jpg",
    ]
  },
  {
    id: 18,
    name: "Compression Socks Set",
    price: 24.95,
    category: "physical-therapy",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id181.jpg",
      "/id182.jpg",
      "/id183.jpg",
      "/id184.jpg",
    ]
  },
  {
    id: 19,
    name: "Compression Socks Set",
    price: 24.95,
    category: "physical-therapy",
    description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
    images: [
      "/id191.jpg",
      "/id192.jpg",
    ]
  },
];

export const getAllProducts = () => products;

export const getProductById = (id) => products.find(product => product.id === id);

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};
const products = [
    {
      id: 1,
      name: "Medical Scrubs Set",
      price: 45.99,
      description: "Comfortable and durable scrubs set for medical professionals. Made from high-quality fabric that's both breathable and easy to clean. Available in multiple sizes and colors.",
      images: [
        "../../public/id11.jpg",
        "../../public/id12.jpg",
      ]
    },
    {
      id: 2,
      name: "Digital Thermometer",
      price: 29.99,
      description: "High-precision digital thermometer with quick reading capabilities. Features a clear LCD display and memory function to store previous readings.",
      images: [
        "../../public/id21.jpg",
        "../../public/id22.jpg",
        "../../public/id23.jpg",
        "../../public/id24.jpg",
      ]
    },
    {
      id: 3,
      name: "Professional Stethoscope",
      price: 120.00,
      description: "High-quality stethoscope designed for medical professionals. Features excellent acoustic sensitivity and comfortable ear tips for extended use.",
      images: [
        "../../public/id31.jpg",
      ]
    },
    {
      id: 4,
      name: "Blood Pressure Monitor",
      price: 75.50,
      description: "Automatic blood pressure monitor with easy-to-read display. Provides accurate measurements and stores previous readings for tracking purposes.",
      images: [
        "../../public/id41.jpg",
        "../../public/id42.jpg",
      ]
    },
    {
      id: 5,
      name: "Medical Lab Coat",
      price: 35.99,
      description: "Professional white lab coat for medical and laboratory settings. Features multiple pockets and durable, easy-to-clean fabric.",
      images: [
        "../../public/id51.jpg",
        "../../public/id52.jpg",
        "../../public/id53.jpg",
      ]
    },
    {
      id: 6,
      name: "Pulse Oximeter",
      price: 49.99,
      description: "Portable fingertip pulse oximeter that quickly and accurately measures blood oxygen levels and pulse rate. Includes a clear LED display and automatic power-off feature.",
      images: [
        "../../public/id61.jpg",
      ]
    },
    {
      id: 7,
      name: "Medical ID Badge Holder",
      price: 12.99,
      description: "Durable badge holder with retractable reel for medical ID cards. Available in multiple colors with a strong clip attachment.",
      images: [
        "../../public/id71.jpg",
      ]
    },
    {
      id: 8,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id81.jpg",
      ]
    },
    {
      id: 9,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id91.jpg",
      ]
    },
    {
      id: 10,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id101.jpg",
      ]
    },
    {
      id: 11,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id111.jpg",
      ]
    },
    {
      id: 12,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id121.jpg",
        "../../public/id122.jpg",
        "../../public/id123.jpg",
        "../../public/id124.jpg",
      ]
    },
    {
      id: 13,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id131.jpg",
        "../../public/id132.jpg",
        "../../public/id133.jpg",
        "../../public/id134.jpg",
      ]
    },
    {
      id: 14,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id141.jpg",
        "../../public/id142.jpg",
        "../../public/id143.jpg",
      ]
    },
    {
      id: 15,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id151.jpg",
        "../../public/id152.jpg",
        "../../public/id153.jpg",
      ]
    },
    {
      id: 16,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id161.jpg",
        "../../public/id162.jpg",
        "../../public/id163.jpg",
      ]
    },
    {
      id: 17,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id171.jpg",
        "../../public/id172.jpg",
        "../../public/id173.jpg",
      ]
    },
    {
      id: 18,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id181.jpg",
        "../../public/id182.jpg",
        "../../public/id183.jpg",
        "../../public/id184.jpg",
      ]
    },
    {
      id: 19,
      name: "Compression Socks Set",
      price: 24.95,
      description: "Set of 3 pairs of compression socks designed for healthcare workers who stand for long periods. Provides comfort and improves circulation.",
      images: [
        "../../public/id191.jpg",
        "../../public/id192.jpg",
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
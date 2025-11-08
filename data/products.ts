export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  subcategory: string
  image: string
  gallery: string[]
  inStock: boolean
  stockQuantity: number
  rating: number
  reviewCount: number
  tags: string[]
  nutritionalInfo?: {
    calories: number
    protein: string
    carbs: string
    fat: string
    fiber: string
  }
  origin?: string
  brand?: string
  weight: string
  featured: boolean
  discount?: number
}

export const products: Product[] = [
  // Vegetables
  {
    id: "veg-001",
    name: "Organic Fresh Spinach",
    description: "Fresh, crisp organic spinach leaves perfect for salads, smoothies, and cooking. Packed with iron, vitamins, and minerals.",
    price: 45,
    originalPrice: 65,
    category: "Vegetables",
    subcategory: "Leafy Greens",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1530176611600-d05a6387d07d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622568443884-f11ade8b5c18?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 25,
    rating: 4.8,
    reviewCount: 127,
    tags: ["organic", "fresh", "local", "superfood"],
    nutritionalInfo: {
      calories: 23,
      protein: "2.9g",
      carbs: "3.6g",
      fat: "0.4g",
      fiber: "2.2g"
    },
    origin: "Local Farm",
    brand: "Nature's Best",
    weight: "1 lb bag",
    featured: true,
    discount: 30
  },
  {
    id: "veg-002",
    name: "Fresh Red Tomatoes",
    description: "Vine-ripened red tomatoes with perfect balance of sweetness and acidity. Ideal for salads, sauces, and cooking.",
    price: 40,
    category: "Vegetables",
    subcategory: "Nightshades",
    image: "/fresh-red-tomatoes.jpg",
    gallery: [
      "/fresh-red-tomatoes.jpg",
      "https://images.unsplash.com/photo-1607305388431-c3cc09ed8ad9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 45,
    rating: 4.6,
    reviewCount: 89,
    tags: ["fresh", "vine-ripened", "local"],
    nutritionalInfo: {
      calories: 18,
      protein: "0.9g",
      carbs: "3.9g",
      fat: "0.2g",
      fiber: "1.2g"
    },
    origin: "California",
    weight: "2 lbs",
    featured: false
  },
  {
    id: "veg-003",
    name: "Organic Baby Carrots",
    description: "Sweet and crunchy organic baby carrots, perfect for snacking, salads, or cooking. Rich in beta-carotene.",
    price: 35,
    category: "Vegetables",
    subcategory: "Root Vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604973358045-fb4c901ba62f?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 38,
    rating: 4.7,
    reviewCount: 156,
    tags: ["organic", "baby", "sweet", "healthy"],
    nutritionalInfo: {
      calories: 41,
      protein: "0.9g",
      carbs: "9.6g",
      fat: "0.2g",
      fiber: "2.8g"
    },
    origin: "Organic Valley Farm",
    brand: "Pure Harvest",
    weight: "1 lb bag",
    featured: true
  },
  {
    id: "veg-004",
    name: "Fresh Broccoli Crowns",
    description: "Fresh, crisp broccoli crowns loaded with vitamins, minerals, and antioxidants. Perfect for steaming, roasting, or stir-frying.",
    price: 55,
    category: "Vegetables",
    subcategory: "Cruciferous",
    image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553898234-8e06d0b721aa?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 22,
    rating: 4.5,
    reviewCount: 73,
    tags: ["fresh", "nutritious", "superfood"],
    nutritionalInfo: {
      calories: 34,
      protein: "2.8g",
      carbs: "6.6g",
      fat: "0.4g",
      fiber: "2.6g"
    },
    origin: "Local Organic Farm",
    weight: "1.5 lbs",
    featured: false
  },

  // Fruits
  {
    id: "fruit-001",
    name: "Premium Red Apples",
    description: "Crisp and sweet premium red apples, perfect for snacking or baking. Grown in organic orchards with no pesticides.",
    price: 180,
    originalPrice: 225,
    category: "Fruits",
    subcategory: "Tree Fruits",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590005354167-6da97870c757?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 67,
    rating: 4.9,
    reviewCount: 203,
    tags: ["organic", "sweet", "crisp", "premium"],
    nutritionalInfo: {
      calories: 52,
      protein: "0.3g",
      carbs: "13.8g",
      fat: "0.2g",
      fiber: "2.4g"
    },
    origin: "Washington State",
    brand: "Orchard Fresh",
    weight: "3 lbs bag",
    featured: true,
    discount: 20
  },
  {
    id: "fruit-002",
    name: "Organic Bananas",
    description: "Sweet and creamy organic bananas, perfect for smoothies, baking, or eating fresh. Rich in potassium and natural energy.",
    price: 60,
    category: "Fruits",
    subcategory: "Tropical",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 89,
    rating: 4.6,
    reviewCount: 145,
    tags: ["organic", "tropical", "potassium", "energy"],
    nutritionalInfo: {
      calories: 89,
      protein: "1.1g",
      carbs: "22.8g",
      fat: "0.3g",
      fiber: "2.6g"
    },
    origin: "Ecuador",
    brand: "Tropical Gold",
    weight: "2 lbs bunch",
    featured: false
  },
  {
    id: "fruit-003",
    name: "Fresh Strawberries",
    description: "Sweet and juicy fresh strawberries, perfect for desserts, smoothies, or eating fresh. Packed with vitamin C and antioxidants.",
    price: 120,
    category: "Fruits",
    subcategory: "Berries",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518635017498-87ae29b20267?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 31,
    rating: 4.8,
    reviewCount: 98,
    tags: ["fresh", "sweet", "berries", "vitamin-c"],
    nutritionalInfo: {
      calories: 32,
      protein: "0.7g",
      carbs: "7.7g",
      fat: "0.3g",
      fiber: "2.0g"
    },
    origin: "California",
    weight: "1 lb container",
    featured: true
  },

  // Dairy
  {
    id: "dairy-001",
    name: "Fresh Organic Milk",
    description: "Pure, creamy organic milk from grass-fed cows. No hormones, no antibiotics, just pure nutrition for your family.",
    price: 65,
    category: "Dairy",
    subcategory: "Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 45,
    rating: 4.7,
    reviewCount: 167,
    tags: ["organic", "grass-fed", "hormone-free", "fresh"],
    nutritionalInfo: {
      calories: 150,
      protein: "8g",
      carbs: "12g",
      fat: "8g",
      fiber: "0g"
    },
    origin: "Local Dairy Farm",
    brand: "Pure Dairy",
    weight: "1 gallon",
    featured: false
  },
  {
    id: "dairy-002",
    name: "Greek Yogurt",
    description: "Rich and creamy Greek yogurt with live active cultures. High in protein and probiotics for digestive health.",
    price: 85,
    originalPrice: 110,
    category: "Dairy",
    subcategory: "Yogurt",
    image: "/greek-yogurt-container.png",
    gallery: [
      "/greek-yogurt-container.png",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571217274607-34eae7b35b63?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 28,
    rating: 4.8,
    reviewCount: 134,
    tags: ["greek", "protein", "probiotics", "creamy"],
    nutritionalInfo: {
      calories: 100,
      protein: "15g",
      carbs: "6g",
      fat: "0g",
      fiber: "0g"
    },
    origin: "Vermont",
    brand: "Mountain High",
    weight: "32 oz container",
    featured: true,
    discount: 22
  },
  {
    id: "dairy-003",
    name: "Artisan Cheddar Cheese",
    description: "Aged artisan cheddar cheese with rich, sharp flavor. Perfect for sandwiches, cooking, or cheese boards.",
    price: 280,
    category: "Dairy",
    subcategory: "Cheese",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 15,
    rating: 4.9,
    reviewCount: 87,
    tags: ["artisan", "aged", "sharp", "premium"],
    nutritionalInfo: {
      calories: 113,
      protein: "7g",
      carbs: "1g",
      fat: "9g",
      fiber: "0g"
    },
    origin: "Wisconsin",
    brand: "Artisan Valley",
    weight: "8 oz block",
    featured: true
  },

  // Grains & Cereals
  {
    id: "grain-001",
    name: "Premium Basmati Rice",
    description: "Aromatic premium basmati rice with long grains and delicate flavor. Perfect for biryanis, pilafs, and everyday meals.",
    price: 450,
    category: "Grains & Cereals",
    subcategory: "Rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550604964-d5ad62b14e29?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 42,
    rating: 4.7,
    reviewCount: 189,
    tags: ["basmati", "aromatic", "premium", "long-grain"],
    nutritionalInfo: {
      calories: 205,
      protein: "4.3g",
      carbs: "45g",
      fat: "0.4g",
      fiber: "0.6g"
    },
    origin: "India",
    brand: "Royal Harvest",
    weight: "10 lb bag",
    featured: false
  },
  {
    id: "grain-002",
    name: "Organic Quinoa",
    description: "Superfood organic quinoa with complete protein profile. Perfect for salads, bowls, and healthy meal prep.",
    price: 320,
    originalPrice: 400,
    category: "Grains & Cereals",
    subcategory: "Ancient Grains",
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595354280901-86594dd2f2d8?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 35,
    rating: 4.8,
    reviewCount: 156,
    tags: ["organic", "superfood", "protein", "gluten-free"],
    nutritionalInfo: {
      calories: 222,
      protein: "8g",
      carbs: "39g",
      fat: "4g",
      fiber: "5g"
    },
    origin: "Peru",
    brand: "Andean Harvest",
    weight: "2 lb bag",
    featured: true,
    discount: 25
  },

  // Pantry Items
  {
    id: "pantry-001",
    name: "Raw Organic Honey",
    description: "Pure raw organic honey with floral notes and natural enzymes. Unprocessed and unfiltered for maximum health benefits.",
    price: 350,
    category: "Pantry",
    subcategory: "Sweeteners",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587049016823-06f0a222c09b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550899071-d7fd0040ee98?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 27,
    rating: 4.9,
    reviewCount: 145,
    tags: ["raw", "organic", "unfiltered", "pure"],
    nutritionalInfo: {
      calories: 64,
      protein: "0.1g",
      carbs: "17g",
      fat: "0g",
      fiber: "0g"
    },
    origin: "Local Apiaries",
    brand: "Nature's Gold",
    weight: "1 lb jar",
    featured: true
  },
  {
    id: "pantry-002",
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed extra virgin olive oil with robust flavor and high antioxidant content. Perfect for cooking and dressings.",
    price: 650,
    category: "Pantry",
    subcategory: "Oils",
    image: "https://images.unsplash.com/photo-1551909006-e4baea9d2a9d?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551909006-e4baea9d2a9d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622207230648-4ef1dd69c8d8?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 33,
    rating: 4.8,
    reviewCount: 112,
    tags: ["extra-virgin", "cold-pressed", "mediterranean", "antioxidants"],
    nutritionalInfo: {
      calories: 119,
      protein: "0g",
      carbs: "0g",
      fat: "14g",
      fiber: "0g"
    },
    origin: "Italy",
    brand: "Tuscan Gold",
    weight: "500ml bottle",
    featured: false
  },

  // Beverages
  {
    id: "bev-001",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice with no added sugars or preservatives. Packed with vitamin C and natural flavor.",
    price: 90,
    category: "Beverages",
    subcategory: "Fresh Juices",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 41,
    rating: 4.6,
    reviewCount: 98,
    tags: ["fresh", "no-sugar", "vitamin-c", "natural"],
    nutritionalInfo: {
      calories: 112,
      protein: "2g",
      carbs: "26g",
      fat: "0g",
      fiber: "0g"
    },
    origin: "Florida",
    brand: "Sunshine Fresh",
    weight: "64 fl oz",
    featured: false
  },

  // Meat & Fish
  {
    id: "meat-001",
    name: "Organic Chicken Breast",
    description: "Free-range organic chicken breast, antibiotic-free and hormone-free. Perfect for healthy protein meals.",
    price: 420,
    category: "Meat & Fish",
    subcategory: "Poultry",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 18,
    rating: 4.7,
    reviewCount: 76,
    tags: ["organic", "free-range", "hormone-free", "protein"],
    nutritionalInfo: {
      calories: 165,
      protein: "31g",
      carbs: "0g",
      fat: "3.6g",
      fiber: "0g"
    },
    origin: "Local Farm",
    brand: "Farm Fresh",
    weight: "2 lbs",
    featured: false
  },

  // Frozen
  {
    id: "frozen-001",
    name: "Organic Frozen Blueberries",
    description: "Flash-frozen organic blueberries at peak ripeness. Perfect for smoothies, baking, and healthy snacks.",
    price: 180,
    category: "Frozen",
    subcategory: "Frozen Fruits",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&h=400&fit=crop"
    ],
    inStock: true,
    stockQuantity: 52,
    rating: 4.8,
    reviewCount: 134,
    tags: ["organic", "frozen", "antioxidants", "berries"],
    nutritionalInfo: {
      calories: 84,
      protein: "1g",
      carbs: "21g",
      fat: "0g",
      fiber: "4g"
    },
    origin: "Maine",
    brand: "Wild Harvest",
    weight: "2 lb bag",
    featured: true
  }
]

export const categories = [
  "Vegetables",
  "Fruits", 
  "Dairy",
  "Grains & Cereals",
  "Meat & Fish",
  "Pantry",
  "Beverages",
  "Snacks",
  "Frozen",
  "Household"
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured)
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  )
}
export const shops = [
  {
    id: "shop-1",
    name: "Aura Essentials",
    description: "Curated minimal lifestyle & beauty products.",
    bannerImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    theme: "theme-shop",
    accentColor: "orange",
  },
  {
    id: "shop-2",
    name: "TechNova",
    description: "Premium gadgets and technical gear.",
    bannerImage: "https://images.unsplash.com/photo-1550009158-9effb64fda70?q=80&w=2070&auto=format&fit=crop",
    theme: "theme-shop",
    accentColor: "slate",
  }
];

export const products = [
  {
    id: "prod-1",
    title: "Minimalist Watch",
    brand: "Aura Essentials",
    price: 9999,
    originalPrice: 16999,
    category: "Fashion",
    tag: "IN STOCK",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    fullDescription: "A timeless masterpiece of minimalist design. This watch features a clean, uncluttered face with a brushed stainless steel case and a genuine leather strap. Perfect for those who appreciate understated elegance and precision craftsmanship.",
    additionalImages: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=2060&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop"
    ],
    shopId: "shop-1",
    shopName: "Aura Essentials"
  },
  {
    id: "prod-2",
    title: "Organic Face Serum",
    brand: "Aura Essentials",
    price: 3499,
    originalPrice: 7999,
    category: "Beauty",
    tag: "EDITOR'S PICK",
    image: "https://images.unsplash.com/photo-1608248593802-8600cd91dbff?q=80&w=1974&auto=format&fit=crop",
    fullDescription: "Revitalize your skin with our signature organic face serum. Formulated with 100% natural ingredients, including cold-pressed argan oil and rosehip extract. This lightweight formula absorbs quickly to provide deep hydration and a youthful glow.",
    additionalImages: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1972&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601049676093-2868a2649b9d?q=80&w=1972&auto=format&fit=crop"
    ],
    shopId: "shop-1",
    shopName: "Aura Essentials"
  },
  {
    id: "prod-3",
    title: "Wireless Mechanical Keyboard",
    brand: "TechNova",
    price: 12499,
    originalPrice: 20999,
    category: "Electronics",
    tag: "LIMITED",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop",
    fullDescription: "Elevat your typing experience with the TechNova wireless mechanical keyboard. Featuring ultra-responsive hot-swappable switches and a sleek aluminum chassis. Its dual-mode connectivity allows you to switch between three devices seamlessly.",
    additionalImages: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541140532154-b024fd219756?q=80&w=2070&auto=format&fit=crop"
    ],
    shopId: "shop-2",
    shopName: "TechNova"
  },
  {
    id: "prod-4",
    title: "Noise-Cancelling Headphones",
    brand: "TechNova",
    price: 24999,
    originalPrice: 35999,
    category: "Electronics",
    tag: "IN STOCK",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Immerse yourself in pure sound. These headphones feature industry-leading active noise cancellation technology and high-fidelity audio drivers. With up to 40 hours of battery life, they are the perfect companion for long travels and focused work.",
    additionalImages: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop"
    ],
    shopId: "shop-2",
    shopName: "TechNova"
  },
  {
    id: "fashion-1",
    title: "Denim Langford",
    subtitle: "Men Loose Fit Mid Rise ...",
    brand: "Langford",
    price: 453,
    originalPrice: 1299,
    discount: "65% OFF",
    category: "Fashion",
    tag: "AD",
    rating: 3.6,
    reviewsCount: 108,
    bankOffer: "₹403 with Bank offer",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
    shopId: "shop-1",
    shopName: "Langford Store"
  },
  {
    id: "fashion-2",
    title: "Denim Langford",
    subtitle: "Men Loose Fit Mid Rise ...",
    brand: "Langford",
    price: 432,
    originalPrice: 1299,
    discount: "66% OFF",
    category: "Fashion",
    tag: "AD",
    rating: 3.6,
    reviewsCount: 62,
    itemTag: "#StraightFit",
    bankOffer: "₹382 with Bank offer",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
    shopId: "shop-1",
    shopName: "Langford Store"
  },
  {
    id: "fashion-3",
    title: "J Creation",
    subtitle: "Men Slim Mid Rise Grey ...",
    brand: "J Creation",
    price: 483,
    originalPrice: 1999,
    discount: "75% OFF",
    category: "Fashion",
    tag: "AD",
    rating: 3.7,
    reviewsCount: 75,
    bankOffer: "₹433 with Bank offer",
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1935&auto=format&fit=crop",
    shopId: "shop-1",
    shopName: "J Creation Hub"
  },
  {
    id: "fashion-4",
    title: "Star4well",
    subtitle: "Men Relaxed Fit Mid Ris...",
    brand: "Star4well",
    price: 389,
    originalPrice: 1999,
    discount: "80% OFF",
    category: "Fashion",
    tag: "BESTSELLER",
    rating: 3.8,
    reviewsCount: "13k",
    itemTag: "#StraightFit",
    statusTag: "trendy",
    bankOffer: "₹339 with Bank offer",
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1974&auto=format&fit=crop",
    shopId: "shop-1",
    shopName: "Star4well Official"
  }
];

export const models = [
  {
    id: "model-1",
    name: "Elena Rostova",
    category: "High Fashion",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    about: "International high fashion model with a decade of experience on the Parisian runways.",
    theme: "theme-model",
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  {
    id: "model-2",
    name: "Marcus Chen",
    category: "Commercial / Ads",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    about: "Versatile actor and talent featured in global commercial campaigns.",
    theme: "theme-model",
    gallery: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop"
    ]
  }
];

export const serviceProviders = [
  {
    id: "sp-1",
    name: "Luxe Salon & Spa",
    category: "Parlour",
    description: "Premium hair and skin treatment tailored for you.",
    bannerImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    theme: "theme-service",
    services: [
      { title: "Bridal Makeup", price: "₹16,000" },
      { title: "Advanced Facial", price: "₹6,500" },
      { title: "Hair Spa", price: "₹4,000" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "sp-2",
    name: "Apex Build Co.",
    category: "Construction",
    description: "Modern architectural construction and renovations.",
    bannerImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    theme: "theme-service",
    services: [
      { title: "Home Renovation", price: "Custom Quote" },
      { title: "Interior Design", price: "Custom Quote" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

export const services = [
  { id: "srv-1", category: "Parlour", providerId: "sp-1", providerName: "Luxe Salon & Spa", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" },
  { id: "srv-2", category: "Construction", providerId: "sp-2", providerName: "Apex Build Co.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" }
];

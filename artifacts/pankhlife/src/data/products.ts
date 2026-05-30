export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "Yoga Mats" | "Accessories" | "Herbal Wellness" | "Meditation";
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Cork Yoga Mat",
    description: "Eco-friendly cork surface with natural rubber base. Superior grip, antimicrobial, 6mm thick.",
    price: 2499,
    originalPrice: 3499,
    category: "Yoga Mats",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80",
    badge: "Bestseller",
    inStock: true,
  },
  {
    id: "p2",
    name: "Organic Cotton Yoga Mat",
    description: "Hand-woven organic cotton with non-slip backing. Traditional and sustainable practice essential.",
    price: 1899,
    category: "Yoga Mats",
    rating: 4.7,
    reviews: 84,
    image: "/mat.webp",
    inStock: true,
  },
  {
    id: "p3",
    name: "Yoga Strap & Block Set",
    description: "Cotton strap (8ft) and high-density foam block. Perfect props for deepening alignment safely.",
    price: 699,
    originalPrice: 999,
    category: "Accessories",
    rating: 4.8,
    reviews: 201,
    image: "/yogastrap.jpg",
    badge: "Sale",
    inStock: true,
  },
  {
    id: "p4",
    name: "Meditation Cushion (Zafu)",
    description: "Hand-sewn buckwheat-filled zafu in organic cotton. Supports proper spinal alignment during meditation.",
    price: 1299,
    category: "Meditation",
    rating: 4.9,
    reviews: 67,
    image: "/cusion.jpg",
    inStock: true,
  },
  {
    id: "p5",
    name: "Ashwagandha Wellness Blend",
    description: "Organic ashwagandha, shatavari, and brahmi blend for stress relief, energy, and mental clarity.",
    price: 899,
    originalPrice: 1199,
    category: "Herbal Wellness",
    rating: 4.6,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=500&q=80",
    badge: "Popular",
    inStock: true,
  },
  {
    id: "p6",
    name: "Singing Bowl Set",
    description: "Hand-hammered Tibetan singing bowl with mallet and cushion. For meditation, healing, and ritual.",
    price: 2199,
    category: "Meditation",
    rating: 4.8,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    inStock: true,
  },
  {
    id: "p7",
    name: "Yoga Bolster Pillow",
    description: "Firm cotton bolster for restorative yoga. Supports deep relaxation in supported poses.",
    price: 1599,
    category: "Accessories",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    inStock: true,
  },
  {
    id: "p8",
    name: "Triphala Herbal Supplement",
    description: "Traditional Ayurvedic formula of three fruits. Supports digestion, detox, and immunity.",
    price: 599,
    category: "Herbal Wellness",
    rating: 4.5,
    reviews: 219,
    image: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=500&q=80",
    inStock: true,
  },
];

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: number;
  badge: string;
  image: string;
  highlights: string[];
  spotsLeft: number;
}

const now = new Date();

const addDays = (days: number): string => {
  const d = new Date(now);
  d.setDate(d.getDate() + days);
  return d.toISOString();
};

export const workshops: Workshop[] = [
  {
    id: "summer-wellness",
    title: "Summer Wellness Retreat",
    description:
      "A transformative 3-day intensive combining yoga, pranayama, Ayurvedic nutrition, and mindful living practices. Limited to 20 participants for an intimate experience.",
    date: addDays(12),
    endDate: addDays(14),
    duration: "3 days",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=700&q=80",
    highlights: ["3 full days of immersive practice", "Ayurvedic meals included", "Take-home wellness kit", "Certificate of completion"],
    spotsLeft: 6,
  },
  {
    id: "navratri-special",
    title: "Navratri Yoga Challenge",
    description:
      "Nine days of guided daily practice honouring the divine feminine. Each day explores a different energy — from grounding to transcendence.",
    date: addDays(5),
    endDate: addDays(13),
    duration: "9 days",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    badge: "Festival Offer",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80",
    highlights: ["Daily live sessions", "WhatsApp community support", "Recorded classes", "E-certificate"],
    spotsLeft: 14,
  },

];

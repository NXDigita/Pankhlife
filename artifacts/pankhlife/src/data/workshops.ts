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
  {
    id: "corporate-wellness",
    title: "Corporate Wellness Workshop",
    description:
      "A half-day workshop designed for working professionals — desk yoga, breathwork for focus, and stress-release techniques you can use at your desk.",
    date: addDays(20),
    endDate: addDays(20),
    duration: "4 hours",
    price: 899,
    originalPrice: 1299,
    discount: 30,
    badge: "Early Bird",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
    highlights: ["Desk yoga techniques", "Breathwork for focus", "Group Q&A", "Resource booklet"],
    spotsLeft: 22,
  },
  {
    id: "beginners-immersion",
    title: "Yoga for Absolute Beginners",
    description:
      "A nurturing weekend immersion to help you build a strong, safe foundation. No prior experience required — just an open heart and a yoga mat.",
    date: addDays(8),
    endDate: addDays(9),
    duration: "2 days",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    badge: "New Batch",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=700&q=80",
    highlights: ["Foundations of asana", "Beginner-friendly breathwork", "Q&A with Ms. Renu", "Practice guide to take home"],
    spotsLeft: 10,
  },
];

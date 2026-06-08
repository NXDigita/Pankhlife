export interface YogaClass {
  id: string;
  title: string;
  description: string;
  duration: string;
  timing: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  price: number;
  originalPrice?: number;
  type: "online" | "offline" | "both";
  session: "morning" | "evening" | "flexible";
  image: string;
  benefits: string[];
}

export const classes: YogaClass[] = [
  {
    id: "morning-yoga",
    title: "Morning Yoga",
    description:
      "Begin your day with intention. This energising sequence combines sun salutations, standing poses, and breathwork to awaken the body and clarify the mind.",
    duration: "60 mins",
    timing: "7:00 AM – 8:00 AM (Mon - Sat)",
    difficulty: "All Levels",
    price: 1500,
    originalPrice: 1700,
    type: "both",
    session: "morning",
    image: "/renu_forward_fold.png",
    benefits: ["Boosts energy", "Improves flexibility", "Mental clarity"],
  },
  {
    id: "meditation",
    title: "Meditation",
    description:
      "A gentle inward journey using guided mindfulness, body-scan techniques, and pranayama. Ideal for stress relief, better sleep, and emotional balance.",
    duration: "45 mins",
    timing: "10:00 AM – 10:45 AM / 7:00 PM – 7:45 PM",
    difficulty: "Beginner",
    price: 999,
    type: "both",
    session: "morning",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    benefits: ["Reduces anxiety", "Better sleep", "Inner peace"],
  },
  {
    id: "weight-loss-yoga",
    title: "Weight loss Program",
    description:
      "A dynamic flow of power poses, twists, and metabolic-boosting sequences designed to support healthy weight management and improve digestion.",
    duration: "1 hour 10 mins",
    timing: "5:50 PM – 7:00 PM (Mon - Fri)",
    difficulty: "Intermediate",
    price: 1700,
    originalPrice: 2000,
    type: "offline",
    session: "evening",
    image: "/renu_arm_balance_1.png",
    benefits: ["Weight management", "Better digestion", "Core strength"],
  },
  {
    id: "bala-yoga",
    title: "Bala Yoga",
    description:
      "A specialised program introducing the fundamentals of yoga to children, enhancing focus, flexibility, and emotional balance.",
    duration: "60 mins",
    timing: "5:00 PM – 6:00 PM (Mon - Fri)",
    difficulty: "Beginner",
    price: 1500,
    type: "both",
    session: "evening",
    image: "/balayoga.jpg",
    benefits: ["Focus", "Flexibility", "Emotional balance"],
  },
  {
    id: "therapy-yoga",
    title: "Therapy Yoga",
    description:
      "Therapeutic sequences tailored for back pain, knee issues, arthritis, and chronic conditions. Each session is personalised and gentle.",
    duration: "60 min",
    timing: "9:00 AM – 10:00 AM",
    difficulty: "Beginner",
    price: 2000,
    type: "offline",
    session: "morning",
    image: "/renu_arm_balance_2.png",
    benefits: ["Pain relief", "Improved mobility", "Personalised care"],
  },
  {
    id: "online-classes",
    title: "Online Classes",
    description:
      "Practise from the comfort of your home with live, interactive Zoom sessions. Recordings available for 24 hours after each class.",
    duration: "60 min",
    timing: "7:00 AM / 6:00 PM",
    difficulty: "All Levels",
    price: 799,
    originalPrice: 1200,
    type: "online",
    session: "flexible",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80",
    benefits: ["Practise anywhere", "Flexible schedule", "Recorded sessions"],
  },
];

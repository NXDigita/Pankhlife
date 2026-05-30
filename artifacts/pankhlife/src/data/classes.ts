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
    duration: "60 min",
    timing: "6:00 AM – 7:00 AM",
    difficulty: "All Levels",
    price: 1200,
    originalPrice: 1500,
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
    duration: "45 min",
    timing: "7:00 AM – 7:45 AM",
    difficulty: "Beginner",
    price: 999,
    type: "both",
    session: "morning",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    benefits: ["Reduces anxiety", "Better sleep", "Inner peace"],
  },
  {
    id: "weight-loss-yoga",
    title: "Weight Loss Yoga",
    description:
      "A dynamic flow of power poses, twists, and metabolic-boosting sequences designed to support healthy weight management and improve digestion.",
    duration: "75 min",
    timing: "5:30 PM – 6:45 PM",
    difficulty: "Intermediate",
    price: 1500,
    originalPrice: 2000,
    type: "offline",
    session: "evening",
    image: "/renu_arm_balance_1.png",
    benefits: ["Weight management", "Better digestion", "Core strength"],
  },
  {
    id: "pranayama",
    title: "Pranayama",
    description:
      "Ancient breathing practices — Nadi Shodhana, Kapalabhati, Bhramari — to expand lung capacity, calm the nervous system, and increase vitality.",
    duration: "45 min",
    timing: "6:30 AM – 7:15 AM",
    difficulty: "All Levels",
    price: 899,
    type: "both",
    session: "morning",
    image: "/pranayama.jpg",
    benefits: ["Lung health", "Stress relief", "Increased vitality"],
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
  {
    id: "offline-classes",
    title: "Offline Studio Classes",
    description:
      "In-person classes in our serene Mumbai studio. Small batches ensure personal attention, hands-on adjustments, and a deeply communal experience.",
    duration: "75 min",
    timing: "Multiple slots daily",
    difficulty: "All Levels",
    price: 1800,
    type: "offline",
    session: "flexible",
    image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=600&q=80",
    benefits: ["Personal attention", "Community", "Hands-on guidance"],
  },
];

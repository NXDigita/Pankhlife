export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  duration: string;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Ms. Renu's gentle guidance transformed not just my practice but my entire relationship with my body. Three months in, my chronic back pain has almost disappeared and I sleep better than I have in years.",
    duration: "Student for 8 months",
    initials: "PS",
    color: "bg-sage-100",
  },
  {
    id: "t2",
    name: "Arjun Mehta",
    location: "Pune",
    rating: 5,
    text: "I joined the online classes sceptically — I had never done yoga before. Now I practise every morning without fail. Ms. Renu has a rare gift for making every student feel seen, even through a screen.",
    duration: "Student for 6 months",
    initials: "AM",
    color: "bg-lavender-100",
  },
  {
    id: "t3",
    name: "Sunita Rao",
    location: "Bangalore",
    rating: 5,
    text: "The Summer Wellness Retreat was one of the most nourishing experiences of my life. Ms. Renu creates a space of complete safety. I left feeling lighter, more alive, and deeply at peace.",
    duration: "Workshop attendee",
    initials: "SR",
    color: "bg-beige-100",
  },
  {
    id: "t4",
    name: "Kavita Nair",
    location: "Mumbai",
    rating: 5,
    text: "After two knee surgeries, I thought yoga was behind me. Ms. Renu's therapy yoga classes have given me my mobility back. She understands anatomy deeply and never rushes you.",
    duration: "Student for 1 year",
    initials: "KN",
    color: "bg-green-100",
  },
  {
    id: "t5",
    name: "Rohan Desai",
    location: "Thane",
    rating: 5,
    text: "The pranayama sessions alone are worth every rupee. I manage my anxiety better, my focus at work has improved, and my resting heart rate has dropped. The science behind what Ms. Renu teaches is real.",
    duration: "Student for 4 months",
    initials: "RD",
    color: "bg-amber-100",
  },
  {
    id: "t6",
    name: "Deepa Krishnamurthy",
    location: "Chennai",
    rating: 5,
    text: "I started the weight loss programme after years of fad diets. No counting, no punishment — just mindful movement and eating. I have lost 8 kg and, more importantly, I am finally at peace with my body.",
    duration: "Student for 5 months",
    initials: "DK",
    color: "bg-purple-100",
  },
];

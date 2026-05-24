export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export interface ScheduleSlot {
  id: string;
  day: DayOfWeek;
  time: string;
  endTime: string;
  classTitle: string;
  instructor: string;
  duration: string;
  type: "morning" | "evening";
  classType: "Morning Yoga" | "Meditation" | "Pranayama" | "Weight Loss" | "Therapy Yoga" | "Online";
  spotsTotal: number;
  spotsLeft: number;
  mode: "online" | "offline";
  color: string;
}

export const schedule: ScheduleSlot[] = [
  // Monday
  { id: "s1", day: "Monday", time: "6:00 AM", endTime: "7:00 AM", classTitle: "Morning Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Morning Yoga", spotsTotal: 20, spotsLeft: 5, mode: "offline", color: "bg-green-100 border-green-300 text-green-800" },
  { id: "s2", day: "Monday", time: "7:00 AM", endTime: "7:45 AM", classTitle: "Meditation", instructor: "Ms. Renu Patil", duration: "45 min", type: "morning", classType: "Meditation", spotsTotal: 15, spotsLeft: 8, mode: "both", color: "bg-purple-100 border-purple-300 text-purple-800" },
  { id: "s3", day: "Monday", time: "5:30 PM", endTime: "6:45 PM", classTitle: "Weight Loss Yoga", instructor: "Ms. Renu Patil", duration: "75 min", type: "evening", classType: "Weight Loss", spotsTotal: 15, spotsLeft: 3, mode: "offline", color: "bg-amber-100 border-amber-300 text-amber-800" },
  { id: "s4", day: "Monday", time: "6:00 PM", endTime: "7:00 PM", classTitle: "Online Morning Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "evening", classType: "Online", spotsTotal: 30, spotsLeft: 12, mode: "online", color: "bg-blue-100 border-blue-300 text-blue-800" },
  // Tuesday
  { id: "s5", day: "Tuesday", time: "6:00 AM", endTime: "6:45 AM", classTitle: "Pranayama", instructor: "Ms. Renu Patil", duration: "45 min", type: "morning", classType: "Pranayama", spotsTotal: 20, spotsLeft: 9, mode: "offline", color: "bg-teal-100 border-teal-300 text-teal-800" },
  { id: "s6", day: "Tuesday", time: "9:00 AM", endTime: "10:00 AM", classTitle: "Therapy Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Therapy Yoga", spotsTotal: 8, spotsLeft: 2, mode: "offline", color: "bg-rose-100 border-rose-300 text-rose-800" },
  { id: "s7", day: "Tuesday", time: "5:30 PM", endTime: "6:30 PM", classTitle: "Evening Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "evening", classType: "Morning Yoga", spotsTotal: 20, spotsLeft: 7, mode: "offline", color: "bg-green-100 border-green-300 text-green-800" },
  // Wednesday
  { id: "s8", day: "Wednesday", time: "6:00 AM", endTime: "7:00 AM", classTitle: "Morning Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Morning Yoga", spotsTotal: 20, spotsLeft: 4, mode: "offline", color: "bg-green-100 border-green-300 text-green-800" },
  { id: "s9", day: "Wednesday", time: "7:00 AM", endTime: "7:45 AM", classTitle: "Meditation", instructor: "Ms. Renu Patil", duration: "45 min", type: "morning", classType: "Meditation", spotsTotal: 15, spotsLeft: 11, mode: "both", color: "bg-purple-100 border-purple-300 text-purple-800" },
  { id: "s10", day: "Wednesday", time: "6:00 PM", endTime: "7:15 PM", classTitle: "Weight Loss Yoga", instructor: "Ms. Renu Patil", duration: "75 min", type: "evening", classType: "Weight Loss", spotsTotal: 15, spotsLeft: 6, mode: "offline", color: "bg-amber-100 border-amber-300 text-amber-800" },
  // Thursday
  { id: "s11", day: "Thursday", time: "6:00 AM", endTime: "6:45 AM", classTitle: "Pranayama", instructor: "Ms. Renu Patil", duration: "45 min", type: "morning", classType: "Pranayama", spotsTotal: 20, spotsLeft: 14, mode: "offline", color: "bg-teal-100 border-teal-300 text-teal-800" },
  { id: "s12", day: "Thursday", time: "9:00 AM", endTime: "10:00 AM", classTitle: "Therapy Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Therapy Yoga", spotsTotal: 8, spotsLeft: 1, mode: "offline", color: "bg-rose-100 border-rose-300 text-rose-800" },
  { id: "s13", day: "Thursday", time: "5:30 PM", endTime: "6:30 PM", classTitle: "Evening Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "evening", classType: "Morning Yoga", spotsTotal: 20, spotsLeft: 10, mode: "offline", color: "bg-green-100 border-green-300 text-green-800" },
  // Friday
  { id: "s14", day: "Friday", time: "6:00 AM", endTime: "7:00 AM", classTitle: "Morning Yoga", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Morning Yoga", spotsTotal: 20, spotsLeft: 8, mode: "offline", color: "bg-green-100 border-green-300 text-green-800" },
  { id: "s15", day: "Friday", time: "7:00 AM", endTime: "7:45 AM", classTitle: "Meditation", instructor: "Ms. Renu Patil", duration: "45 min", type: "morning", classType: "Meditation", spotsTotal: 15, spotsLeft: 5, mode: "both", color: "bg-purple-100 border-purple-300 text-purple-800" },
  { id: "s16", day: "Friday", time: "6:00 PM", endTime: "7:15 PM", classTitle: "Weight Loss Yoga", instructor: "Ms. Renu Patil", duration: "75 min", type: "evening", classType: "Weight Loss", spotsTotal: 15, spotsLeft: 9, mode: "offline", color: "bg-amber-100 border-amber-300 text-amber-800" },
  // Saturday
  { id: "s17", day: "Saturday", time: "6:00 AM", endTime: "7:30 AM", classTitle: "Weekend Flow", instructor: "Ms. Renu Patil", duration: "90 min", type: "morning", classType: "Morning Yoga", spotsTotal: 25, spotsLeft: 3, mode: "offline", color: "bg-green-100 border-green-300 text-green-800" },
  { id: "s18", day: "Saturday", time: "8:00 AM", endTime: "9:00 AM", classTitle: "Pranayama & Meditation", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Pranayama", spotsTotal: 20, spotsLeft: 7, mode: "both", color: "bg-teal-100 border-teal-300 text-teal-800" },
  // Sunday
  { id: "s19", day: "Sunday", time: "7:00 AM", endTime: "8:30 AM", classTitle: "Restorative Yoga", instructor: "Ms. Renu Patil", duration: "90 min", type: "morning", classType: "Therapy Yoga", spotsTotal: 15, spotsLeft: 6, mode: "offline", color: "bg-rose-100 border-rose-300 text-rose-800" },
  { id: "s20", day: "Sunday", time: "10:00 AM", endTime: "11:00 AM", classTitle: "Online Session", instructor: "Ms. Renu Patil", duration: "60 min", type: "morning", classType: "Online", spotsTotal: 30, spotsLeft: 18, mode: "online", color: "bg-blue-100 border-blue-300 text-blue-800" },
];

export const days: DayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

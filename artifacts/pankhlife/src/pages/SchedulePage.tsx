import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Wifi, MapPin } from "lucide-react";
import { schedule, days } from "@/data/schedule";
import type { DayOfWeek } from "@/data/schedule";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

type ClassTypeFilter = "All" | "Morning Yoga" | "Meditation" | "Pranayama" | "Weight Loss" | "Therapy Yoga" | "Online";

const typeFilters: ClassTypeFilter[] = ["All", "Morning Yoga", "Meditation", "Pranayama", "Weight Loss", "Therapy Yoga", "Online"];

const dayAbbr: Record<DayOfWeek, string> = {
  Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed",
  Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun",
};

export default function SchedulePage() {
  const [typeFilter, setTypeFilter] = useState<ClassTypeFilter>("All");
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>("Monday");

  const filterSlots = (slots: typeof schedule) =>
    typeFilter === "All" ? slots : slots.filter((s) => s.classType === typeFilter);

  const weeklyFiltered = filterSlots(schedule);
  const dailyFiltered = filterSlots(schedule.filter((s) => s.day === selectedDay));
  const morningSlots = dailyFiltered.filter((s) => s.type === "morning");
  const eveningSlots = dailyFiltered.filter((s) => s.type === "evening");

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80"
          alt="Schedule"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3">Plan Your Week</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl font-light text-white">Class Schedule</motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Type Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {typeFilters.map((f) => (
            <Button
              key={f}
              variant={typeFilter === f ? "default" : "outline"}
              size="sm"
              className="font-sans text-xs rounded-full"
              onClick={() => setTypeFilter(f)}
              data-testid={`type-filter-${f.toLowerCase().replace(" ", "-")}`}
            >{f}</Button>
          ))}
        </div>

        <Tabs defaultValue="weekly">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="weekly" className="font-sans text-sm">Weekly Calendar</TabsTrigger>
              <TabsTrigger value="daily" className="font-sans text-sm">Daily View</TabsTrigger>
            </TabsList>
          </div>

          {/* Weekly View */}
          <TabsContent value="weekly">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {days.map((day) => {
                const daySlots = weeklyFiltered.filter((s) => s.day === day);
                return (
                  <motion.div key={day} variants={fadeUp}>
                    <div className="bg-card rounded-xl border border-border overflow-hidden">
                      <div className="bg-primary text-primary-foreground py-2 px-3 text-center">
                        <p className="font-sans font-semibold text-sm">{dayAbbr[day]}</p>
                        <p className="text-primary-foreground/70 text-xs">{day}</p>
                      </div>
                      <div className="p-2 space-y-2 min-h-24">
                        {daySlots.length === 0 ? (
                          <p className="text-center text-xs text-muted-foreground py-4">No classes</p>
                        ) : (
                          daySlots.map((slot) => (
                            <div
                              key={slot.id}
                              className={`p-2 rounded-lg border text-xs ${slot.color}`}
                              data-testid={`slot-${slot.id}`}
                            >
                              <p className="font-semibold leading-tight">{slot.classTitle}</p>
                              <p className="opacity-80">{slot.time}</p>
                              <p className="opacity-70">{slot.duration}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>

          {/* Daily View */}
          <TabsContent value="daily">
            {/* Day selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {days.map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? "default" : "outline"}
                  size="sm"
                  className="font-sans text-xs rounded-full"
                  onClick={() => setSelectedDay(day)}
                  data-testid={`day-btn-${day.toLowerCase()}`}
                >{dayAbbr[day]}</Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Morning */}
              <div>
                <h3 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
                  <span className="text-amber-500">&#9728;</span> Morning Sessions
                </h3>
                {morningSlots.length === 0 ? (
                  <Card><CardContent className="p-6 text-center text-muted-foreground text-sm">No morning classes on {selectedDay}</CardContent></Card>
                ) : (
                  <motion.div className="space-y-4" variants={stagger} initial="hidden" animate="visible" key={`morning-${selectedDay}`}>
                    {morningSlots.map((slot) => (
                      <SlotCard key={slot.id} slot={slot} />
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Evening */}
              <div>
                <h3 className="font-serif text-xl font-medium mb-4 flex items-center gap-2">
                  <span className="text-indigo-400">&#9790;</span> Evening Sessions
                </h3>
                {eveningSlots.length === 0 ? (
                  <Card><CardContent className="p-6 text-center text-muted-foreground text-sm">No evening classes on {selectedDay}</CardContent></Card>
                ) : (
                  <motion.div className="space-y-4" variants={stagger} initial="hidden" animate="visible" key={`evening-${selectedDay}`}>
                    {eveningSlots.map((slot) => (
                      <SlotCard key={slot.id} slot={slot} />
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function SlotCard({ slot }: { slot: typeof schedule[0] }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
      <Card className="hover:shadow-md transition-shadow" data-testid={`slot-card-${slot.id}`}>
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-serif text-lg font-medium">{slot.classTitle}</h4>
              <p className="text-xs text-muted-foreground font-sans mt-0.5">with {slot.instructor}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-sans ${slot.color}`}>
              {slot.classType}
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-primary" />{slot.time} – {slot.endTime}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-primary" />{slot.duration}</span>
            <span className="flex items-center gap-1">
              {slot.mode === "online" ? <Wifi className="h-3 w-3 text-primary" /> : <MapPin className="h-3 w-3 text-primary" />}
              {slot.mode.charAt(0).toUpperCase() + slot.mode.slice(1)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3 text-primary" />
              {slot.spotsLeft} / {slot.spotsTotal} spots left
              {slot.spotsLeft <= 3 && <Badge variant="destructive" className="text-xs ml-1">Almost Full</Badge>}
            </span>
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="font-sans text-xs" data-testid={`book-slot-${slot.id}`}>
                Book This Class
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

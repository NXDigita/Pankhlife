import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Wifi, MapPin } from "lucide-react";
import { classes } from "@/data/classes";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

type Filter = "all" | "online" | "offline" | "morning" | "evening";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Online", value: "online" },
  { label: "Offline", value: "offline" },
  { label: "Morning", value: "morning" },
  { label: "Evening", value: "evening" },
];

const difficultyColors: Record<string, string> = {
  "Beginner": "bg-green-100 text-green-800 border-green-200",
  "Intermediate": "bg-amber-100 text-amber-800 border-amber-200",
  "Advanced": "bg-rose-100 text-rose-800 border-rose-200",
  "All Levels": "bg-blue-100 text-blue-800 border-blue-200",
};

export default function ClassesPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = classes.filter((cls) => {
    if (active === "all") return true;
    if (active === "online") return cls.type === "online" || cls.type === "both";
    if (active === "offline") return cls.type === "offline" || cls.type === "both";
    if (active === "morning") return cls.session === "morning";
    if (active === "evening") return cls.session === "evening";
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1400&q=80"
          alt="Yoga classes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3"
          >Find Your Practice</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl font-light text-white"
          >Our Yoga Classes</motion.h1>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <Button
              key={f.value}
              variant={active === f.value ? "default" : "outline"}
              size="sm"
              className="font-sans text-sm rounded-full"
              onClick={() => setActive(f.value)}
              data-testid={`filter-${f.value}`}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Classes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
          key={active}
        >
          {filtered.map((cls) => (
            <motion.div key={cls.id} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow" data-testid={`class-card-${cls.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-sans font-medium ${difficultyColors[cls.difficulty]}`}>
                      {cls.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-sans flex items-center gap-1">
                      {cls.type === "online" ? <Wifi className="h-3 w-3" /> : cls.type === "offline" ? <MapPin className="h-3 w-3" /> : null}
                      {cls.type === "both" ? "Online & Offline" : cls.type.charAt(0).toUpperCase() + cls.type.slice(1)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-2">{cls.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cls.description}</p>

                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-primary" />{cls.duration}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-primary" />{cls.timing}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {cls.benefits.map((b) => (
                      <Badge key={b} variant="secondary" className="text-xs font-sans">{b}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-primary font-bold text-lg">₹{cls.price.toLocaleString()}</span>
                      {cls.originalPrice && (
                        <span className="text-muted-foreground text-sm line-through ml-2">₹{cls.originalPrice.toLocaleString()}</span>
                      )}
                      <p className="text-xs text-muted-foreground">per month</p>
                    </div>
                    <a
                      href="https://wa.me/911234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`book-${cls.id}`}
                    >
                      <Button className="font-sans text-sm">Book Now</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-serif text-xl">No classes found for this filter.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center px-4">
        <h2 className="font-serif text-3xl font-light mb-4">Not sure which class is right for you?</h2>
        <p className="text-primary-foreground/80 mb-8 font-sans text-sm max-w-md mx-auto">
          Message Ms. Renu directly on WhatsApp for a personalised recommendation based on your goals and experience.
        </p>
        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="lg" className="font-sans" data-testid="classes-whatsapp-cta">
            Ask Ms. Renu on WhatsApp
          </Button>
        </a>
      </section>
    </div>
  );
}

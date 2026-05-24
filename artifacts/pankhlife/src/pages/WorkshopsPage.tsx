import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, Calendar, Users } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { workshops } from "@/data/workshops";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function WorkshopsPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registered, setRegistered] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setRegistered(id);
    setRegisterEmail("");
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=1400&q=80"
          alt="Workshops"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3">Immersive Experiences</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl font-light text-white">Workshops &amp; Campaigns</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="text-white/70 text-sm mt-3 font-sans max-w-md mx-auto">
            Transformative multi-day programmes, seasonal offers, and special events led by Ms. Renu Patil.
          </motion.p>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {workshops.map((ws) => (
            <motion.div key={ws.id} variants={fadeUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full" data-testid={`workshop-${ws.id}`}>
                {/* Banner */}
                <div className="relative h-64 overflow-hidden">
                  <img src={ws.image} alt={ws.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-destructive text-white text-xs font-sans">{ws.discount}% OFF</Badge>
                    <Badge className="bg-accent text-accent-foreground text-xs font-sans">{ws.badge}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="font-serif text-2xl font-medium text-white mb-1">{ws.title}</h2>
                    <p className="text-white/70 text-xs font-sans flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(ws.date)} · {ws.duration}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{ws.description}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {ws.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Countdown */}
                  <div className="bg-muted/50 rounded-xl p-4 mb-6">
                    <p className="text-xs text-muted-foreground font-sans uppercase tracking-wide mb-3">Offer Ends In</p>
                    <CountdownTimer targetDate={ws.date} />
                  </div>

                  {/* Pricing & Register */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-primary font-bold text-2xl">₹{ws.price.toLocaleString()}</span>
                      <span className="text-muted-foreground text-sm line-through ml-2">₹{ws.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3 text-primary" />
                      {ws.spotsLeft} spots left
                    </span>
                  </div>

                  {registered === ws.id ? (
                    <div className="flex items-center gap-2 text-primary bg-primary/10 rounded-lg p-3">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-sans">You are registered! Ms. Renu will reach out soon.</span>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleRegister(e, ws.id)} className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                        className="flex-1 text-sm"
                        data-testid={`register-email-${ws.id}`}
                      />
                      <Button type="submit" className="font-sans text-sm whitespace-nowrap" data-testid={`register-btn-${ws.id}`}>
                        Register Now
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center px-4">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl font-light mb-3">Never Miss a Workshop</motion.h2>
          <motion.p variants={fadeUp} className="text-primary-foreground/80 text-sm mb-8 max-w-md mx-auto font-sans">
            Subscribe to receive early-bird offers and exclusive workshop invitations directly in your inbox.
          </motion.p>
          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              data-testid="workshop-newsletter-email"
            />
            <Button variant="secondary" type="submit" className="font-sans" data-testid="workshop-newsletter-submit">
              Subscribe
            </Button>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}

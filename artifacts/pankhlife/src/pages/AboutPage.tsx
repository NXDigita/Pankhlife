import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Heart, Leaf } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const timeline = [
  { year: "2008", title: "First Yoga Certification", desc: "Completed 200-hour Hatha Yoga Teacher Training from Bihar School of Yoga." },
  { year: "2010", title: "Opened First Studio", desc: "Founded the first Pankhlife yoga studio in Andheri, Mumbai with 20 founding students." },
  { year: "2013", title: "Advanced Therapy Training", desc: "Completed advanced therapeutic yoga specialisation for musculoskeletal conditions." },
  { year: "2015", title: "500-Hour Certification", desc: "Received 500-hour advanced yoga teacher certification — one of India's top programmes." },
  { year: "2018", title: "Ayurveda Integration", desc: "Completed diploma in Ayurvedic wellness coaching and integrated it into all programmes." },
  { year: "2020", title: "Online Expansion", desc: "Launched the online platform during the pandemic, reaching students across 12 countries." },
  { year: "2023", title: "1000 Students Milestone", desc: "Celebrated transforming over 1,000 students' lives through yoga and holistic wellness." },
];

const certifications = [
  "200-Hour Hatha Yoga TTC — Bihar School of Yoga",
  "500-Hour Advanced Yoga TTC — Iyengar Yoga Institute",
  "Therapeutic Yoga Certification — S-VYASA University",
  "Ayurvedic Wellness Coach Diploma",
  "Pranayama & Meditation — Himalayan Institute",
  "Yoga for Women's Health — Yoga Alliance USA",
];

const approach = [
  { icon: <Leaf className="h-5 w-5" />, title: "Holistic Approach", desc: "Every session addresses the whole person — body, breath, mind, and spirit. Nothing is treated in isolation." },
  { icon: <Heart className="h-5 w-5" />, title: "Compassionate Space", desc: "The studio is a sanctuary free from comparison or judgement. You are welcome exactly as you are, today." },
  { icon: <Award className="h-5 w-5" />, title: "Evidence-Informed", desc: "Ancient practices meet modern understanding of anatomy, physiology, and neuroscience for safe, effective results." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=1400&q=80"
          alt="About Ms. Renu Patil"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3"
          >Our Story</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl font-light text-white"
          >About Ms. Renu Patil</motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-3">Her Story</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light mb-6 leading-tight">
              A Life Devoted to Healing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              Ms. Renu Patil's journey with yoga began not in a studio but in a moment of personal crisis. At 28, facing burnout, chronic back pain, and a deep sense of disconnection, she discovered her first yoga class — and never looked back.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              What began as a tool for personal healing became a calling. She trained under some of India's most respected masters, immersing herself in Hatha yoga, therapeutic yoga, pranayama, and Ayurveda for years.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">
              Today, through Pankhlife, she creates the space she once needed — where every student, regardless of age, body, or background, is welcomed into a practice that can genuinely change their life.
            </motion.p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=700&q=80"
              alt="Yoga practice"
              className="rounded-3xl w-full h-[480px] object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-3">Philosophy</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light mb-6">Mission &amp; Vision</motion.h2>
            <motion.blockquote variants={fadeUp} className="font-serif text-xl sm:text-2xl italic text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto mb-10">
              "Yoga is not about touching your toes. It is about what you learn on the way down."
            </motion.blockquote>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              At Pankhlife, the mission is simple: make the profound benefits of yoga accessible to every person who walks through the door. No performance, no perfection — just honest, consistent practice that honours where you are today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">15+ Years</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">The Journey</motion.h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="space-y-10"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item) => (
              <motion.div key={item.year} variants={fadeUp} className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10 text-primary-foreground text-xs font-bold font-sans">
                  {item.year.slice(2)}
                </div>
                <div className="pt-2">
                  <p className="text-primary text-xs font-sans font-medium mb-1">{item.year}</p>
                  <h3 className="font-serif text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Credentials</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">Certifications</motion.h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div key={cert} variants={fadeUp}>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Teaching Style</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">The Pankhlife Approach</motion.h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {approach.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link href="/classes">
            <Button size="lg" className="font-sans" data-testid="about-book-class">
              Book Your First Class <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

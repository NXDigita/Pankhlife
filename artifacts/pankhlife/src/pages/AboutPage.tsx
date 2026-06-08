import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, Award, Heart, Leaf } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const timeline = [
  { year: "2003", date: "2003 - 2004", title: "BEd in Yoga", desc: "" },
  { year: "2021", date: "29 May 2021", title: "200 Hours Yoga Alliance Registered Yoga Teacher Programme", desc: "" },
  { year: "2021", date: "9 May 2021", title: "Ayurveda Awareness Programme", desc: "" },
  { year: "2021", date: "07 June 2021", title: "Vedique Nutrition Course", desc: "" },
  { year: "2021", date: "22 Oct 2021", title: "300 Hours of Yoga Alliance Registered", desc: "" },
  { year: "2021", date: "4 Dec 2021", title: "Therapeutic Yoga Training from Bodhi School of Yoga", desc: "" },
  { year: "2022", date: "5 Jan 2022", title: "Weight Loss Coaching Program", desc: "" },
  { year: "2022", date: "20 May 2022", title: "Face Yoga Teacher Training Course", desc: "" },
  { year: "2022", date: "5 June 2022", title: "Mudra Therapy Certification Course", desc: "" },
  { year: "2022", date: "8 Aug 2022", title: "Prenatal Yoga Teacher Training", desc: "" },
  { year: "2022", date: "9 Aug 2022", title: "Cancer Nutrition Course", desc: "" },
  { year: "2022", date: "26 Sept 2022", title: "Prana Yoga Teacher Training", desc: "" },
  { year: "2023", date: "17 Feb 2023", title: "Bala Yoga Teacher Training", desc: "" },
  { year: "2023", date: "21 July 2023", title: "Meditation Teacher Training", desc: "" },
  { year: "2026", date: "14 May 2026", title: "Yin Yoga Teacher Training Course", desc: "" },
];

const certifications = [
  {
    title: "200-Hour Yoga Teacher Training — Yoga Alliance (RYT 200)",
    subtitle: "Bodhi Yoga Training Academy",
    imageSrc: "/certifications/cert_1.png",
  },
  {
    title: "300-Hour Yoga Teacher Training — Yoga Alliance (RYS 300)",
    subtitle: "Bodhi Yoga Training Academy",
    imageSrc: "/certifications/cert_2.png",
  },
  {
    title: "Therapeutic Yoga Training",
    subtitle: "Bodhi School of Yoga",
    imageSrc: "/certifications/cert_3.png",
  },
  {
    title: "Face Yoga Teacher Training Course",
    subtitle: "Bodhi School of Yoga",
    imageSrc: "/certifications/cert_4.png",
  },
  {
    title: "Cancer Nutrition Course (Online)",
    subtitle: "Unitus Health Academy",
    imageSrc: "/certifications/cert_5.png",
  },
  {
    title: "Weight Loss Coaching Program",
    subtitle: "Bodhi School of Yoga",
    imageSrc: "/certifications/cert_6.png",
  },
  {
    title: "Meditation Teacher Training (Level 1)",
    subtitle: "Bodhi School of Yoga",
    imageSrc: "/certifications/cert_7.png",
  },
  {
    title: "Prenatal Yoga Teacher Training",
    subtitle: "Bodhi School of Yoga",
    imageSrc: "/certifications/cert_8.png",
  },
];

const approach = [
  { icon: <Leaf className="h-5 w-5" />, title: "Holistic Approach", desc: "Every session addresses the whole person — body, breath, mind, and spirit. Nothing is treated in isolation." },
  { icon: <Heart className="h-5 w-5" />, title: "Compassionate Space", desc: "The studio is a sanctuary free from comparison or judgement. You are welcome exactly as you are, today." },
  { icon: <Award className="h-5 w-5" />, title: "Evidence-Informed", desc: "Ancient practices meet modern understanding of anatomy, physiology, and neuroscience for safe, effective results." },
];

export default function AboutPage() {
  const [selectedCert, setSelectedCert] =
    useState<(typeof certifications)[number] | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=1400&q=80"
          alt="Yoga practice"
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
          >About Ms. Renu Patial</motion.h1>
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
              Ms. Renu Patial's journey with yoga began not in a studio but in a moment of personal crisis. At 28, facing burnout, chronic back pain, and a deep sense of disconnection, she discovered her first yoga class — and never looked back.
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
              src="/renu_arm_balance_1.png"
              alt="Ms. Renu Patial practicing arm balance"
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
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">24+ Years</motion.p>
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
            {timeline.map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 z-10 text-primary-foreground text-xs font-bold font-sans">
                  {item.year.slice(2)}
                </div>
                <div className="pt-2">
                  <p className="text-primary text-xs font-sans font-medium mb-1">{item.date}</p>
                  <h3 className="font-serif text-lg font-medium mb-1">{item.title}</h3>
                  {item.desc && <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>}
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
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={fadeUp}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0 h-full">
                    <button
                      type="button"
                      className="w-full text-left h-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={`View certificate: ${cert.title}`}
                      onClick={() => setSelectedCert(cert)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setSelectedCert(cert);
                      }}
                    >
                      <div className="bg-background/60 p-3">
                        <div className="h-40 sm:h-44 w-full rounded-xl bg-muted/30 border overflow-hidden flex items-center justify-center">
                          <img
                            src={cert.imageSrc}
                            alt={cert.title}
                            loading="lazy"
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <Award className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-serif text-base leading-snug">{cert.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{cert.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selectedCert && (
            <div className="bg-black/5 p-2 sm:p-4 flex items-center justify-center w-full">
              <img
                src={selectedCert.imageSrc}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[85vh] object-contain shadow-sm bg-white rounded-none"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

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
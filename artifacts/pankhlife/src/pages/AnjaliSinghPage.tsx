import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Dumbbell,
  Wind,
  Feather,
  Sparkles,
  Heart,
  Activity,
  Scale,
  Zap,
  Youtube,
  Instagram,
  MonitorPlay,
  Award,
} from "lucide-react";

/* ─────────────────────────────────────────
   Shared animation variants
───────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const benefits = [
  {
    icon: <Dumbbell className="h-5 w-5" />,
    title: "STRENGTH",
    desc: "Build a strong body & resilient mind",
  },
  {
    icon: <Feather className="h-5 w-5" />,
    title: "FLEXIBILITY",
    desc: "Move with grace, flow & freedom",
  },
  {
    icon: <Wind className="h-5 w-5" />,
    title: "RELAXATION",
    desc: "Release stress, find calm & inner peace",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "INNER WELL-BEING",
    desc: "Nourish your soul & live with intention",
  },
];

const conditions = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "PCOS",
    desc: "Balance hormones naturally & improve energy & cycle health",
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "WEIGHT LOSS",
    desc: "Sustainable weight loss with mindful eating & yoga",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "THYROID",
    desc: "Support thyroid health & boost metabolism",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "DIABETIC",
    desc: "Manage blood sugar naturally & improve overall well-being",
  },
];

/* ─────────────────────────────────────────
   Page Component
───────────────────────────────────────── */
export default function AnjaliSinghPage() {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document
      .querySelector("meta[name='description']")
      ?.getAttribute("content") ?? "";

    document.title = "Anjali Singh | Health & Wellness Coach | PankhLife";

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Meet Anjali Singh, a Certified 500 Hours RYT Yoga Instructor and Nutritionist helping individuals transform their lives through yoga, breathwork, and conscious living."
      );
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div>
      {/* ── HERO ────────────────────────────────── */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/anjali_singh_real.jpg"
            alt="Anjali Singh – Health & Wellness Coach"
            className="w-full h-full object-cover object-center"
          />
          {/* Brand green gradient overlay for better text readability while keeping natural colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A5120]/70 via-[#4A5120]/50 to-[#4A5120]/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="mb-6 text-xs sm:text-sm uppercase tracking-widest px-5 py-1.5 bg-white/10 text-white border border-white/20 backdrop-blur-sm"
            >
              prana WITH ANJALI
            </Badge>

            <p className="text-white/90 text-sm sm:text-base font-sans tracking-[0.2em] uppercase mb-4 font-medium drop-shadow-md">
              BREATHE · HEAL · TRANSFORM
            </p>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-4 drop-shadow-lg">
              HI, I'M ANJALI SINGH
            </h1>

            <p className="text-white/90 text-lg sm:text-xl font-sans font-medium uppercase tracking-widest mb-1 drop-shadow-md">
              Health &amp; Wellness Coach
            </p>
            <p className="text-white/70 text-sm sm:text-lg font-sans tracking-wider mb-8 drop-shadow-md">
              Yoga Instructor
            </p>

            <p className="text-white/95 text-base sm:text-xl max-w-2xl mx-auto font-serif mb-10 leading-relaxed italic drop-shadow-md">
              I help people build a balanced and healthier lifestyle through yoga, breathwork, and conscious living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://instagram.com/Anjali.san_yoga" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="font-sans text-sm px-8 w-full shadow-lg"
                  id="anjali-hero-contact"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Contact Anjali
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CREDENTIALS ──────────── */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-lg mb-8">
            I am a <strong className="text-foreground font-semibold">Certified 500 Hours RYT Yoga Instructor</strong> and a qualified <strong className="text-foreground font-semibold">Nutritionist from the Innerworld Yoga Academy</strong>. 
            With over two years of dedicated teaching experience, I have had the privilege of guiding both personal clients and Teacher Training Course (TTC) students.
          </motion.p>
          
          <motion.div variants={stagger} className="flex flex-wrap justify-center gap-8 mb-4">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">500 Hrs RYT Certified</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">Certified Nutritionist</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MY JOURNEY ──────────────────────────── */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl font-light"
            >
              MY JOURNEY
            </motion.h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md bg-background/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary/80"></div>
              <CardContent className="p-8 sm:p-12 text-center">
                <p className="text-muted-foreground leading-relaxed text-lg sm:text-xl mb-6">
                  After years in the corporate world, I realized success without wellness is incomplete. I chose to slow down, listen within, and embrace a purposeful wellness journey.
                </p>
                <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                  Yoga and breathwork transformed my life, and today, I live my purpose - guiding others toward strength, balance, and inner harmony.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS OF YOGA ────────────────────── */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl font-light"
          >
            BENEFITS
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((b) => (
            <motion.div key={b.title} variants={fadeUp}>
              <Card className="hover:-translate-y-2 transition-transform duration-300 h-full border-border/50 shadow-sm hover:shadow-xl bg-gradient-to-b from-background to-muted/20">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-inner">
                    {b.icon}
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CONDITIONS SUPPORTED ────────────────── */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light"
            >
              I WORK WITH COMMON CONDITIONS
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {conditions.map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="h-full">
                <Card className="bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors text-center h-full backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-2 shadow-lg">
                      {c.icon}
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold tracking-widest uppercase mb-3 text-white">{c.title}</h3>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center bg-black/20 p-6 rounded-2xl backdrop-blur-md border border-white/10"
          >
            <p className="text-primary-foreground font-medium uppercase tracking-widest text-sm leading-relaxed">
              Through yoga, mindful nutrition, breathwork &amp; lifestyle guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────── */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-10 leading-tight"
          >
            MY MISSION
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto mb-6"
          >
            To inspire positive transformation and encourage mindful habits through yoga, breathwork, and conscious living.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto"
          >
            I help individuals reconnect with themselves, create harmony in mind and body, and live a life of purpose and presence.
          </motion.p>
        </motion.div>
      </section>
      
      {/* ── INSPIRATIONAL SECTION ───────────────── */}
      <section className="py-20 bg-muted/40 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light italic leading-tight mb-8 text-primary"
            >
              Breathe. Heal. Transform.
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-2 items-center text-foreground/80 font-sans tracking-widest uppercase font-medium text-sm sm:text-base"
            >
              <p>LIVE CONSCIOUSLY.</p>
              <p>LOVE DEEPLY.</p>
              <p>BE YOU.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CALL TO ACTION ──────────────────────── */}
      <section className="py-24 px-4 bg-muted/20 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-5xl font-light mb-6"
            >
              LET'S GROW TOGETHER
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto"
            >
              Through my YouTube platform and online sessions, I reach out to people with the vision of inspiring positive transformation, encouraging mindful habits, and helping individuals reconnect with themselves to create harmony in both mind and body.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* YouTube Card */}
            <motion.div variants={fadeUp} className="h-full">
              <Card className="h-full border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg group">
                <CardContent className="p-8 sm:p-10 flex flex-col h-full items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Youtube className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-4">The Prana Community</h3>
                  <p className="text-base text-muted-foreground mb-8 flex-grow leading-relaxed">
                    Yoga. Breathwork. Mindset.<br/>
                    Real conversations. Real transformations.<br/>
                    Subscribe to my YouTube channel and be part of the Prana Community!
                  </p>
                  <div className="w-full">
                    <a href="https://youtube.com/@Anjali.san_yoga" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="w-full border-red-500/50 text-red-600 hover:bg-red-50 hover:text-red-700">
                        <Youtube className="w-5 h-5 mr-2" />
                        Anjali.san_yoga
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Online Sessions Card */}
            <motion.div variants={fadeUp} className="h-full">
              <Card className="h-full border-border hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg group">
                <CardContent className="p-8 sm:p-10 flex flex-col h-full items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <MonitorPlay className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-4">Live Online Sessions</h3>
                  <p className="text-base text-muted-foreground mb-8 flex-grow leading-relaxed">
                    Join my live online sessions from the comfort of your home.<br/>
                    Let's breathe, heal, and transform together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a href="https://instagram.com/Anjali.san_yoga" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button size="lg" className="w-full shadow-md">
                        <Instagram className="w-5 h-5 mr-2" />
                        Contact Anjali
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

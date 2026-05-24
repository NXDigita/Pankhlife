import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Star, ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { CountdownTimer } from "@/components/CountdownTimer";
import { classes } from "@/data/classes";
import { testimonials } from "@/data/testimonials";
import { workshops } from "@/data/workshops";
import { products } from "@/data/products";
import type { CartItem } from "@/components/layout/Layout";

interface HomePageProps {
  onAddToCart: (item: CartItem) => void;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  { icon: "🧘", title: "Flexibility & Strength", desc: "Build a supple, strong body through consistent practice." },
  { icon: "🌿", title: "Stress Relief", desc: "Release tension held in the body and calm an overactive mind." },
  { icon: "💚", title: "Better Sleep", desc: "Yoga and pranayama regulate the nervous system for deep rest." },
  { icon: "🔥", title: "Weight Management", desc: "Mindful movement and breathwork support healthy metabolism." },
  { icon: "🧠", title: "Mental Clarity", desc: "Meditation sharpens focus and builds emotional resilience." },
  { icon: "✨", title: "Holistic Healing", desc: "Address root causes of chronic pain and imbalances naturally." },
];

const faqs = [
  { q: "I have never done yoga before. Can I join?", a: "Absolutely. Our beginner-friendly classes are designed for students with zero experience. Ms. Renu ensures every student is seen and supported from day one." },
  { q: "Are the online classes as effective as in-person?", a: "Yes. Our live online sessions are interactive — you receive real-time corrections and personalised attention just as you would in the studio." },
  { q: "How many classes per week should a beginner attend?", a: "We recommend starting with 3 classes per week and building from there. Consistency matters far more than frequency." },
  { q: "Do you offer trial classes?", a: "Yes — your first class is complimentary. Reach out via WhatsApp or our contact form to schedule your trial." },
  { q: "What should I bring to a studio class?", a: "A yoga mat (or borrow ours), comfortable clothing, a water bottle, and an empty or lightly filled stomach (avoid eating 2 hours before)." },
  { q: "Do you offer private one-on-one sessions?", a: "Yes. Private sessions with Ms. Renu are available for students with specific goals or medical conditions. Contact us to learn more." },
];

export default function HomePage({ onAddToCart }: HomePageProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const featuredClasses = classes.slice(0, 4);
  const featuredProducts = products.slice(0, 4);
  const featuredWorkshops = workshops.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=80"
            alt="Yoga practice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 text-xs uppercase tracking-widest px-4 py-1">
              15+ Years of Holistic Wellness
            </Badge>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
              Transform Your Mind,<br />
              <em>Body &amp; Life</em> Naturally
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto font-light mb-10 leading-relaxed">
              Guided by Ms. Renu Patil — 15+ years of experience in yoga, wellness, and holistic healing that meets you exactly where you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/classes">
                <Button size="lg" className="font-sans text-sm px-8" data-testid="hero-btn-book">
                  Book a Class
                </Button>
              </Link>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-btn-whatsapp"
              >
                <Button size="lg" variant="outline" className="font-sans text-sm px-8 border-white text-white hover:bg-white hover:text-foreground">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: 1000, suffix: "+", label: "Happy Students" },
              { value: 15, suffix: "+", label: "Years of Experience" },
              { value: 7, suffix: "", label: "Yoga Programs" },
              { value: 500, suffix: "+", label: "Transformations" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="font-serif text-3xl sm:text-4xl font-semibold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1 font-sans uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=700&q=80"
              alt="Ms. Renu Patil"
              className="rounded-3xl w-full max-h-[520px] object-cover shadow-lg"
            />
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-3">
              Meet Your Guide
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light mb-5 leading-tight">
              Ms. Renu Patil
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              With over 15 years of dedicated practice and teaching, Ms. Renu Patil has guided more than a thousand students toward greater health, peace, and self-understanding. Her approach weaves classical Hatha yoga with modern therapeutic insight and ancient Ayurvedic wisdom.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8">
              She believes that yoga is not a performance — it is a conversation between the self and the present moment. Every class is a safe space for transformation, however small or profound.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/about">
                <Button variant="outline" className="font-sans" data-testid="about-read-more">
                  Read Ms. Renu's Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Why Yoga</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">Benefits of Practice</motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6">
                    <span className="text-3xl mb-4 block">{b.icon}</span>
                    <h3 className="font-serif text-lg font-medium mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Our Offerings</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">Featured Classes</motion.h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredClasses.map((cls) => (
            <motion.div key={cls.id} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow" data-testid={`class-card-${cls.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={cls.image} alt={cls.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <Badge className="absolute top-3 left-3 text-xs">{cls.difficulty}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif text-lg font-medium mb-1">{cls.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{cls.timing} · {cls.duration}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-primary font-semibold">₹{cls.price.toLocaleString()}</span>
                      {cls.originalPrice && (
                        <span className="text-muted-foreground text-xs line-through ml-2">₹{cls.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Link href="/classes">
                      <Button size="sm" variant="outline" className="text-xs font-sans">Book</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/classes">
            <Button variant="outline" className="font-sans" data-testid="view-all-classes">
              View All Classes <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Student Stories</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">Transformations that Inspire</motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t) => (
              <motion.div key={t.id} variants={fadeUp}>
                <Card className="h-full hover:shadow-md transition-shadow" data-testid={`testimonial-${t.id}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-xs font-semibold">{t.initials}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.location} · {t.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Limited Seats</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">Upcoming Workshops</motion.h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredWorkshops.map((ws) => (
            <motion.div key={ws.id} variants={fadeUp}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`workshop-card-${ws.id}`}>
                <div className="relative h-48">
                  <img src={ws.image} alt={ws.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">{ws.badge}</Badge>
                  <Badge className="absolute top-3 left-3 bg-destructive text-white">{ws.discount}% OFF</Badge>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-serif text-xl font-medium">{ws.title}</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{ws.description.slice(0, 120)}...</p>
                  <div className="mb-4">
                    <CountdownTimer targetDate={ws.date} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-primary font-bold text-lg">₹{ws.price.toLocaleString()}</span>
                      <span className="text-muted-foreground text-sm line-through ml-2">₹{ws.originalPrice.toLocaleString()}</span>
                    </div>
                    <Link href="/workshops">
                      <Button size="sm" className="font-sans text-xs" data-testid={`workshop-register-${ws.id}`}>Register Now</Button>
                    </Link>
                  </div>
                  <p className="text-xs text-destructive mt-2">{ws.spotsLeft} spots left</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/workshops">
            <Button variant="outline" className="font-sans">View All Workshops <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Curated for Your Practice</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">From Our Wellness Shop</motion.h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow" data-testid={`product-card-${product.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    {product.badge && <Badge className="absolute top-2 left-2 text-xs">{product.badge}</Badge>}
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-serif text-base font-medium mb-2 leading-tight">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">₹{product.price.toLocaleString()}</span>
                      <Button size="sm" variant="outline" className="text-xs font-sans"
                        onClick={() => onAddToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image })}>
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/shop">
              <Button variant="outline" className="font-sans">Shop All Products <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Follow the Journey</motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">@pankhlife</motion.h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&q=80",
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80",
            "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300&q=80",
            "https://images.unsplash.com/photo-1545389336-cf090694435e?w=300&q=80",
            "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=300&q=80",
            "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300&q=80",
          ].map((src, i) => (
            <motion.div key={i} variants={fadeUp} className="aspect-square overflow-hidden rounded-xl group relative cursor-pointer">
              <img src={src} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 rounded-xl" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">Common Questions</motion.p>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">Frequently Asked</motion.h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border px-4" data-testid={`faq-${i}`}>
                  <AccordionTrigger className="font-sans text-sm font-medium text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light mb-4">
              Begin Your Wellness Journey
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8 leading-relaxed">
              Join over 1,000 students receiving weekly wellness inspiration, class announcements, and exclusive offers.
            </motion.p>
            <motion.form
              variants={fadeUp}
              onSubmit={(e) => { e.preventDefault(); setNewsletterEmail(""); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1"
                data-testid="home-newsletter-email"
              />
              <Button type="submit" className="font-sans" data-testid="home-newsletter-submit">
                Join Now
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const contactInfo = [
  { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91 95401 16007", href: "tel:+919540116007" },
  { icon: <Mail className="h-5 w-5" />, label: "Email", value: "renu@pankhlife.in", href: "mailto:renu@pankhlife.in" },
  { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "HNO A1-201 Mapsko Casabella, Gurugram", href: "#" },
  { icon: <Clock className="h-5 w-5" />, label: "Studio Hours", value: "Mon–Sat: 6 AM – 8 PM | Sun: 7 AM – 12 PM", href: "#" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", inquiry: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message sent!", description: "Ms. Renu will get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", inquiry: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1400&q=80"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl sm:text-5xl font-light text-white">Contact Us</motion.h1>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-10 bg-green-50 dark:bg-green-950/20 border-y border-green-200 dark:border-green-900">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl font-medium text-foreground mb-1">Chat Directly with Ms. Renu</h2>
            <p className="text-sm text-muted-foreground">Get a response within hours — the quickest way to book a class or ask any question.</p>
          </div>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-btn"
          >
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-sans flex-shrink-0 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Open WhatsApp
            </Button>
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-light mb-2">Send a Message</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours on business days.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <CheckCircle className="h-12 w-12 text-primary" />
                <h3 className="font-serif text-xl font-medium">Thank you!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Your message has been received. Ms. Renu will be in touch with you soon.
                </p>
                <Button variant="outline" className="font-sans mt-2" onClick={() => setSubmitted(false)}>Send another message</Button>
              </motion.div>
            ) : (
              <motion.form variants={stagger} onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-sans text-sm mb-1.5 block">Full Name</Label>
                    <Input id="name" placeholder="Your name" value={form.name} required
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      data-testid="contact-name" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-sans text-sm mb-1.5 block">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={form.email} required
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      data-testid="contact-email" />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-sans text-sm mb-1.5 block">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 95401 16007" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      data-testid="contact-phone" />
                  </div>
                  <div>
                    <Label className="font-sans text-sm mb-1.5 block">Inquiry Type</Label>
                    <Select value={form.inquiry} onValueChange={(v) => setForm({ ...form, inquiry: v })}>
                      <SelectTrigger data-testid="contact-inquiry">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="class-booking">Class Booking</SelectItem>
                        <SelectItem value="workshop">Workshop Registration</SelectItem>
                        <SelectItem value="product">Product Order</SelectItem>
                        <SelectItem value="private">Private Session</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Label htmlFor="message" className="font-sans text-sm mb-1.5 block">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Tell us about your goals or questions..."
                    value={form.message} required
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    data-testid="contact-message" />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Button type="submit" className="w-full font-sans" size="lg" data-testid="contact-submit">
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>

          {/* Info & Map */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-light mb-2">Find Us</motion.h2>

            {/* Contact Cards */}
            <motion.div variants={stagger} className="grid gap-4">
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={fadeUp}>
                  <Card className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-sans uppercase tracking-wide mb-0.5">{info.label}</p>
                        <a href={info.href} className="text-sm font-medium hover:text-primary transition-colors">{info.value}</a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp}>
              <Card>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground font-sans uppercase tracking-wide mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    {[
                      { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/pankhlife", label: "Instagram" },
                      { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/pankhlife", label: "Facebook" },
                      { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com/@pankhlife", label: "YouTube" },
                      { icon: <MessageCircle className="h-5 w-5" />, href: "https://wa.me/911234567890", label: "WhatsApp" },
                    ].map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors" data-testid={`contact-social-${s.label.toLowerCase()}`}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-border h-64 bg-muted">
              <iframe
                src="https://maps.google.com/maps?q=Mapsko+Casabella,+Gurugram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pankhlife Studio Location"
                data-testid="map-embed"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

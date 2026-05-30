import { Link } from "wouter";
import { Leaf, Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PankhLogo } from "./PankhLogo";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start gap-1 mb-4">
              <PankhLogo variant="full" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Awakening wellness, one breath at a time. Guided by Ms. Renu Patil — 15+ years of transforming lives through the ancient wisdom of yoga.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/pankhlife" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/pankhlife" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@pankhlife" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-youtube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-500 transition-colors" data-testid="social-whatsapp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Ms. Renu" },
                { href: "/classes", label: "Classes" },
                { href: "/schedule", label: "Schedule" },
                { href: "/workshops", label: "Workshops" },
                { href: "/shop", label: "Shop" },
                { href: "/blog", label: "Blog & Articles" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>+91 95401 16007</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>renu@pankhlife.in</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>HNO A1-201 Mapsko Casabella, Gurugram</span>
              </li>
            </ul>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-sans px-4 py-2 rounded-lg transition-colors"
              data-testid="footer-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-2">Join the Community</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receive wellness tips, class updates, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-sm"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="w-full" data-testid="btn-newsletter-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pankhlife.in — Ms. Renu Patil. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with love for wellness &amp; healing
          </p>
        </div>
      </div>
    </footer>
  );
}

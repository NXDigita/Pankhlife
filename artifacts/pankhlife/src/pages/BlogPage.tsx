import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import type { BlogCategory } from "@/data/blog";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const categoryColors: Record<BlogCategory, string> = {
  "Yoga Practice": "bg-green-100 text-green-800",
  "Wellness Tips": "bg-amber-100 text-amber-800",
  "Ayurveda": "bg-orange-100 text-orange-800",
  "Meditation": "bg-purple-100 text-purple-800",
  "Nutrition": "bg-teal-100 text-teal-800",
  "Student Stories": "bg-rose-100 text-rose-800",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");
  const [search, setSearch] = useState("");

  const featured = blogPosts.filter((p) => p.featured);
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80"
          alt="Yoga & Wellness Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3"
          >
            Wisdom & Wellness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-4xl sm:text-5xl font-light text-white"
          >
            Articles & Guides
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm mt-3 font-sans max-w-md mx-auto"
          >
            Deep dives into yoga philosophy, Ayurvedic wisdom, breathwork, nutrition, and student stories — written by Ms. Renu Patil.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="text-primary text-sm uppercase tracking-widest font-sans mb-2">
            Editor's Picks
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-light">
            Featured Articles
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featured.map((post, i) => (
            <motion.div key={post.id} variants={fadeUp} className={i === 0 ? "md:col-span-2" : ""}>
              <Link href={`/blog/${post.slug}`}>
                <Card
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full ${
                    i === 0 ? "md:flex" : ""
                  }`}
                  data-testid={`featured-post-${post.id}`}
                >
                  <div className={`relative overflow-hidden flex-shrink-0 ${i === 0 ? "md:w-64 h-56 md:h-auto" : "h-48"}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-sans font-medium ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                  <CardContent className="p-5 flex flex-col justify-between">
                    <div>
                      <h3 className={`font-serif font-medium leading-snug mb-2 group-hover:text-primary transition-colors ${i === 0 ? "text-xl" : "text-lg"}`}>
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-primary" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-primary" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 text-sm"
              data-testid="blog-search"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={activeCategory === "All" ? "default" : "outline"}
              className="font-sans text-xs rounded-full"
              onClick={() => setActiveCategory("All")}
              data-testid="cat-all"
            >
              All
            </Button>
            {blogCategories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "default" : "outline"}
                className="font-sans text-xs rounded-full"
                onClick={() => setActiveCategory(cat)}
                data-testid={`cat-${cat.toLowerCase().replace(/ /g, "-")}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${search}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.id} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={`/blog/${post.slug}`}>
                  <Card
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full flex flex-col"
                    data-testid={`blog-card-${post.id}`}
                  >
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-sans font-medium ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                    <CardContent className="p-5 flex flex-col flex-1">
                      <h3 className="font-serif text-lg font-medium leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-primary" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-primary" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-muted-foreground">No articles found.</p>
            <Button variant="outline" className="mt-4 font-sans" onClick={() => { setSearch(""); setActiveCategory("All"); }}>
              Clear filters
            </Button>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl font-light mb-3">
              Get New Articles in Your Inbox
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-sm mb-8 leading-relaxed">
              Join 1,200+ readers receiving Ms. Renu's weekly wellness writing — no fluff, just depth.
            </motion.p>
            <motion.form
              variants={fadeUp}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
                data-testid="blog-newsletter-email"
              />
              <Button type="submit" className="font-sans" data-testid="blog-newsletter-submit">
                Subscribe
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

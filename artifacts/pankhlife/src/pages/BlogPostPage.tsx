import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Link2 } from "lucide-react";
import { blogPosts } from "@/data/blog";
import type { BlogCategory } from "@/data/blog";
import { useToast } from "@/hooks/use-toast";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

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

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-serif text-2xl font-medium mt-10 mb-4 text-foreground">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-serif text-xl font-medium mt-8 mb-3 text-foreground">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="text-muted-foreground leading-relaxed ml-4 list-disc">
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="border-border my-8" />);
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      elements.push(
        <p key={key++} className="text-muted-foreground italic text-sm my-2">
          {line.replace(/^\*|\*$/g, "")}
        </p>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
    } else {
      const boldProcessed = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p
          key={key++}
          className="text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: boldProcessed }}
        />
      );
    }
  });

  return elements;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();

  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Article link copied to clipboard." });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="font-serif text-3xl">Article not found</h1>
        <p className="text-muted-foreground text-sm">The article you are looking for does not exist.</p>
        <Link href="/blog">
          <Button variant="outline" className="font-sans">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-72 sm:h-[420px] flex items-end overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-8 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-sans font-medium mb-3 ${categoryColors[post.category]}`}>
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Back + Meta */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="font-sans text-sm -ml-2" data-testid="back-to-blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Articles
            </Button>
          </Link>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold">
                {post.authorInitials}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-primary" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-primary" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_240px] gap-12">
          {/* Article Content */}
          <motion.article
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="min-w-0"
          >
            <motion.p variants={fadeUp} className="font-serif text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-5 italic">
              {post.excerpt}
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-1 prose-sm sm:prose max-w-none">
              {renderContent(post.content)}
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-sans">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Share */}
            <div className="mt-8 p-5 bg-muted/40 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Share2 className="h-4 w-4 text-primary" />
                Share this article:
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="font-sans text-xs gap-1.5" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="share-twitter"
                  >
                    <Twitter className="h-3.5 w-3.5" /> Twitter
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="font-sans text-xs gap-1.5" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="share-facebook"
                  >
                    <Facebook className="h-3.5 w-3.5" /> Facebook
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="font-sans text-xs gap-1.5"
                  onClick={handleCopyLink}
                  data-testid="share-copy"
                >
                  <Link2 className="h-3.5 w-3.5" /> Copy Link
                </Button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-border flex gap-4 items-start">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-lg flex-shrink-0">
                {post.authorInitials}
              </div>
              <div>
                <p className="font-serif text-base font-medium">{post.author}</p>
                <p className="text-xs text-muted-foreground mb-2">Yoga Teacher, Wellness Guide — 15+ Years Experience</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ms. Renu Patil is the founder of Pankhlife.in. She writes about yoga, Ayurveda, therapeutic movement, and the intersection of ancient wisdom and modern science.
                </p>
                <Link href="/about">
                  <Button size="sm" variant="outline" className="mt-3 font-sans text-xs" data-testid="author-bio-link">
                    Read her story <ArrowLeft className="h-3 w-3 ml-1 rotate-180" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg font-medium mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link key={rel.id} href={`/blog/${rel.slug}`}>
                        <div className="flex gap-3 group cursor-pointer" data-testid={`related-${rel.id}`}>
                          <img
                            src={rel.image}
                            alt={rel.title}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div>
                            <p className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {rel.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <Clock className="h-2.5 w-2.5" />{rel.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-5">
                  <p className="font-serif text-lg mb-2">Ready to Begin?</p>
                  <p className="text-primary-foreground/80 text-xs mb-4 leading-relaxed">
                    Join a class with Ms. Renu and experience the practice first-hand.
                  </p>
                  <Link href="/classes">
                    <Button variant="secondary" size="sm" className="w-full font-sans text-xs" data-testid="sidebar-cta">
                      View Classes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        {/* More Articles */}
        {related.length > 0 && (
          <section className="mt-20 pt-10 border-t border-border">
            <h2 className="font-serif text-2xl font-light mb-8">More from {post.category}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group" data-testid={`more-post-${rel.id}`}>
                    <div className="h-40 overflow-hidden">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-serif text-base font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {rel.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <Clock className="h-3 w-3" />{rel.readTime}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

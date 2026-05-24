import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, Heart, ShoppingCart, Search, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import type { Product } from "@/data/products";
import type { CartItem } from "@/components/layout/Layout";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

type Category = "All" | "Yoga Mats" | "Accessories" | "Herbal Wellness" | "Meditation";
const categories: Category[] = ["All", "Yoga Mats", "Accessories", "Herbal Wellness", "Meditation"];

interface ShopPageProps {
  onAddToCart: (item: CartItem) => void;
}

export default function ShopPage({ onAddToCart }: ShopPageProps) {
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const filtered = products.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleAdd = (product: Product) => {
    onAddToCart({ id: product.id, name: product.name, price: product.price, quantity: qty, image: product.image });
    setAddedIds((prev) => new Set(prev).add(product.id));
    setSelectedProduct(null);
    setQty(1);
    setTimeout(() => {
      setAddedIds((prev) => { const next = new Set(prev); next.delete(product.id); return next; });
    }, 2000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1400&q=80"
          alt="Wellness Shop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/70 text-sm uppercase tracking-widest font-sans mb-3">
            Curated for Your Practice
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl sm:text-5xl font-light text-white">
            Wellness Shop
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 text-sm"
              data-testid="shop-search"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "default" : "outline"}
                size="sm"
                className="font-sans text-xs rounded-full"
                onClick={() => setCategory(cat)}
                data-testid={`cat-filter-${cat.toLowerCase().replace(" ", "-")}`}
              >{cat}</Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${search}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((product) => (
              <motion.div key={product.id} variants={fadeUp} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card
                  className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer"
                  data-testid={`product-${product.id}`}
                  onClick={() => { setSelectedProduct(product); setQty(1); }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-2 left-2 text-xs">{product.badge}</Badge>
                    )}
                    <button
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
                      data-testid={`wishlist-${product.id}`}
                    >
                      <Heart
                        className={`h-4 w-4 transition-colors ${wishlist.has(product.id) ? "fill-rose-500 text-rose-500" : "text-muted-foreground"}`}
                      />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="text-xs font-sans mb-2">{product.category}</Badge>
                    <h3 className="font-serif text-base font-medium leading-tight mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-primary font-bold">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground text-xs line-through ml-2">₹{product.originalPrice.toLocaleString()}</span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant={addedIds.has(product.id) ? "secondary" : "outline"}
                        className="text-xs font-sans"
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
                          setAddedIds((prev) => new Set(prev).add(product.id));
                          setTimeout(() => setAddedIds((prev) => { const next = new Set(prev); next.delete(product.id); return next; }), 2000);
                        }}
                        data-testid={`add-cart-${product.id}`}
                      >
                        {addedIds.has(product.id) ? "Added!" : <><ShoppingCart className="h-3 w-3 mr-1" />Add</>}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-muted-foreground">No products found.</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden h-72 sm:h-full">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <DialogHeader>
                  <Badge variant="secondary" className="text-xs w-fit mb-2 font-sans">{selectedProduct.category}</Badge>
                  <DialogTitle className="font-serif text-xl font-medium leading-tight">{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center gap-1 my-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(selectedProduct.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{selectedProduct.description}</p>
                <div className="mb-4">
                  <span className="text-primary font-bold text-2xl">₹{selectedProduct.price.toLocaleString()}</span>
                  {selectedProduct.originalPrice && (
                    <span className="text-muted-foreground text-sm line-through ml-2">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-sm text-muted-foreground">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => setQty((q) => Math.max(1, q - 1))} data-testid="qty-minus">
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm w-6 text-center tabular-nums">{qty}</span>
                    <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => setQty((q) => q + 1)} data-testid="qty-plus">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 font-sans" onClick={() => handleAdd(selectedProduct)} data-testid="modal-add-cart">
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => toggleWishlist(selectedProduct.id)}
                    data-testid="modal-wishlist"
                  >
                    <Heart className={`h-4 w-4 ${wishlist.has(selectedProduct.id) ? "fill-rose-500 text-rose-500" : ""}`} />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

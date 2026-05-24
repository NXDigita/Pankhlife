import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface LayoutProps {
  children: React.ReactNode;
  cartItems?: CartItem[];
  onAddToCart?: (item: CartItem) => void;
  onRemoveFromCart?: (id: string) => void;
  onUpdateQuantity?: (id: string, qty: number) => void;
}

export function Layout({ children, cartItems = [], onRemoveFromCart, onUpdateQuantity }: LayoutProps) {
  const [cartOpen, setCartOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} onCartClick={() => setCartOpen(true)} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <FloatingWhatsApp />

      {/* Cart Drawer */}
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent className="w-full sm:max-w-md flex flex-col">
          <SheetHeader>
            <SheetTitle className="font-serif text-xl">Your Cart</SheetTitle>
          </SheetHeader>

          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
              <p className="text-muted-foreground text-sm">Your cart is empty.</p>
              <Button variant="outline" onClick={() => setCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-start" data-testid={`cart-item-${item.id}`}>
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-tight">{item.name}</p>
                      <p className="text-sm text-primary font-semibold mt-1">₹{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button size="icon" variant="outline" className="h-7 w-7"
                          onClick={() => onUpdateQuantity?.(item.id, Math.max(0, item.quantity - 1))}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm w-6 text-center tabular-nums">{item.quantity}</span>
                        <Button size="icon" variant="outline" className="h-7 w-7"
                          onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-7 w-7 ml-auto text-destructive"
                          onClick={() => onRemoveFromCart?.(item.id)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{total.toLocaleString()}</span>
                </div>
                <Separator />
                <Button className="w-full" size="lg" data-testid="btn-checkout">
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

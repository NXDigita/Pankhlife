import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Calendar, ShoppingBag, Star, Settings, BarChart3, Plus, Edit, Trash2, Check, X, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { classes } from "@/data/classes";
import { workshops } from "@/data/workshops";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const stats = [
  { label: "Total Students", value: "1,234", icon: <Users className="h-5 w-5" />, change: "+12%", positive: true },
  { label: "Classes This Month", value: "48", icon: <Calendar className="h-5 w-5" />, change: "+4", positive: true },
  { label: "Shop Revenue", value: "₹84,200", icon: <ShoppingBag className="h-5 w-5" />, change: "+18%", positive: true },
  { label: "Avg. Rating", value: "4.9/5", icon: <Star className="h-5 w-5" />, change: "+0.1", positive: true },
];

const recentBookings = [
  { id: 1, student: "Priya Sharma", class: "Morning Yoga", date: "Today, 6:00 AM", status: "confirmed" },
  { id: 2, student: "Arjun Mehta", class: "Meditation", date: "Today, 7:00 AM", status: "confirmed" },
  { id: 3, student: "Sunita Rao", class: "Weight Loss Yoga", date: "Today, 5:30 PM", status: "pending" },
  { id: 4, student: "Kavita Nair", class: "Therapy Yoga", date: "Tomorrow, 9:00 AM", status: "confirmed" },
  { id: 5, student: "Rohan Desai", class: "Pranayama", date: "Tomorrow, 6:00 AM", status: "cancelled" },
];

export default function AdminPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [addWorkshopOpen, setAddWorkshopOpen] = useState(false);
  const [addProductOpen, setAddProductOpen] = useState(false);

  const showToast = (action: string) => {
    toast({ title: "Action completed", description: `${action} successfully.` });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 min-h-screen bg-card border-r border-border flex-col pt-20 px-3 fixed left-0 top-0 bottom-0">
          <div className="mb-6 px-3">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-sans">Admin Panel</p>
          </div>
          {[
            { id: "dashboard", label: "Dashboard", icon: <BarChart3 className="h-4 w-4" /> },
            { id: "schedule", label: "Schedule", icon: <Calendar className="h-4 w-4" /> },
            { id: "workshops", label: "Workshops", icon: <TrendingUp className="h-4 w-4" /> },
            { id: "products", label: "Products", icon: <ShoppingBag className="h-4 w-4" /> },
            { id: "testimonials", label: "Testimonials", icon: <Star className="h-4 w-4" /> },
            { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-sans mb-1 transition-colors ${
                activeTab === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              data-testid={`admin-nav-${item.id}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-56 pt-20 px-4 py-8 max-w-6xl">
          {/* Mobile tab selector */}
          <div className="md:hidden mb-6 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {["dashboard", "schedule", "workshops", "products", "testimonials", "settings"].map((tab) => (
                <Button
                  key={tab}
                  size="sm"
                  variant={activeTab === tab ? "default" : "outline"}
                  onClick={() => setActiveTab(tab)}
                  className="font-sans text-xs capitalize whitespace-nowrap"
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.h1 variants={fadeUp} className="font-serif text-3xl font-light mb-8">Dashboard</motion.h1>

              {/* Stats */}
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                  <motion.div key={stat.label} variants={fadeUp}>
                    <Card>
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {stat.icon}
                          </div>
                          <Badge variant={stat.positive ? "secondary" : "destructive"} className="text-xs">
                            {stat.change}
                          </Badge>
                        </div>
                        <p className="font-serif text-2xl font-semibold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1 font-sans">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Recent Bookings */}
              <motion.div variants={fadeUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg font-medium">Recent Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-sans text-xs">Student</TableHead>
                          <TableHead className="font-sans text-xs">Class</TableHead>
                          <TableHead className="font-sans text-xs">Date</TableHead>
                          <TableHead className="font-sans text-xs">Status</TableHead>
                          <TableHead className="font-sans text-xs">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentBookings.map((booking) => (
                          <TableRow key={booking.id} data-testid={`booking-row-${booking.id}`}>
                            <TableCell className="text-sm font-medium">{booking.student}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{booking.class}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{booking.date}</TableCell>
                            <TableCell>
                              <Badge
                                variant={booking.status === "confirmed" ? "secondary" : booking.status === "pending" ? "outline" : "destructive"}
                                className="text-xs font-sans capitalize"
                              >
                                {booking.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => showToast("Booking confirmed")} data-testid={`confirm-booking-${booking.id}`}>
                                  <Check className="h-3 w-3 text-primary" />
                                </Button>
                                <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => showToast("Booking removed")} data-testid={`remove-booking-${booking.id}`}>
                                  <X className="h-3 w-3 text-destructive" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {/* Schedule Manager */}
          {activeTab === "schedule" && (
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <div className="flex items-center justify-between mb-8">
                <motion.h1 variants={fadeUp} className="font-serif text-3xl font-light">Schedule Manager</motion.h1>
                <Button className="font-sans text-sm" data-testid="add-class-btn" onClick={() => showToast("New class slot added")}>
                  <Plus className="h-4 w-4 mr-2" /> Add Class Slot
                </Button>
              </div>
              <motion.div variants={stagger} className="space-y-3">
                {classes.map((cls) => (
                  <motion.div key={cls.id} variants={fadeUp}>
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img src={cls.image} alt={cls.title} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">{cls.title}</p>
                            <p className="text-xs text-muted-foreground">{cls.timing} · {cls.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs font-sans">{cls.difficulty}</Badge>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => showToast("Class updated")} data-testid={`edit-class-${cls.id}`}>
                            <Edit className="h-3.5 w-3.5" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => showToast("Class removed")} data-testid={`delete-class-${cls.id}`}>
                            <Trash2 className="h-3.5 w-3.5 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Workshops */}
          {activeTab === "workshops" && (
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <div className="flex items-center justify-between mb-8">
                <motion.h1 variants={fadeUp} className="font-serif text-3xl font-light">Workshops</motion.h1>
                <Dialog open={addWorkshopOpen} onOpenChange={setAddWorkshopOpen}>
                  <DialogTrigger asChild>
                    <Button className="font-sans text-sm" data-testid="add-workshop-btn">
                      <Plus className="h-4 w-4 mr-2" /> Add Workshop
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-serif">Add New Workshop</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setAddWorkshopOpen(false); showToast("Workshop created"); }}>
                      <div><Label className="text-sm mb-1.5 block">Title</Label><Input placeholder="Workshop title" data-testid="workshop-title-input" /></div>
                      <div><Label className="text-sm mb-1.5 block">Description</Label><Textarea rows={3} placeholder="Workshop description" /></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label className="text-sm mb-1.5 block">Date</Label><Input type="date" /></div>
                        <div><Label className="text-sm mb-1.5 block">Price (₹)</Label><Input type="number" placeholder="1999" /></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label className="text-sm mb-1.5 block">Original Price (₹)</Label><Input type="number" placeholder="2999" /></div>
                        <div><Label className="text-sm mb-1.5 block">Spots Available</Label><Input type="number" placeholder="20" /></div>
                      </div>
                      <Button type="submit" className="w-full font-sans" data-testid="save-workshop-btn">Create Workshop</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <motion.div variants={stagger} className="space-y-4">
                {workshops.map((ws) => (
                  <motion.div key={ws.id} variants={fadeUp}>
                    <Card>
                      <CardContent className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img src={ws.image} alt={ws.title} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm">{ws.title}</p>
                            <p className="text-xs text-muted-foreground">{new Date(ws.date).toLocaleDateString("en-IN")} · {ws.spotsLeft} spots left</p>
                            <div className="flex gap-2 mt-1">
                              <Badge className="text-xs font-sans bg-destructive text-white">{ws.discount}% OFF</Badge>
                              <Badge variant="secondary" className="text-xs font-sans">{ws.badge}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => showToast("Workshop updated")}>
                            <Edit className="h-3.5 w-3.5" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => showToast("Workshop removed")}>
                            <Trash2 className="h-3.5 w-3.5 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Products */}
          {activeTab === "products" && (
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <div className="flex items-center justify-between mb-8">
                <motion.h1 variants={fadeUp} className="font-serif text-3xl font-light">Products</motion.h1>
                <Dialog open={addProductOpen} onOpenChange={setAddProductOpen}>
                  <DialogTrigger asChild>
                    <Button className="font-sans text-sm" data-testid="add-product-btn">
                      <Plus className="h-4 w-4 mr-2" /> Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-serif">Add New Product</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setAddProductOpen(false); showToast("Product created"); }}>
                      <div><Label className="text-sm mb-1.5 block">Product Name</Label><Input placeholder="Product name" /></div>
                      <div><Label className="text-sm mb-1.5 block">Description</Label><Textarea rows={3} placeholder="Product description" /></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label className="text-sm mb-1.5 block">Price (₹)</Label><Input type="number" placeholder="999" /></div>
                        <div><Label className="text-sm mb-1.5 block">Category</Label><Input placeholder="Yoga Mats" /></div>
                      </div>
                      <Button type="submit" className="w-full font-sans">Add Product</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-sans text-xs">Product</TableHead>
                      <TableHead className="font-sans text-xs">Category</TableHead>
                      <TableHead className="font-sans text-xs">Price</TableHead>
                      <TableHead className="font-sans text-xs">Rating</TableHead>
                      <TableHead className="font-sans text-xs">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((p) => (
                      <TableRow key={p.id} data-testid={`product-row-${p.id}`}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                            <span className="text-sm font-medium">{p.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{p.category}</TableCell>
                        <TableCell className="text-sm font-semibold text-primary">₹{p.price.toLocaleString()}</TableCell>
                        <TableCell className="text-sm">{p.rating} ⭐ ({p.reviews})</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => showToast("Product updated")} data-testid={`edit-product-${p.id}`}>
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-7 w-7" onClick={() => showToast("Product removed")} data-testid={`delete-product-${p.id}`}>
                              <Trash2 className="h-3 w-3 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </motion.div>
          )}

          {/* Testimonials */}
          {activeTab === "testimonials" && (
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.h1 variants={fadeUp} className="font-serif text-3xl font-light mb-8">Testimonials</motion.h1>
              <motion.div variants={stagger} className="space-y-4">
                {testimonials.map((t) => (
                  <motion.div key={t.id} variants={fadeUp}>
                    <Card>
                      <CardContent className="p-5 flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                            {t.initials}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{t.name} <span className="text-muted-foreground font-normal">— {t.location}</span></p>
                            <p className="text-xs text-muted-foreground mb-2">{t.duration}</p>
                            <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.text.slice(0, 120)}..."</p>
                          </div>
                        </div>
                        <div className="flex gap-1 flex-shrink-0">
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => showToast("Testimonial approved")} data-testid={`approve-testimonial-${t.id}`}>
                            <Check className="h-4 w-4 text-primary" />
                          </Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => showToast("Testimonial rejected")} data-testid={`reject-testimonial-${t.id}`}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Settings */}
          {activeTab === "settings" && (
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.h1 variants={fadeUp} className="font-serif text-3xl font-light mb-8">Settings</motion.h1>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                <motion.div variants={fadeUp}>
                  <Card>
                    <CardHeader><CardTitle className="font-serif text-lg">Studio Information</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <div><Label className="text-sm mb-1.5 block">Studio Name</Label><Input defaultValue="Pankhlife.in" /></div>
                      <div><Label className="text-sm mb-1.5 block">WhatsApp Number</Label><Input defaultValue="+91 98765 43210" /></div>
                      <div><Label className="text-sm mb-1.5 block">Email</Label><Input defaultValue="renu@pankhlife.in" /></div>
                      <Button className="font-sans w-full" onClick={() => showToast("Settings saved")} data-testid="save-settings-btn">Save Changes</Button>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Card>
                    <CardHeader><CardTitle className="font-serif text-lg">Notifications</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <div><Label className="text-sm mb-1.5 block">Email for Bookings</Label><Input defaultValue="renu@pankhlife.in" /></div>
                      <div><Label className="text-sm mb-1.5 block">SMS Alerts</Label><Input defaultValue="+91 98765 43210" /></div>
                      <Button variant="outline" className="font-sans w-full" onClick={() => showToast("Notification preferences saved")}>Update Preferences</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
}

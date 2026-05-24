import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Wifi,
  MapPin,
  Calendar,
  User,
  MessageCircle,
  Leaf,
} from "lucide-react";
import { classes } from "@/data/classes";
import { schedule } from "@/data/schedule";
import { useToast } from "@/hooks/use-toast";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BookingDetails {
  classId: string;
  slotId: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
}

// ─── Progress Indicator ───────────────────────────────────────────────────────

function StepIndicator({ step }: { step: number }) {
  const steps = ["Choose Class", "Pick Slot", "Your Details", "Confirmed"];
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = step > idx;
        const active = step === idx;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-sans font-semibold transition-all duration-300 ${
                  done
                    ? "bg-primary text-primary-foreground"
                    : active
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {done ? <CheckCircle className="h-4 w-4" /> : idx}
              </div>
              <span
                className={`text-xs font-sans hidden sm:block transition-colors ${
                  active ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-1 transition-colors duration-500 ${
                  step > idx ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1 – Choose Class ────────────────────────────────────────────────────

function StepChooseClass({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (id: string) => void;
  onNext: () => void;
}) {
  const featured = classes.filter((c) =>
    ["morning-yoga", "meditation", "pranayama", "online-classes", "therapy-yoga", "weight-loss-yoga"].includes(c.id)
  );

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-light text-center mb-2">
        Which class would you like to try?
      </h2>
      <p className="text-center text-muted-foreground text-sm mb-8 font-sans">
        Your first class is complimentary. Pick what resonates with you.
      </p>

      <RadioGroup value={value} onValueChange={onChange} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((cls) => (
          <div key={cls.id}>
            <RadioGroupItem value={cls.id} id={`class-${cls.id}`} className="sr-only" />
            <Label htmlFor={`class-${cls.id}`} className="cursor-pointer">
              <Card
                className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${
                  value === cls.id
                    ? "ring-2 ring-primary shadow-md"
                    : "hover:border-primary/50"
                }`}
                data-testid={`select-class-${cls.id}`}
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {value === cls.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                  <Badge className="absolute bottom-2 left-2 text-xs font-sans">{cls.difficulty}</Badge>
                </div>
                <CardContent className="p-3">
                  <p className="font-serif text-base font-medium leading-tight">{cls.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-sans">{cls.duration} · {cls.timing}</p>
                </CardContent>
              </Card>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-end mt-8">
        <Button
          onClick={onNext}
          disabled={!value}
          className="font-sans px-8"
          data-testid="step1-next"
        >
          Choose a Time Slot <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Step 2 – Pick Slot ───────────────────────────────────────────────────────

function StepPickSlot({
  classId,
  value,
  onChange,
  onNext,
  onBack,
}: {
  classId: string;
  value: string;
  onChange: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const selectedClass = classes.find((c) => c.id === classId);

  // Map class types to schedule classTypes
  const classTypeMap: Record<string, string[]> = {
    "morning-yoga": ["Morning Yoga"],
    "meditation": ["Meditation"],
    "pranayama": ["Pranayama"],
    "online-classes": ["Online"],
    "therapy-yoga": ["Therapy Yoga"],
    "weight-loss-yoga": ["Weight Loss"],
  };
  const types = classTypeMap[classId] ?? [];
  const slots = schedule.filter((s) =>
    types.length ? types.includes(s.classType) : true
  ).slice(0, 8);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayFull: Record<string, string> = {
    Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
    Fri: "Friday", Sat: "Saturday", Sun: "Sunday",
  };

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-light text-center mb-1">
        Pick a time slot
      </h2>
      <p className="text-center text-muted-foreground text-sm mb-8 font-sans">
        Showing available slots for <span className="text-primary font-medium">{selectedClass?.title}</span>
      </p>

      {slots.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No slots found. Please reach out via WhatsApp to book.</p>
          <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button className="font-sans mt-4">Chat on WhatsApp</Button>
          </a>
        </div>
      ) : (
        <RadioGroup value={value} onValueChange={onChange} className="grid sm:grid-cols-2 gap-3">
          {slots.map((slot) => (
            <div key={slot.id}>
              <RadioGroupItem value={slot.id} id={`slot-${slot.id}`} className="sr-only" />
              <Label htmlFor={`slot-${slot.id}`} className="cursor-pointer">
                <Card
                  className={`transition-all duration-200 hover:shadow-md ${
                    value === slot.id ? "ring-2 ring-primary shadow-md" : "hover:border-primary/50"
                  }`}
                  data-testid={`select-slot-${slot.id}`}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold font-sans ${slot.color}`}>
                        {days.find((d) => dayFull[d] === slot.day) ?? slot.day.slice(0, 3)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{slot.day}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <Clock className="h-3 w-3 text-primary" />
                          {slot.time} – {slot.endTime}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          {slot.mode === "online" ? (
                            <Wifi className="h-3 w-3 text-primary" />
                          ) : (
                            <MapPin className="h-3 w-3 text-primary" />
                          )}
                          {slot.mode === "online" ? "Online (Zoom)" : "Studio — Andheri West"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {value === slot.id && (
                        <CheckCircle className="h-5 w-5 text-primary ml-2" />
                      )}
                      <p className="text-xs text-muted-foreground mt-1">{slot.spotsLeft} spots</p>
                    </div>
                  </CardContent>
                </Card>
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} className="font-sans" data-testid="step2-back">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={onNext} disabled={!value} className="font-sans px-8" data-testid="step2-next">
          Enter Your Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Step 3 – Personal Details ────────────────────────────────────────────────

function StepPersonalDetails({
  booking,
  onChange,
  onNext,
  onBack,
}: {
  booking: BookingDetails;
  onChange: (field: keyof BookingDetails, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const isValid =
    booking.name.trim() !== "" &&
    booking.email.trim() !== "" &&
    booking.phone.trim() !== "";

  const experienceLevels = [
    { value: "none", label: "Complete beginner — never tried yoga" },
    { value: "some", label: "Tried yoga a few times before" },
    { value: "regular", label: "I practise occasionally (1-2× / week)" },
    { value: "advanced", label: "Regular practitioner (3+× / week)" },
  ];

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-light text-center mb-1">
        Tell us a little about yourself
      </h2>
      <p className="text-center text-muted-foreground text-sm mb-8 font-sans">
        Ms. Renu reviews every booking personally. This helps her prepare for your class.
      </p>

      <div className="max-w-xl mx-auto space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="font-sans text-sm mb-1.5 block">
              <User className="inline h-3.5 w-3.5 mr-1 text-primary" />
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={booking.name}
              onChange={(e) => onChange("name", e.target.value)}
              data-testid="field-name"
            />
          </div>
          <div>
            <Label htmlFor="email" className="font-sans text-sm mb-1.5 block">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={booking.email}
              onChange={(e) => onChange("email", e.target.value)}
              data-testid="field-email"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="font-sans text-sm mb-1.5 block">
            WhatsApp / Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={booking.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            data-testid="field-phone"
          />
          <p className="text-xs text-muted-foreground mt-1">Ms. Renu will send the class details here.</p>
        </div>

        <div>
          <Label className="font-sans text-sm mb-3 block">
            What is your current yoga experience?
          </Label>
          <RadioGroup
            value={booking.experience}
            onValueChange={(v) => onChange("experience", v)}
            className="space-y-2"
          >
            {experienceLevels.map((lvl) => (
              <div key={lvl.value} className="flex items-center gap-3">
                <RadioGroupItem value={lvl.value} id={`exp-${lvl.value}`} data-testid={`exp-${lvl.value}`} />
                <Label htmlFor={`exp-${lvl.value}`} className="font-sans text-sm cursor-pointer text-muted-foreground">
                  {lvl.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="message" className="font-sans text-sm mb-1.5 block">
            Anything Ms. Renu should know? <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="e.g. I have a bad knee, I'm recovering from surgery, I'd like to focus on stress relief…"
            value={booking.message}
            onChange={(e) => onChange("message", e.target.value)}
            data-testid="field-message"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} className="font-sans" data-testid="step3-back">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Button onClick={onNext} disabled={!isValid} className="font-sans px-8" data-testid="step3-next">
          Confirm Booking <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

// ─── Step 4 – Confirmation ────────────────────────────────────────────────────

function StepConfirmed({ booking }: { booking: BookingDetails }) {
  const cls = classes.find((c) => c.id === booking.classId);
  const slot = schedule.find((s) => s.id === booking.slotId);

  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="text-center"
    >
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto"
      >
        <CheckCircle className="h-10 w-10 text-primary" />
      </motion.div>

      <h2 className="font-serif text-3xl sm:text-4xl font-light mb-3">
        You're all set, {booking.name.split(" ")[0]}!
      </h2>
      <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-10 font-sans">
        Ms. Renu has received your booking request and will personally confirm it via WhatsApp or email within a few hours.
      </p>

      {/* Booking summary card */}
      <div className="max-w-sm mx-auto mb-10">
        <Card className="text-left">
          <CardContent className="p-5 space-y-4">
            <p className="font-serif text-base font-medium border-b border-border pb-3">Booking Summary</p>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-0.5">Class</p>
                <p className="text-sm font-medium">{cls?.title}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-0.5">Time</p>
                <p className="text-sm font-medium">{slot?.day} · {slot?.time} – {slot?.endTime}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  {slot?.mode === "online" ? <Wifi className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                  {slot?.mode === "online" ? "Online (Zoom link will be sent)" : "Studio — Andheri West, Mumbai"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-0.5">Student</p>
                <p className="text-sm font-medium">{booking.name}</p>
                <p className="text-xs text-muted-foreground">{booking.email} · {booking.phone}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-border">
              <Badge variant="secondary" className="text-xs font-sans bg-green-100 text-green-800">
                ✓ Trial class — complimentary
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What happens next */}
      <div className="max-w-sm mx-auto mb-10 text-left">
        <p className="font-serif text-base font-medium mb-4 text-center">What happens next?</p>
        <ol className="space-y-3">
          {[
            "Ms. Renu reviews your booking and confirms via WhatsApp or email within a few hours.",
            "You'll receive class details, joining instructions, and what to bring.",
            "Show up — Ms. Renu handles everything else.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="font-sans gap-2 w-full sm:w-auto" data-testid="confirm-whatsapp">
            <MessageCircle className="h-4 w-4 text-green-500" />
            Chat on WhatsApp
          </Button>
        </a>
        <Link href="/">
          <Button className="font-sans gap-2 w-full sm:w-auto" data-testid="confirm-home">
            <Leaf className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

const emptyBooking: BookingDetails = {
  classId: "",
  slotId: "",
  name: "",
  email: "",
  phone: "",
  experience: "none",
  message: "",
};

export default function BookTrialPage() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState<BookingDetails>(emptyBooking);
  const { toast } = useToast();

  const updateBooking = (field: keyof BookingDetails, value: string) =>
    setBooking((prev) => ({ ...prev, [field]: value }));

  const handleConfirm = () => {
    setStep(4);
    toast({
      title: "Booking received!",
      description: "Ms. Renu will confirm shortly via WhatsApp or email.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header strip */}
      <div className="bg-primary text-primary-foreground py-3 text-center text-sm font-sans">
        🌿 Your first class is completely free — no card required.
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-12 pb-24">
        {/* Back link */}
        {step < 4 && (
          <div className="mb-8">
            <Link href="/classes">
              <Button variant="ghost" size="sm" className="font-sans text-sm -ml-2 text-muted-foreground" data-testid="back-to-classes">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Classes
              </Button>
            </Link>
          </div>
        )}

        {/* Progress */}
        <StepIndicator step={step} />

        {/* Steps */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <StepChooseClass
              value={booking.classId}
              onChange={(id) => updateBooking("classId", id)}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <StepPickSlot
              classId={booking.classId}
              value={booking.slotId}
              onChange={(id) => updateBooking("slotId", id)}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <StepPersonalDetails
              booking={booking}
              onChange={updateBooking}
              onNext={handleConfirm}
              onBack={() => setStep(2)}
            />
          )}
          {step === 4 && <StepConfirmed booking={booking} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

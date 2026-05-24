export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  authorInitials: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export type BlogCategory =
  | "Yoga Practice"
  | "Wellness Tips"
  | "Ayurveda"
  | "Meditation"
  | "Nutrition"
  | "Student Stories";

export const blogCategories: BlogCategory[] = [
  "Yoga Practice",
  "Wellness Tips",
  "Ayurveda",
  "Meditation",
  "Nutrition",
  "Student Stories",
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "morning-yoga-routine-beginners",
    title: "A Simple Morning Yoga Routine for Absolute Beginners",
    excerpt:
      "You don't need 90 minutes or a perfect studio to begin. Here is a grounded 20-minute morning sequence that will change how you start your day.",
    content: `## Why Morning Yoga?

The morning is the most potent time to practice. Ayurveda calls the two hours before sunrise *Brahma Muhurta* — the hour of Brahma — a window when the mind is naturally still, the air is pure, and the body is ready to absorb the effects of practice deeply.

You do not need to wake at 4 AM. Simply moving your alarm back 20 minutes and rolling out your mat before reaching for your phone can shift the entire quality of your day.

## The Sequence

### 1. Child's Pose (Balasana) — 2 minutes

Begin by kneeling and folding forward, forehead resting on the mat. Arms stretched long or resting beside you. Breathe slowly into your lower back. Let the breath soften whatever you carried from sleep.

*Why:* Gently decompresses the spine, signals the nervous system that it is safe to move.

### 2. Cat-Cow (Marjaryasana-Bitilasana) — 2 minutes

On all fours. Inhale, drop the belly, lift the gaze (Cow). Exhale, round the spine, tuck the chin (Cat). Move slowly. Let the breath lead — not the body.

*Why:* Wakes up the spine, lubricates the vertebrae, syncs breath and movement.

### 3. Downward-Facing Dog (Adho Mukha Svanasana) — 1 minute

From all fours, tuck toes, lift hips, lengthen the spine. Pedal the heels gently. Do not force straight legs — a bend in the knee is perfectly fine.

*Why:* Full-body awakener. Stretches hamstrings, calves, shoulders and increases blood flow to the brain.

### 4. Sun Salutation A — 3 rounds

Move through the sequence at your own pace. A slow, mindful round takes 3–4 minutes. Three rounds gently elevate the heart rate, build heat, and create the rhythm that will carry you through the day.

### 5. Warrior II (Virabhadrasana II) — 1 minute each side

Step wide, front knee bends to 90°, arms stretch long. Gaze forward. Breathe steadily. Feel the strength of the pose meeting the softness of the breath.

*Why:* Builds strength in the legs and core, opens the hips and chest.

### 6. Seated Forward Fold (Paschimottanasana) — 2 minutes

Sit tall, legs extended. Inhale, lengthen. Exhale, fold forward. Hold your shins, ankles, or feet — wherever you reach without strain. Surrender into the fold.

*Why:* Calms the nervous system, stretches the entire back line of the body.

### 7. Corpse Pose (Savasana) — 5 minutes

Lie flat, arms slightly away from the body, palms up. Close your eyes. Do nothing. This is not rest — it is integration. The practice becomes yours in Savasana.

## A Note from Ms. Renu

The most common mistake beginners make is skipping Savasana. The poses are seeds; Savasana is the soil in which they take root. Please do not rush out of it.

Start with this routine for two weeks. You will notice — before you feel dramatic change — a subtle shift in how you meet your mornings. That shift is yoga working.`,
    category: "Yoga Practice",
    tags: ["Beginners", "Morning Routine", "Hatha Yoga", "Sun Salutation"],
    author: "Ms. Renu Patil",
    authorInitials: "RP",
    publishedAt: "2026-05-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    featured: true,
  },
  {
    id: "b2",
    slug: "pranayama-anxiety-science",
    title: "How Pranayama Rewires the Anxious Mind — The Science",
    excerpt:
      "Ancient yogis mapped the breath-mind connection thousands of years ago. Modern neuroscience is now confirming it. Here is what happens in your brain when you practice breathwork.",
    content: `## The Breath Is Not Just Air

Every thought produces a corresponding change in the breath. And every change in the breath produces a corresponding change in the nervous system. This is not philosophy — it is physiology.

The vagus nerve, which runs from the brainstem to the abdomen, is the superhighway of the parasympathetic nervous system — your rest-and-digest mode. When you breathe slowly and deeply, especially with a prolonged exhale, you directly stimulate this nerve. Heart rate slows. Blood pressure drops. The amygdala — the brain's alarm system — quiets down.

## Three Pranayamas for Anxiety

### 1. Nadi Shodhana (Alternate Nostril Breathing)

Sit comfortably. Close the right nostril with your thumb, inhale through the left. Close the left with your ring finger, release the right, exhale. Inhale right. Switch. This is one round.

**Why it works:** Studies show that left-nostril breathing activates the parasympathetic system; right-nostril breathing activates the sympathetic. Alternating between them creates hemispheric balance in the brain, reducing the dominance of anxious thought loops in the prefrontal cortex.

**Practice:** 10 rounds, twice daily.

### 2. Bhramari (Humming Bee Breath)

Inhale deeply. On the exhale, close the ears with your thumbs, and hum — like a bee — for the entire exhale. Feel the vibration in your face, skull, and chest.

**Why it works:** The humming creates internal vibration that stimulates the vagus nerve directly. Research at Harvard Medical School found that Bhramari significantly reduces cortisol levels after just 5 minutes of practice.

**Practice:** 5–10 rounds, morning and evening.

### 3. Extended Exhale Breathing (4-7-8)

Inhale for 4 counts. Hold for 7. Exhale for 8. Repeat 4 times.

**Why it works:** The extended exhale activates the parasympathetic response. When the exhale is longer than the inhale, heart rate variability increases — a reliable biomarker of a regulated, resilient nervous system.

**Practice:** At any moment of anxiety, or before sleep.

## An Important Note

Pranayama is a practice of progressive deepening. Begin slowly. If any technique causes dizziness, lightheadedness, or discomfort, stop immediately and return to natural breathing. Always learn from a qualified teacher before attempting more advanced practices like Kapalabhati or Kumbhaka (breath retention).`,
    category: "Meditation",
    tags: ["Pranayama", "Anxiety", "Breathwork", "Neuroscience", "Stress Relief"],
    author: "Ms. Renu Patil",
    authorInitials: "RP",
    publishedAt: "2026-05-03",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    featured: true,
  },
  {
    id: "b3",
    slug: "ayurveda-daily-routine",
    title: "The Ayurvedic Daily Routine (Dinacharya) That Changed My Students' Lives",
    excerpt:
      "Before any special diet or supplement, Ayurveda prescribes a daily rhythm. These eight practices — done in the right order — create the foundation for lasting health.",
    content: `## What Is Dinacharya?

*Dina* means day. *Charya* means to follow or routine. Dinacharya is the Ayurvedic science of daily routine — a sequence of practices aligned with the natural rhythms of the sun, your body's internal clock, and the flow of the three doshas (Vata, Pitta, Kapha) across the day.

You do not have to be a practitioner of Ayurveda to benefit from it. These are foundational health practices drawn from a system that has been refined over 5,000 years.

## The Eight Practices

### 1. Wake Before Sunrise

Ideally before 6 AM. The early morning is dominated by Vata — light, mobile, creative energy. Rising in Vata time keeps the mind clear and the body light. Sleeping through Kapha time (6–10 AM) makes you feel heavy and sluggish.

### 2. Drink Warm Water

Before anything else — before coffee, before checking your phone — drink a glass of warm or room-temperature water. This gently kindles the digestive fire (Agni) after its overnight fast and supports elimination.

### 3. Tongue Scraping (Jihva Nirlekhana)

Use a copper or stainless steel tongue scraper and gently scrape from back to front 5–7 times. The coating on the tongue in the morning is metabolic waste (Ama). Removing it prevents reabsorption.

### 4. Oil Pulling (Kavala Graha)

Hold one tablespoon of cold-pressed sesame or coconut oil in your mouth for 10–20 minutes. Swish gently. Spit into the bin (not the sink). This draws toxins from the oral mucosa and has been shown to reduce harmful bacteria.

### 5. Abhyanga (Self-Oil Massage)

Warm sesame or coconut oil (depending on your dosha) and massage your entire body for 10–15 minutes before bathing. Work from the extremities toward the heart. This nourishes the skin, calms Vata, supports lymphatic drainage, and builds ojas (vitality).

### 6. Yoga and Pranayama

Now your body is prepared for movement. 20–30 minutes of appropriate yoga and 10 minutes of pranayama. This is not exercise — it is preparation for the day.

### 7. Warm, Cooked Breakfast

Ayurveda does not recommend raw food, cold food, or smoothies in the morning. A warm, lightly spiced porridge — oats with ghee and cardamom, for example — is easy to digest and deeply nourishing.

### 8. No Screens for the First Hour

This is the most challenging practice for most students — and the most transformative. The morning mind is impressionable. What you feed it in the first hour shapes your emotional and mental tone for the entire day.

## Start with One

You do not need to implement all eight practices at once. I tell my students: pick one. Practice it for 21 days until it is automatic. Then add the next. A dinacharya built slowly becomes unshakeable.`,
    category: "Ayurveda",
    tags: ["Ayurveda", "Daily Routine", "Dinacharya", "Holistic Health"],
    author: "Ms. Renu Patil",
    authorInitials: "RP",
    publishedAt: "2026-04-22",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1615485291234-9d694218aeb3?w=800&q=80",
  },
  {
    id: "b4",
    slug: "yoga-weight-loss-truth",
    title: "The Truth About Yoga and Weight Loss (It Is Not What You Think)",
    excerpt:
      "Yoga will help you lose weight — but not primarily through caloric burn. Understanding the real mechanism changes everything about how you approach it.",
    content: `## The Honest Conversation

When students come to me with weight loss as their primary goal, I am always honest with them: if you are expecting yoga to function like a spin class or HIIT session, you will be disappointed.

An hour of yoga burns between 180–460 calories — far less than most intense cardio. And yet, study after study — including a 2016 study published in the *Journal of Alternative and Complementary Medicine* — shows that regular yoga practitioners maintain lower BMI, better metabolic health, and more sustainable weight management than non-practitioners.

Why? The mechanism is almost entirely psychological.

## How Yoga Actually Works for Weight

### 1. Stress-Cortisol Connection

Chronic stress is one of the most underestimated drivers of weight gain, particularly around the abdomen. Elevated cortisol signals the body to store fat — especially visceral fat. Regular yoga practice, through its dual action on the nervous system (movement + breathwork), is one of the most effective evidence-based cortisol regulators available.

Less cortisol = less abdominal fat storage. It is not glamorous. But it is real.

### 2. Mindful Eating

A 2016 study from the Fred Hutchinson Cancer Research Center found that yoga practitioners were significantly more likely to eat mindfully — responding to hunger and satiety cues rather than emotional or habitual eating. This effect persisted for years after beginning practice.

Yoga trains interoception — the ability to notice internal states. When you become more aware of your body on the mat, you become more aware of it at the table.

### 3. Sleep Quality

Poor sleep disrupts the hormones leptin and ghrelin, which regulate hunger. Tired people consistently eat more, particularly sugar and refined carbohydrates. Yoga — specifically gentle yoga and yoga nidra — is one of the few non-pharmacological interventions consistently shown to improve sleep quality in controlled trials.

### 4. Inflammation

Chronic low-grade inflammation is now understood as a key driver of weight gain and metabolic dysfunction. Yoga reduces markers of inflammation (including IL-6 and CRP) through a combination of movement, breathwork, and stress regulation.

## A Different Goal

What I encourage my students to do is replace "I want to lose weight" with "I want to feel well in my body." The weight loss — when it happens, and it often does — becomes a side effect of wholeness, not the target.

That shift changes your relationship with your practice entirely. And it changes your relationship with yourself.`,
    category: "Wellness Tips",
    tags: ["Weight Loss", "Yoga Science", "Mindful Eating", "Holistic Health"],
    author: "Ms. Renu Patil",
    authorInitials: "RP",
    publishedAt: "2026-04-14",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80",
  },
  {
    id: "b5",
    slug: "anti-inflammatory-foods-yoga",
    title: "5 Anti-Inflammatory Foods That Supercharge Your Yoga Practice",
    excerpt:
      "What you eat directly affects your flexibility, recovery, energy, and focus on the mat. These five foods, rooted in both Ayurveda and modern nutrition science, are the ones I recommend to every student.",
    content: `## Food Is Medicine

Charaka, the father of Ayurvedic medicine, wrote: *"When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."*

Inflammation — chronic, low-grade inflammation — is the silent enemy of the yoga practitioner. It stiffens joints, clouds the mind, slows recovery, and over time, contributes to virtually every chronic disease. These five foods, supported by both ancient wisdom and modern research, are the most effective dietary tools I have found in 15 years of practice and teaching.

## 1. Turmeric (Haridra)

Curcumin — the active compound in turmeric — is one of the most studied anti-inflammatory compounds in the world. It inhibits NF-κB, a molecule that activates genes related to inflammation. For yogis, the practical effect is less joint stiffness, faster muscle recovery, and reduced DOMS (delayed onset muscle soreness).

**How to use:** Golden milk (turmeric, black pepper, and ghee in warm milk) before bed. The piperine in black pepper increases curcumin absorption by 2,000%.

## 2. Ghee (Clarified Butter)

Controversial in the West, sacred in Ayurveda. Ghee is rich in butyrate — a short-chain fatty acid that is the primary fuel for colonocytes (gut lining cells) and a powerful regulator of inflammation. A healthy gut lining means less systemic inflammation.

Ghee also carries fat-soluble vitamins (A, D, E, K2) and has a high smoke point, making it the safest fat for cooking at high temperatures.

**How to use:** 1 teaspoon in warm water first thing in the morning, or used in cooking instead of refined oils.

## 3. Ginger (Adrakha)

Fresh ginger contains gingerols and shogaols — compounds that block prostaglandins (inflammation mediators) in much the same way as common NSAIDs, but without the gastrointestinal side effects.

For yoga practitioners, the most relevant benefit is joint health. Multiple studies show consistent ginger consumption reduces knee pain in osteoarthritis and accelerates muscle recovery post-exercise.

**How to use:** Grated fresh ginger in hot water with lemon. Or steeped for 10 minutes as tea.

## 4. Amla (Indian Gooseberry)

One of the most vitamin C-dense foods on earth — 20 times more bioavailable vitamin C than orange juice. Vitamin C is essential for collagen synthesis. Collagen is the structural protein of tendons, ligaments, and fascia — the very tissues yoga stretches and strengthens. Amla also contains tannins that stabilise its vitamin C even under heat.

**How to use:** Amla juice (30ml) first thing in the morning, or amla powder mixed with honey.

## 5. Ashwagandha (Withania somnifera)

An adaptogenic herb that modulates the body's stress response at the root — the HPA axis (hypothalamic-pituitary-adrenal). Chronically elevated cortisol degrades muscle tissue, increases inflammation, and suppresses the immune system. Ashwagandha reduces cortisol by up to 30% in clinical studies.

For yogis, it translates to better recovery, improved strength (yes, ashwagandha increases VO2 max and muscle mass), and more restful sleep.

**How to use:** 300–500mg of root extract daily, or 1 teaspoon of ashwagandha powder in warm milk at night.

## One Principle Above All

Eat warm. Eat cooked. Eat seasonally. Ayurveda teaches that raw, cold food is hard to digest — it puts stress on your Agni (digestive fire). A well-functioning digestive system is the foundation of everything: energy, immunity, clarity, and the suppleness you feel in your practice.`,
    category: "Nutrition",
    tags: ["Nutrition", "Ayurveda", "Anti-inflammatory", "Recovery", "Superfoods"],
    author: "Ms. Renu Patil",
    authorInitials: "RP",
    publishedAt: "2026-04-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=800&q=80",
  },
  {
    id: "b6",
    slug: "priya-back-pain-story",
    title: "How Priya Healed 10 Years of Chronic Back Pain in 6 Months",
    excerpt:
      "At 42, Priya had tried three physiotherapists, two orthopaedic surgeons, and countless pain medications. Then she walked into a therapy yoga class. This is her story.",
    content: `*The following is shared with Priya's full knowledge and consent. Her name has not been changed.*

---

## The First Day

Priya Sharma walked into the studio on a Tuesday morning in September — slowly, carefully, holding the door frame for support. She had a herniated disc at L4-L5, diagnosed seven years earlier, and had lived with daily pain in her lower back and left leg ever since.

"I was at the point where I had accepted it," she told me later. "I thought, this is just my life now. I am a 42-year-old woman with a bad back."

She had been referred by her doctor with a note: *cleared for gentle movement, no forward folds, no twisting.*

I remember watching her settle onto the mat and thinking: we will go slowly. We will listen.

## The First Three Months

For the first eight weeks, we did almost no asana at all in the traditional sense. We worked on:

- **Pelvic floor awareness** — understanding how the deep stabilising muscles of the pelvis support the spine
- **Diaphragmatic breathing** — releasing the chronic tension pattern in the psoas that was pulling her lumbar spine into compression
- **Supine work** — gentle knees-to-chest, windshield wipers, supported bridge

The pain did not disappear. But Priya noticed something. "It stopped being *constant*," she said. "There were moments — 10 minutes, then 30 — when I didn't feel it."

Those moments are everything. They are proof to the nervous system that pain is not permanent.

## Months Four Through Six

By month four, we introduced standing work — Tadasana (Mountain Pose), supported Warrior I, wall-supported downward dog. The structure of the spine was responding. The muscles around the disc — which had been guarding chronically, effectively creating a splint of tension — were beginning to release and trust.

By month five, Priya was attending two classes per week and practising a short home sequence daily. By month six, she walked into the studio without holding the door frame.

She told me recently: "I still have the herniation. It is not *cured*. But I have a relationship with my body now. I know when to push and when to rest. The pain has gone from an 8 out of 10 to a 1 or 2 on most days. And I have those tools now — no one can take them from me."

## What I Learned

Every back pain story is different. Priya's is not a template. What worked for her — the specific sequence, the pace, the therapeutic focus — was built for her body, her history, her nervous system.

But the underlying principle holds universally: the body wants to heal. It is built for healing. Our job — the teacher's, the student's — is to create the conditions for that healing to happen. To get out of the way of the body's own intelligence.

That is what yoga offers that no drug can replicate: a relationship. A language. A conversation between you and the body you live in.

---

*If you are living with chronic pain and wondering whether yoga might help, I offer a free 15-minute consultation to discuss whether my therapy yoga programme is appropriate for your condition. Please reach out via the contact page or WhatsApp.*`,
    category: "Student Stories",
    tags: ["Back Pain", "Therapy Yoga", "Student Story", "Healing", "Chronic Pain"],
    author: "Ms. Renu Patil",
    authorInitials: "RP",
    publishedAt: "2026-03-28",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
    featured: true,
  },
];

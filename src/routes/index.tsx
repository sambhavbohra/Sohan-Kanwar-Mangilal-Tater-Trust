import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  Users,
  PawPrint,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Shield,
  HandHeart,
  Sparkles,
  Eye,
  Building2,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  X,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import ryaLogo from "@/assets/rya-logo.png";
import mahaveerLogo from "@/assets/mahaveer-logo.png";
import sankaraLogo from "@/assets/sankara-logo.png";
import lionsLogo from "@/assets/lions-logo.png";
import jainLogo from "@/assets/jain-logo.png";
import vesLogo from "@/assets/ves-logo.png";
import adinathLogo from "@/assets/adinath-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sohan Kanwar Mangilal Tater Charitable Trust - Serving Humanity Since 2011" },
      {
        name: "description",
        content:
          "A charitable foundation transforming lives through education, healthcare, and compassion across Tamil Nadu and Rajasthan since 2011.",
      },
      { property: "og:title", content: "Sohan Kanwar Mangilal Tater Charitable Trust" },
      {
        property: "og:description",
        content: "Serving humanity since 2011 - education, healthcare and community welfare.",
      },
    ],
  }),
  component: Index,
});

/* ───────────────────────── DATA ───────────────────────── */

const impactStats = [
  { value: 4820, label: "Students awarded scholarships" },
  { value: 19766858, label: "Scholarship amount disbursed", prefix: "₹", format: "inr" as const },
  { value: 6360, label: "Babies delivered" },
  { value: 166011, label: "Eye camp screenings" },
  { value: 50448, label: "Eye surgeries" },
  { value: 14339, label: "Spectacles distributed" },
  { value: 1307, label: "Eye camps conducted" },
  { value: 2000, label: "Disabled people benefited", suffix: "+" },
  { value: 2, label: "Dialysis machines donated" },
];

const values = [
  { icon: Heart, title: "Compassion", text: "Empathy in every act." },
  { icon: Shield, title: "Integrity", text: "Every rupee accounted for." },
  { icon: Users, title: "Community", text: "With and for our people." },
  { icon: HandHeart, title: "Service", text: "Quiet. Consistent. Unwavering." },
  { icon: Eye, title: "Transparency", text: "Open books, open hearts." },
  { icon: Sparkles, title: "Continuity", text: "A legacy for generations." },
];

type Project = { name: string; location?: string; impact?: string; desc: string };
const work: Record<"Education" | "Healthcare" | "Community" | "Animal", Project[]> = {
  Education: [
    { name: "Scholarship Programme", location: "Pan - India", impact: "4,820 Students", desc: "Annual merit & need-based scholarships." },
    { name: "Vivekananda Education Society", location: "Chennai", impact: "Classroom Donation", desc: "Infrastructure for holistic learning." },
    { name: "Jain Sohan Kanwar Mangilal Tater Vivekananda Vidhyalaya", location: "Uttukottai, Tamil Nadu", impact: "Future Campus", desc: "4.36 Acres of Land donated for a school." },
    { name: "Rajasthan Education Trust", location: "Rajasthan", impact: "Regional Education", desc: "Multi-year support to regional education." },
    { name: "Mahaveer Rajasthani Intl. School", location: "Chennai", impact: "Diamond Donor", desc: "Multi-year institutional partnership." },
  ],
  Healthcare: [
    { name: "Maternity Hospital", location: "Merta city, Rajasthan", impact: "6,360 Deliveries", desc: "Safe maternity care for underserved families." },
    { name: "Eye Camps", location: "Tamil nadu and Andhra pradesh", impact: "1,66,011 Screenings", desc: "Free screenings reaching remote communities." },
    { name: "Lions Eye Bank OMNI Van", location: "Chennai", impact: "Mobile Care", desc: "Mobile eye care to villages." },
    { name: "Dialysis Machines", location: "RYA Hospital, chennai", impact: "2 Machines", desc: "Ongoing kidney care infrastructure." },
    { name: "Sankara Eye Hospital Block", location: "Chennai", impact: "Block Donation", desc: "Dedicated patient care block." },
    { name: "Limb Camps", location: "Multi-region", impact: "2000+ Beneficiaries", desc: "Prosthetic limbs for the differently-abled." },
    { name: "Jain Mission Trust OPD", location: "Chikkaballapur, Karnataka", impact: "OPD Room", desc: "Outpatient care infrastructure." },
  ],
  Community: [
    { name: "Blanket Distribution", location: "Annual", impact: "Winter relief", desc: "Warmth for those without shelter." },
    { name: "Food Distribution", location: "Year-round", impact: "Daily meals", desc: "Nutrition support in slums and rural areas." },
    { name: "Sadharmik Family Support", location: "Community", impact: "Ongoing", desc: "Quiet support to families in need." },
    { name: "Flat Donation", location: "Chennai", impact: "Housing", desc: "Residential support for deserving families." },
    { name: "Dharamshala Room", location: "Rajasthan & Gujrat", impact: "Lodging", desc: "Dharamshala Rooms Donatated." },
    { name: "Kapeda Dwar Construction", location: "Kapeda, Rajasthan", impact: "Heritage", desc: "Community gateway construction." },
  ],
  Animal: [
    { name: "Khwaspura Gaushala Shed", location: "Khwaspura, Rajasthan", impact: "Cattle Shelter", desc: "Built shelter for rescued cattle." },
    { name: "Lambiya Gaushala Shed", location: "Lambiya, rajasthan", impact: "Cattle Shelter", desc: "Additional shelter for the herd." },
    { name: "Continuous Gaushala Support", location: "Pan - India", impact: "Ongoing", desc: "Recurring care, feed and maintenance." },
    { name: "Adinath Jain Trust", location: "Rajasthan", impact: "Animal Welfare", desc: "Long-term support for animal welfare." },
  ],
};

const timeline = [
  { year: "2011", title: "The Trust is established", text: "Founded in Chennai with roots in Merta City, Rajasthan." },
  { year: "2013", title: "Scholarship programme begins", text: "First cohort of students supported." },
  { year: "2015", title: "Eye camps scale", text: "Camps reach thousands across Tamil Nadu." },
  { year: "2017", title: "Maternity hospital milestone", text: "Thousands of safe deliveries celebrated." },
  { year: "2019", title: "Gaushala expansion", text: "Shelters built across Rajasthan." },
  { year: "2022", title: "Dialysis support", text: "Dialysis machines installed at RYA Hospital." },
  { year: "Today", title: "A growing legacy", text: "12+ years, thousands of lives touched." },
];

const places = {
  "Tamil Nadu": ["Chennai", "Pammal", "Pambal", "Ayanavaram", "Egmore", "Vyasarpadi", "Uttukottai", "Kodambakkam", "Coimbatore"],
  Rajasthan: ["Merta City", "Mandoli", "Khwaspura", "Lambiya", "Kapeda", "Khajwana", "Ostra", "Jaipur"],
  Karnataka: ["Bangalore", "Chikkaballapur"],
  Gujarat: ["Palitana"],
};

const chartData = [
  { name: "Healthcare", value: 48, color: "#2F763B" },
  { name: "Education", value: 28, color: "#C97B4A" },
  { name: "Community Welfare", value: 16, color: "#C9A23A" },
  { name: "Animal Welfare", value: 8, color: "#8FA68E" },
];

const partners = [
  { name: "RYA Hospital", logo: ryaLogo },
  { name: "Kewal Chand Mohini Bai Daga Dialysis Centre" },
  { name: "Mahaveer Rajasthani International School", logo: mahaveerLogo },
  { name: "Sankara Eye Hospital", logo: sankaraLogo },
  { name: "Lions Eye Bank", logo: lionsLogo },
  { name: "Jain Mission Trust", logo: jainLogo },
  { name: "Vivekananda Education Society", logo: vesLogo },
  { name: "Adinath Jain Trust", logo: adinathLogo },
];

const recognitions = [
  { tier: "Golden Level Donor", to: "RYA Hospital" },
  { tier: "Golden Level Donor", to: "Kewal Chand Mohini Bai Daga Dialysis Centre" },
  { tier: "Diamond Donor", to: "Mahaveer Rajasthani International School" },
];

/* Gallery - uses brand-illustrated cards (real photos to be added by trust) */
const galleryCats = ["All", "Eye Camps", "Scholarship Events", "Maternity Hospital", "Gaushala", "Community Events", "Infrastructure"] as const;
type GalleryCat = (typeof galleryCats)[number];
const gallery: { cat: Exclude<GalleryCat, "All">; caption: string; h: number; tone: string }[] = [
  { cat: "Eye Camps", caption: "Free eye screening camp · Chennai", h: 320, tone: "from-[#2F763B] to-[#1f5028]" },
  { cat: "Scholarship Events", caption: "Annual scholarship ceremony", h: 420, tone: "from-[#473640] to-[#2a1f25]" },
  { cat: "Maternity Hospital", caption: "Maternity ward inauguration", h: 280, tone: "from-[#C9A23A] to-[#8a6e1f]" },
  { cat: "Gaushala", caption: "Khwaspura Gaushala shed", h: 360, tone: "from-[#8FA68E] to-[#4f6651]" },
  { cat: "Community Events", caption: "Blanket distribution drive", h: 300, tone: "from-[#2F763B] to-[#244f29]" },
  { cat: "Infrastructure", caption: "Sankara Eye Hospital block", h: 400, tone: "from-[#473640] to-[#1c1419]" },
  { cat: "Eye Camps", caption: "Cataract surgery follow-up", h: 260, tone: "from-[#2F763B] to-[#1f5028]" },
  { cat: "Scholarship Events", caption: "Student awardees · Merta City", h: 340, tone: "from-[#473640] to-[#2a1f25]" },
  { cat: "Gaushala", caption: "Daily feeding rounds", h: 300, tone: "from-[#8FA68E] to-[#4f6651]" },
  { cat: "Community Events", caption: "Food distribution drive", h: 360, tone: "from-[#C9A23A] to-[#8a6e1f]" },
  { cat: "Infrastructure", caption: "Dharamshala lodging", h: 280, tone: "from-[#2F763B] to-[#1f5028]" },
  { cat: "Maternity Hospital", caption: "Newborn care unit", h: 320, tone: "from-[#C9A23A] to-[#8a6e1f]" },
];

/* ───────────────────────── PAGE ───────────────────────── */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <OurWork />
        <DeepDive />
        <About />
        <Gallery />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section id="home" className="relative min-h-dvh hero-backdrop flex items-center pt-20 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
      {/* Subtle ornamental shapes */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--brand-green)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-[var(--brand-brown)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
            Serving humanity since 2011
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 sm:mt-8 font-display text-[2.6rem] sm:text-5xl lg:text-[5.25rem] leading-[1.05] tracking-tight text-balance text-[var(--brand-brown)]"
          >
            Sohan Kanwar Mangilal Tater{" "}
            <span className="italic text-[var(--brand-green)]">Charitable Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-foreground/70 text-balance"
          >
            Transforming lives through <span className="text-[var(--brand-brown)] font-medium">education</span>,{" "}
            <span className="text-[var(--brand-brown)] font-medium">healthcare</span>, and{" "}
            <span className="text-[var(--brand-brown)] font-medium">compassion</span> across communities and generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-xl hover:shadow-[var(--brand-green)]/20"
            >
              Explore our work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-brown)]/20 px-7 py-3.5 text-sm font-medium text-[var(--brand-brown)] hover:bg-[var(--brand-brown)]/5 transition"
            >
              Contact us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden lg:flex lg:col-span-4 justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[var(--brand-gold)]/40 blur-2xl scale-110" />
            <img src={logo1} alt="Trust emblem" className="relative h-80 w-80 object-contain" />
          </div>
        </motion.div>
      </div>

      {/* Marquee of impact */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/60 bg-background/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center gap-8 overflow-x-auto text-sm text-foreground/60">
          <span className="whitespace-nowrap tracking-widest uppercase text-xs font-bold text-[#28752f]">Impact at a glance</span>
          <span className="whitespace-nowrap font-bold">4,820 Scholarships</span>
          <span className="text-border">·</span>
          <span className="whitespace-nowrap font-bold">50,448 Eye Surgeries</span>
          <span className="text-border">·</span>
          <span className="whitespace-nowrap font-bold">6,360 Deliveries</span>
          <span className="text-border">·</span>
          <span className="whitespace-nowrap font-bold">1,307 Eye Camps</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── IMPACT ───────────────────────── */

function Impact() {
  return (
    <section id="impact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Our Impact</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              A decade of measurable change.
            </h2>
            <p className="mt-6 text-lg text-foreground/65 max-w-xl">
              Numbers tell only part of the story - every figure here represents a life touched, a family supported, a future reshaped.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {impactStats.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="bg-background p-5 sm:p-8 lg:p-10 h-full group hover:bg-[var(--surface)] transition-colors">
                <div className="font-sans text-3xl sm:text-4xl lg:text-[2.5rem] text-[var(--brand-brown)] leading-none">
                  <Counter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    format={s.format ?? "number"}
                  />
                </div>
                <div className="mt-4 text-sm uppercase tracking-wider text-foreground/55">{s.label}</div>
                <div className="mt-6 h-px w-8 bg-[var(--brand-gold)] group-hover:w-16 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── OUR WORK ───────────────────────── */

const tabs = [
  { id: "Education" as const, icon: GraduationCap },
  { id: "Healthcare" as const, icon: Stethoscope },
  { id: "Community" as const, icon: Users },
  { id: "Animal" as const, icon: PawPrint },
];

function OurWork() {
  const [tab, setTab] = useState<keyof typeof work>("Education");
  const items = work[tab];

  return (
    <section id="work" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Our Work</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Programmes that move quietly, reach widely.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tabs.map(({ id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    tab === id
                      ? "bg-[var(--brand-brown)] text-white"
                      : "bg-background border border-border text-foreground/70 hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {id}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {items.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-background rounded-2xl border border-border p-4 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium tracking-tight text-[var(--brand-brown)] leading-tight">{p.name}</h3>
                    <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                      {p.location && (
                        <span className="text-[10px] uppercase tracking-wider text-foreground/50">{p.location}</span>
                      )}
                      {p.impact && (
                        <span className="inline-flex items-center rounded-full bg-[var(--brand-gold)]/40 px-2 py-0.5 text-[10px] font-medium text-[var(--brand-brown)]">
                          {p.impact}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="shrink-0 text-foreground/30 group-hover:text-[var(--brand-green)] group-hover:rotate-12 transition-all" />
                </div>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ───────────────────────── DEEP DIVE ───────────────────────── */

function DeepDive() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-28">
        {/* Timeline */}
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Timeline</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-3xl">
              From 2011 to today.
            </h2>
          </Reveal>

          <div className="mt-16 relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border" aria-hidden />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.04}>
                  <div className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-start ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                    <div className="pl-12 lg:pl-0 lg:[direction:ltr] lg:pr-12 lg:text-right">
                      <div className="font-display text-3xl text-[var(--brand-green)]">{t.year}</div>
                    </div>
                    <div className="pl-12 lg:pl-12 lg:[direction:ltr]">
                      <h3 className="font-display text-xl text-[var(--brand-brown)]">{t.title}</h3>
                      <p className="mt-2 text-foreground/65 max-w-md">{t.text}</p>
                    </div>
                    <div className="absolute left-2.5 lg:left-1/2 lg:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[var(--brand-gold)] ring-4 ring-background" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Geo + Chart */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="bg-[var(--surface)] rounded-3xl p-6 sm:p-8 lg:p-10 h-full border border-border">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Geographic Reach</p>
              <h3 className="mt-3 font-display text-3xl text-[var(--brand-brown)]">Where we work</h3>
              <div className="mt-8 space-y-6">
                {Object.entries(places).map(([state, cities]) => (
                  <div key={state}>
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--brand-brown)]">
                      <MapPin size={14} className="text-[var(--brand-green)]" />
                      {state}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cities.map((c) => (
                        <span key={c} className="px-3 py-1.5 rounded-full bg-background border border-border text-xs text-foreground/70">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[var(--brand-brown)] text-white rounded-3xl p-6 sm:p-8 lg:p-10 h-full">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-gold)] font-medium">Allocation</p>
              <h3 className="mt-3 font-display text-3xl text-white">Where the work is focused</h3>
              <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      stroke="none"
                    >
                      {chartData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: "#1C1C1C", border: "none", borderRadius: 8, color: "#fff" }}
                      formatter={(v: number) => `${v}%`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {chartData.map((c) => (
                  <div key={c.name} className="flex items-center gap-2 text-sm">
                    <span className="h-3 w-3 rounded-sm" style={{ background: c.color }} />
                    <span className="text-white/80">{c.name}</span>
                    <span className="ml-auto text-white/60">{c.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Partners */}
        <div>
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Partners</p>
                <h2 className="mt-4 font-display text-3xl sm:text-5xl">Institutions driving change with us.</h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.03}>
                <div className="bg-background p-4 sm:p-6 lg:p-8 h-full flex items-center justify-center text-center min-h-28">
                  <div>
                    {p.logo ? (
                      <img src={p.logo} alt={p.name} className="mx-auto h-16 w-auto object-contain mb-2" />
                    ) : (
                      <Building2 size={20} className="mx-auto text-[var(--brand-green)] mb-3" />
                    )}
                    <div className="text-sm font-medium text-[var(--brand-brown)] leading-tight">{p.name}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        {/* Recognition */}
        <div id="recognition">
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Recognition</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">Honoured by those we serve.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {recognitions.map((r, i) => (
              <Reveal key={r.to} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-background p-5 sm:p-8 h-full">
                  {r.to === "RYA Hospital" ? (
                    <img src={ryaLogo} alt="RYA Hospital" className="h-16 w-auto object-contain" />
                  ) : r.to === "Mahaveer Rajasthani International School" ? (
                    <img src={mahaveerLogo} alt="Mahaveer Rajasthani International School" className="h-16 w-auto object-contain" />
                  ) : r.to === "Sankara Eye Hospital" ? (
                    <img src={sankaraLogo} alt="Sankara Eye Hospital" className="h-16 w-auto object-contain" />
                  ) : r.to === "Lions Eye Bank" ? (
                    <img src={lionsLogo} alt="Lions Eye Bank" className="h-16 w-auto object-contain" />
                  ) : r.to === "Jain Mission Trust" ? (
                    <img src={jainLogo} alt="Jain Mission Trust" className="h-16 w-auto object-contain" />
                  ) : r.to === "Vivekananda Education Society" ? (
                    <img src={vesLogo} alt="Vivekananda Education Society" className="h-16 w-auto object-contain" />
                  ) : r.to === "Adinath Jain Trust" ? (
                    <img src={adinathLogo} alt="Adinath Jain Trust" className="h-16 w-auto object-contain" />
                  ) : (
                    <Award size={20} className="text-[var(--brand-gold)]" />
                  )}
                  <div className="mt-3 text-[10px] uppercase tracking-wider text-foreground/55">{r.tier}</div>
                  <div className="mt-1 text-xs text-[var(--brand-brown)] leading-tight">{r.to}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GALLERY ───────────────────────── */

function Gallery() {
  const [cat, setCat] = useState<GalleryCat>("All");
  const [active, setActive] = useState<number | null>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);

  return (
    <section id="gallery" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Gallery</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Moments from the field.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {galleryCats.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                    cat === c
                      ? "bg-[var(--brand-brown)] text-white"
                      : "bg-background border border-border text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-14 columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
        >
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.button
                layout
                key={`${g.caption}-${i}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                onClick={() => setActive(i)}
                className={`mb-5 w-full break-inside-avoid relative overflow-hidden rounded-2xl bg-gradient-to-br ${g.tone} group block`}
                style={{ height: g.h }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">
                  <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/70">{g.cat}</div>
                  <div className="mt-1 sm:mt-2 font-display text-sm sm:text-xl text-white leading-snug">{g.caption}</div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/20" />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button onClick={() => setActive(null)} aria-label="Close" className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-2xl aspect-[4/3] rounded-3xl bg-gradient-to-br ${items[active].tone}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-10">
                <div className="text-xs tracking-[0.2em] uppercase text-white/70">{items[active].cat}</div>
                <div className="mt-2 font-display text-xl sm:text-3xl text-white">{items[active].caption}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ───────────────────────── DONATE ───────────────────────── */

function Donate() {
  return (
    <section id="donate" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <Reveal>
            <div className="relative h-full rounded-3xl bg-[var(--brand-green)] text-white p-7 sm:p-10 lg:p-14 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-gold)] font-medium">Donate</p>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-white">
                Your contribution becomes someone's tomorrow.
              </h2>
              <p className="mt-6 text-white/85 max-w-md">
                Every rupee funds a scholarship, a surgery, a meal, a shelter. Direct bank transfer keeps overheads near zero.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border p-7 sm:p-10 lg:p-14 bg-[var(--surface)]">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Bank A/c Details</p>
              <h3 className="mt-3 font-display text-2xl text-[var(--brand-brown)]">Direct bank transfer</h3>
              <dl className="mt-8 divide-y divide-border">
                {[
                  ["Account Name", "Sohan Kanwar Mangilal Tater Charitable Trust"],
                  ["Bank Name", "[To be updated]"],
                  ["Account Number", "[To be updated]"],
                  ["IFSC", "[To be updated]"],
                ].map(([k, v]) => (
                  <div key={k} className="py-4 flex justify-between gap-6">
                    <dt className="text-sm text-foreground/55 uppercase tracking-wider">{k}</dt>
                    <dd className="text-sm font-medium text-[var(--brand-brown)] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs text-foreground/55">
                For 80G receipts and queries, please reach out via the contact section below.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */

function About() {
  return (
    <section id="about" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14 lg:space-y-24">
        {/* Story */}
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Our Story</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">A quiet legacy of service.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-6 text-lg text-foreground/75 leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                Established in <span className="text-[var(--brand-brown)] font-medium">2011</span>, the Sohan Kanwar Mangilal Tater Charitable Trust is headquartered in Chennai, Tamil Nadu, with deep roots in Merta City, Rajasthan.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Across more than a decade, the Trust has worked steadily across two states - funding scholarships, building healthcare infrastructure, supporting maternity care, and standing alongside communities, animals, and institutions in need.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The work is named for the families behind it but belongs to the people it serves: students, patients, mothers, elders, and the silent rural backbone of India.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { tag: "Mission", title: "To uplift lives through education, healthcare and compassion - without distinction.", tone: "bg-background" },
            { tag: "Vision", title: "A society where opportunity, dignity and care are within reach of every individual.", tone: "bg-[var(--brand-brown)] text-white" },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.1}>
              <div className={`${c.tone} rounded-3xl p-6 sm:p-10 lg:p-14 border border-border h-full`}>
                <div className={`text-xs tracking-[0.22em] uppercase font-medium ${i ? "text-[var(--brand-gold)]" : "text-[var(--brand-green)]"}`}>
                  {c.tag}
                </div>
                <p className={`mt-6 font-display text-2xl lg:text-3xl leading-snug ${i ? "text-white" : "text-[var(--brand-brown)]"}`}>
                  {c.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Values */}
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Core Values</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">What we hold close.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="bg-background rounded-2xl border border-border p-5 h-full hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-[var(--brand-brown)]">{title}</h3>
                    <p className="mt-1 text-sm text-foreground/65">{text}</p>
                  </div>
                  <div className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--brand-gold)]/40 text-[var(--brand-brown)]">
                    <Icon size={18} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */

function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">Contact</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-3xl">
            We'd love to hear from you.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Address", text: "No 52, Maddox Street, 1st Floor, Vepery, Chennai 600007" },
                { icon: Phone, title: "Phone", text: "+91 44 4201 0933" },
                { icon: Mail, title: "Email", text: "smtaterctrust@gmail.com" },
                { icon: Clock, title: "Office hours", text: "Mon - Sat · 10:00 AM – 6:00 PM" },
              ].map((c) => (
                <div key={c.title} className="flex gap-5">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-[var(--brand-gold)]/40 inline-flex items-center justify-center text-[var(--brand-brown)]">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-foreground/55">{c.title}</div>
                    <div className="mt-1 text-base sm:text-lg text-[var(--brand-brown)] font-medium">{c.text}</div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-foreground/55 pt-4 border-t border-border">
                We typically respond within 2 business days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://maps.app.goo.gl/HB8H5LreVFancPEFA"
              target="_blank"
              rel="noreferrer"
              className="block h-[280px] sm:h-[420px] rounded-3xl overflow-hidden border border-border relative bg-[var(--surface)] group"
            >
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=1st+Floor,+52,+Maddox+St,+Periamet,+Periyamedu,+Choolai,+Chennai,+Tamil+Nadu+600007&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-[var(--brand-brown)] shadow-lg inline-flex items-center gap-1.5">
                Open in Maps <ArrowUpRight size={14} />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  useEffect(() => {}, []);
  return (
    <footer className="bg-[var(--brand-brown)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo2} alt="Trust" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-white text-lg leading-tight">Sohan Kanwar Mangilal Tater</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/50">Charitable Trust</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/65 max-w-sm">
            Serving humanity since 2011 across Tamil Nadu and Rajasthan.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)]">Navigate</div>
          <ul className="mt-5 space-y-2 text-sm">
            {["Home", "Impact", "Our Work", "Gallery", "Donate", "About"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-white transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)]">Reach</div>
          <ul className="mt-5 space-y-2 text-sm">
            <li>Chennai, Tamil Nadu</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Sohan Kanwar Mangilal Tater Charitable Trust. All rights reserved.</div>
          <div>Estd. 2011</div>
        </div>
      </div>
    </footer>
  );
}

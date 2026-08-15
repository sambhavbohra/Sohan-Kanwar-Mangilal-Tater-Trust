import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAsset from "@/assets/logo2.png";

const links = [
  { href: "#impact", label: "Impact" },
  { href: "#recognition", label: "Partners" },
  { href: "#about", label: "Our Story" },
  { href: "#gallery", label: "Gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("impact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_30px_-20px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoAsset} alt="Trust logo" className="h-11 w-11 rounded-full object-cover" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-semibold text-[var(--brand-brown)] text-[19px]">
              Sohan Kanwar Mangilal Tater
            </div>
            <div className="tracking-[0.18em] uppercase text-muted-foreground text-[12px]">
              Charitable Trust · Estd. 2011
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.href.slice(1)
                    ? "text-[var(--brand-green)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--brand-green)]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-[var(--brand-brown)]/20 px-5 py-2.5 text-sm font-medium text-[var(--brand-brown)] transition hover:bg-[var(--brand-brown)]/5"
          >
            Contact us
          </a>
          <a
            href="#donate"
            className="inline-flex items-center rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-lg"
          >
            Donate
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2.5 -mr-2.5 text-foreground touch-manipulation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <ul className="px-6 py-6 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-3 text-lg font-display text-[var(--brand-brown)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full border border-[var(--brand-brown)]/20 px-5 py-2.5 text-sm font-medium text-[var(--brand-brown)]"
                >
                  Contact us
                </a>
                <a
                  href="#donate"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-sm font-medium text-white"
                >
                  Donate
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

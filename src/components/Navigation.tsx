import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["About", "Projects", "Experience", "Contact"];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? "shadow-lg shadow-background/50" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
          SD
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-t border-border px-6 pb-4"
        >
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left py-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;

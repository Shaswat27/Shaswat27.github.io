import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-glow-indigo/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-glow-blue/10 blur-3xl"
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-gradient">
            Shaswat Datta
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            HBS MBA · IIT Kharagpur · AI Product & Strategy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow-blue)/0.4)]"
          >
            View Projects <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="./Datta.Shaswat_CV.pdf"
            className="flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

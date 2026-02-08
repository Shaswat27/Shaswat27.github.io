import { motion } from "framer-motion";
import { User } from "lucide-react";

const techStack = [
  "Python", "TypeScript", "OpenAI", "Claude", "SQL", "Supabase", "Figma", "Lovable", "Vercel"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Headshot placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl glass glow-border flex items-center justify-center overflow-hidden">
              <User size={80} className="text-muted-foreground/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <span className="absolute bottom-4 text-xs text-muted-foreground font-mono">headshot.jpg</span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Building at the intersection of AI & Product
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From engineering at IIT Kharagpur to venture capital at A91 Partners, my journey has been about understanding how technology creates value. At HBS, I'm deepening my lens on go-to-market strategy, product-led growth, and the emerging AI stack.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I vibe-code production-grade tools, advise early-stage startups on product strategy, and obsess over turning complex AI capabilities into intuitive user experiences.
            </p>
          </div>
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 overflow-hidden"
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase text-center mb-6">Tech Stack</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex gap-4 marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="shrink-0 px-5 py-2.5 rounded-lg glass glow-border text-sm font-mono text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

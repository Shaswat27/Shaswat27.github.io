import { motion } from "framer-motion";
import { User } from "lucide-react";

const techStack = [
  "Python", "TypeScript", "OpenAI", "Claude", "Gemini", "Supabase", "Figma", "Lovable", "Vercel", "Node.js", "PostgreSQL", "Zapier" 
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
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-xl glass glow-border overflow-hidden">
              <img src="./headshot.JPEG" alt="Shaswat's Headshot" className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              {/* <span className="absolute bottom-4 text-xs text-muted-foreground font-mono">headshot.jpg</span> */}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Product, Pitch, and the Playbook
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Hi, I’m Shaswat! I’m a builder who loves untangling problems where technology meets the real world. My journey combines an Electronics and CS foundation from IIT Kharagpur with a strategic lens from my time in VC, Boston Consulting Group, and now at Harvard Business School.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I’m most at home moving between worlds – building products like SignalLens in the morning and mapping frictionless user journeys for GenAI tools at Posh AI by the afternoon. I carry this builder’s lens into the boardroom. My time in VC was a masterclass in product strategy, partnering with CXOs to align technical roadmaps with growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When not in front of a screen, you’ll find me playing piano or hiking.
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
          <div className="relative py-10">
          {/* The Grid Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center justify-center px-5 py-4 rounded-xl glass glow-border text-sm font-mono text-secondary-foreground text-center transition-transform hover:scale-105"
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

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shaswat-datta/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Shaswat27", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/_shaswat", label: "X" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8">
            Let's Talk Product
          </h2>

          <a
            href="mailto:sdatta@mba2026.hbs.edu"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--glow-blue)/0.4)] mb-12"
          >
            <Mail size={16} /> sdatta@mba2026.hbs.edu
          </a>

          <div className="flex items-center justify-center gap-4 mb-12">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg glass glow-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shaswat Datta. Built with AI.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Posh AI (Series B)",
    role: "Product Strategy",
    period: "2024",
    description:
      "Led GTM strategy for enterprise conversational AI platform. Scaled two new verticals from 0→1, driving $2M+ in pipeline within 6 months through strategic product positioning and partnership development.",
  },
  {
    company: "A91 Partners (VC)",
    role: "Investments & Product",
    period: "2021 – 2023",
    description:
      "Supported $145M+ in investments across SaaS and consumer tech. Built product roadmap frameworks for portfolio companies and conducted deep-dive due diligence on AI-native startups.",
  },
  {
    company: "Boston Consulting Group",
    role: "Strategy Consulting",
    period: "2019 – 2021",
    description:
      "Launched a HealthTech product from concept to market for a Fortune 500 client. Designed monetization models and go-to-market playbooks that generated $15M in Year 1 revenue.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Past Work
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Glowing dot */}
                <div className="absolute left-1.5 sm:left-2.5 top-1.5 w-4 h-4 rounded-full bg-primary glow-dot" />

                <div className="glass glow-border rounded-xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary mb-3">{exp.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

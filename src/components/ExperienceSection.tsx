import { motion } from "framer-motion";

interface Experience {
  company: string;
  url: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Harvard Business School",
    url: "https://www.hbs.edu/",
    role: "MBA",
    period: "2024 – 2026",
    description:
      "Conducting case research on enterprise AI adoption and impact on frontline workers. Stitching together frameworks to bridge the gap between AI capabilities and business impact.",
  },
  {
    company: "Posh AI (Series B)",
    url:"https://www.posh.ai/",
    role: "Product Strategy",
    period: "2024",
    description:
      "Led GTM strategy for enterprise conversational AI platform. Scaled new vertical from 0→1, driving $100k revenue in 10 weeks through product strategy and product-led GTM. Partnered with engineering and marketing to launch a genAI-based frontline training tool.",
  },
  {
    company: "A91 Partners (VC)",
    url:"https://www.a91partners.com/",
    role: "Investments & Product",
    period: "2021 – 2023",
    description:
      "Supported $145M+ in investments across SaaS and consumer tech. Built product roadmap frameworks, financial projections, and merger analysis for portfolio companies. Conducted customer interviews and deep-dive commercial and financial due diligence on tech-native startups.",
  },
  {
    company: "Boston Consulting Group",
    url:"https://www.bcg.com/",
    role: "Strategy Consulting",
    period: "2019 – 2021",
    description:
      "Launched a HealthTech product from concept to market for a national pharma giant. Designed monetization models, go-to-market playbooks, user personas, and feature roadmaps for the patient-doctor digital platform. Led a cross-functional team to scale the network to 10k+ doctors in 12 months.",
  },
  {
    company: "IIT Kharagpur",
    url:"https://www.iitkgp.ac.in/",
    role: "Electronics & Computer Science",
    period: "2014 – 2019",
    description:
      "Served as Computer Vision Lead for the Autonomous Ground Vehicle Team, producing deep learning research with over 100 citations. Spent time coding and building AI systems and did technical internships in robotic surgery vision (IHU Strasbourg) and workflow automation (Capital One).",
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
                    <h3 className="text-lg font-semibold text-foreground">
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
                      {exp.company}
                      </a>
                      </h3>
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

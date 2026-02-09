import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  bullets: string[];
  span?: string;
}

const projects: Project[] = [
  {
    title: "SignalLens",
    tagline: "SaaS product review analyzer powered by LLMs for actionable competitive intelligence.",
    bullets: [
      "Problem: Product teams drown in unstructured review data across platforms.",
      "Intervention: Built an LLM pipeline to extract sentiment themes and feature gaps at scale.",
      "Result: 10x faster competitive analysis with automated weekly insight reports.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "Project Alpha",
    tagline: "AI-powered workflow automation for early-stage VC deal sourcing.",
    bullets: [
      "Automated CRM enrichment using GPT-4 and web scraping.",
      "Reduced analyst screening time by 60%.",
      "Deployed on Vercel with Supabase backend.",
    ],
  },
  {
    title: "Project Beta",
    tagline: "Consumer health product leveraging conversational AI for patient onboarding.",
    bullets: [
      "Designed multi-turn dialogue flows with Claude.",
      "Integrated with EHR systems via FHIR APIs.",
      "Achieved 85% completion rate in user testing.",
    ],
  },
  {
    title: "Project Gamma",
    tagline: "Internal knowledge management tool using RAG for enterprise documentation.",
    bullets: [
      "Built semantic search over 50K+ internal docs.",
      "Reduced employee onboarding time by 40%.",
      "Integrated with Slack and Notion APIs.",
    ],
  },
  {
    title: "Project Delta",
    tagline: "Real-time analytics dashboard for monitoring ML model performance.",
    bullets: [
      "Visualized drift detection and inference latency.",
      "Enabled proactive model retraining alerts.",
      "Deployed with Next.js and Recharts.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Scalable Product Solutions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`glass glow-border rounded-2xl overflow-hidden ${project.span || ""}`}
            >
              {/* Media placeholder */}
              <div className="relative aspect-video bg-muted/30 flex items-center justify-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={20} className="text-primary ml-0.5" />
                </div>
                <span className="absolute bottom-3 right-3 text-xs font-mono text-muted-foreground">demo.mp4</span>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.tagline}</p>
                <ul className="space-y-2">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

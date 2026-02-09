import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  bullets: string[];
  media: string; // Path to your file in /public
  span?: string;
}

const projects: Project[] = [
  {
    title: "SignalLens",
    tagline: "An AI-driven \"Voice of the Customer\" engine that synthesizes raw reviews into prioritized Product & GTM roadmaps.",
    media: "/SignalLens_Upload.mp4",
    bullets: [
      "Problem: Product teams face a massive \"signal-to-noise\" gap in unstructured feedback, rendering customer sentiment data un-actionable.",
      "Intervention: Engineered a multi-stage pipeline using HDBSCAN clustering and LLM synthesis (Claude 3.5 & GPT-4o) to identify high-severity themes and feature gaps.",
      "Impact: Transforms 100+ raw Trustpilot reviews into an actionable \"Impact vs. Effort\" matrix in seconds, automating the \"last mile\" of competitive intelligence.",
    ],
    span: "md:col-span-2",
  },
  {
    title: "TermsLens",
    media: "/TermsLens_Upload.mp4",
    tagline: "An AI-native financial analyst that translates complex venture capital term sheets into actionable, strategic dashboards.",
    bullets: [
      "Problem: Founders face a high-stakes information asymmetry where dense legal prose (e.g., liquidation preferences) masks critical long-term dilution and governance risks.",
      "Intervention: Built a stateless LLM pipeline (Claude 3.5 & GPT-4o) with rigid JSON schema enforcement and a back-end to ensure privacy-first, in-memory processing.",
      "Impact: Converts static PDFs into dynamic Control & Governance and Cashflow visualizations in seconds, identifying critical triggers like anti-dilution and board shifts.",
    ],
  },
  {
    title: "Project Beta",
    media: "./og-image.png",
    tagline: "Consumer health product leveraging conversational AI for patient onboarding.",
    bullets: [
      "Designed multi-turn dialogue flows with Claude.",
      "Integrated with EHR systems via FHIR APIs.",
      "Achieved 85% completion rate in user testing.",
    ],
  },
  {
    title: "Project Gamma",
    media: "./og-image.png",
    tagline: "Internal knowledge management tool using RAG for enterprise documentation.",
    bullets: [
      "Built semantic search over 50K+ internal docs.",
      "Reduced employee onboarding time by 40%.",
      "Integrated with Slack and Notion APIs.",
    ],
  },
  {
    title: "Project Delta",
    media: "./og-image.png",
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
          {projects.map((project, i) => {
            const isVideo = project.media.endsWith(".mp4");

            return (
              <motion.div
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className={`glass glow-border rounded-2xl overflow-hidden flex flex-col ${project.span || ""}`}
              >
                {/* Updated Media Section */}
                <div className="relative w-full h-[250px] sm:h-[400px] bg-black/20 overflow-hidden border-b border-white/5 flex items-center justify-center">
                  {isVideo ? (
                    <video
                      autoPlay
                      playsInline
                      muted
                      loop
                      // Change to object-contain so the full dashboard is visible
                      className="max-w-full max-h-full object-contain"
                    >
                      <source src={project.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={project.media} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  
                  {/* The "Video" badge stays anchored to the container */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 z-10">
                    <span className="text-[10px] font-mono text-white/90 uppercase tracking-tighter">
                      {isVideo ? "Video Demo" : "Project Image"}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
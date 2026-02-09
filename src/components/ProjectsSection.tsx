import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  bullets: (string | React.ReactNode)[];
  media: string; // Path to your file in /public
  span?: string;
}

const projects: Project[] = [
  {
    title: "SignalLens",
    tagline: "An AI-driven \"Voice of the Customer\" engine that synthesizes raw reviews into prioritized Product & GTM roadmaps.",
    media: "/SignalLens_Upload.mp4",
    bullets: [
      <> <b>Problem:</b> Product teams face a massive "signal-to-noise" gap in unstructured feedback, rendering customer sentiment data unactionable.</>,
      <> <b>Product Decision:</b> Prioritized pipeline determinism over LLM creativity by anchoring the system in clustering and low-temperature extraction.</>,
      <> <b>Engineering:</b> Engineered a multi-stage pipeline using HDBSCAN clustering and LLM synthesis (Claude 3.5 & GPT-4o) to identify high-severity themes and feature gaps.</>,
      <> <b>Impact:</b> Transforms 100+ raw Trustpilot reviews into an actionable "Impact vs. Effort" matrix in seconds, automating the "last mile" of competitive intelligence.</>,
    ],
    span: "md:col-span-2",
  },
  {
    title: "TermsLens",
    media: "/TermsLens_Upload.mp4",
    tagline: "An AI-native financial analyst that translates complex venture capital term sheets into actionable, strategic dashboards.",
    bullets: [
      <> <b>Problem:</b> Founders face a high-stakes information asymmetry where dense legal prose (e.g., liquidation preferences) masks critical long-term dilution and governance risks.</>,
      <> <b>Product Decision:</b> Sacrificed user accounts and history in favor of a zero-retention, in-memory architecture; for founders, data privacy is a higher-value feature.</>,
      <> <b>Engineering:</b> Built a stateless LLM pipeline (Claude 3.5 & GPT-4o) with rigid JSON schema enforcement and a back-end to ensure privacy-first, in-memory processing.</>,
      <> <b>Impact:</b> Converts static PDFs into dynamic control & governance and cashflow visualizations in seconds, identifying critical triggers like anti-dilution and board shifts.</>,
    ],
  },
  {
    title: "AI Product-Led Growth Engine",
    media: "/PLG.png",
    tagline: "An automated GTM funnel and digital landing page designed to scale GenAI adoption across the SMB \"long tail\".",
    bullets: [
      <> <b>Product Discovery:</b> Synthesized pain points from deep-dive interviews with SMB ICPs to adapt complex enterprise GenAI products into a friction-free, plug-and-play suite.</>,
      <> <b>PLG Funnel:</b> Built the conversion engine end-to-end, integrating auto qualification and lead-routing to replace high-touch sales with a scalable, low-cost motion.</>,
      <> <b>Onboarding Strategy:</b> Designed a modular, 'template-first' user journey that reduced activation time and engineering overhead.</>,
      <> <b>Impact:</b> Accelerated a new market vertical from $0 to $100K ARR in 10 weeks, doubling the baseline win-rate by automating the "time-to-value" journey for SMBs.</>,
    ],
  },
  {
    title: "Digital Clinic-in-a-Box",
    media: "/Telehealth.jpg",
    tagline: "An end-to-end digital practice management suite designed to transition traditional healthcare providers into a digital-first ecosystem.",
    bullets: [
      <> <b>Product Discovery:</b> Segmented a fragmented provider market to define high-value user personas and feature requirements for a comprehensive 'clinic-in-a-box' SaaS platform.</>,
      <> <b>Product Decision:</b> Prioritized Rx customization and consent management over clinical decision support; identified administrative flexibility as the primary adoption driver.</>,
      <> <b>Engineering:</b> Led cross-functional engineering and design squads to scope and ship a modular suite including digital EMR, telemedicine, and automated billing engines.</>,
      <> <b>Impact:</b> Architected the GTM strategy and provider onboarding flows to scale the platform from zero to 10k active medical professionals.</>,
    ],
  },
  {
    title: "Vision and Sensor Systems for Autonomous Vehicles",
    media: "/driverless.png",
    tagline: "A full-stack perception engine for autonomous robots, integrating deep learning architectures with multi-sensor fusion for real-time mapping.",
    bullets: [
      <> <b>Problem:</b> Robot navigation in unstructured environments requires intelligent perception and precise localization, often hindered by sensor noise and lighting conditions.</>,
      <> <b>Product Decision:</b> Prioritized deterministic state consistency over stochastic models; identified that for safety-critical robotics, explainability is more vital.</>,
      <> <b>Engineering:</b> Architected a multi-modal system with CNN-based object detection and an Extended Kalman Filter for real-time ego-motion estimation and mapping.</>,
      <> <b>Impact:</b> Led the AI development for the Autonomous Ground Vehicle Team at IIT Kharagpur; research cited 100+ times in the robotics community.</>,
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
                        <span className="leading-relaxed">
                          {b}
                        </span>
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
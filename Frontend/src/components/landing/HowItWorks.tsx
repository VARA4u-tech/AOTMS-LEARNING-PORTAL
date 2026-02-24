import { motion } from "framer-motion";
import {
  UserPlus,
  BookMarked,
  Video,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Create Profile",
    description:
      "Create your account and personalize your learning profile in minutes.",
  },
  {
    icon: BookMarked,
    step: "02",
    title: "Choose Your Course",
    description: "Browse and enroll in courses that match your career goals.",
  },
  {
    icon: Video,
    step: "03",
    title: "Attend Classes",
    description: "Join live sessions or watch recorded lectures at your pace.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Practice Mock Tests",
    description: "Sharpen your skills with real-world practice assessments.",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Track Your Rank",
    description: "Complete exams and climb the leaderboard to stand out.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#E9E9E9] relative overflow-hidden">
      {/* Orange gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#FD5A1A]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[45%] bg-[#FD5A1A]/[0.05] rounded-full blur-[80px]" />
      </div>

      <div className="container-width px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD5A1A]/10 text-[#FD5A1A] mb-5">
            <span className="text-sm font-semibold tracking-wide uppercase">
              Your Learning Journey
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 leading-tight">
            FROM ENROLLMENT TO{" "}
            <span className="text-[#FD5A1A]">EMPLOYMENT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Your journey from enrollment to employment in 5 simple steps
          </p>
        </motion.div>

        {/* Steps - Responsive layout */}
        <div className="relative">
          {/* Connecting line - visible on md+ */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-[#FD5A1A]/20 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-[#FD5A1A] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 w-[72px] h-[72px] md:w-[80px] md:h-[80px] rounded-full bg-white border-[3px] border-[#000000] flex items-center justify-center mb-5 shadow-[3px_3px_0px_0px_rgba(253,90,26,1)] group-hover:shadow-[5px_5px_0px_0px_rgba(253,90,26,1)] group-hover:-translate-y-1 transition-all duration-300">
                    <div className="w-[56px] h-[56px] md:w-[62px] md:h-[62px] rounded-full bg-[#FD5A1A] flex items-center justify-center">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Step number label */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FD5A1A] text-white text-xs font-bold mb-3 border-2 border-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    STEP {step.step}
                  </span>

                  {/* Content card */}
                  <div className="bg-white rounded-xl border-2 border-[#000000] p-4 md:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[5px_5px_0px_0px_rgba(253,90,26,1)] group-hover:-translate-y-1 transition-all duration-300 w-full">
                    <h3 className="font-heading text-base md:text-lg text-foreground mb-2 group-hover:text-[#FD5A1A] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Mobile connecting arrow (between cards) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-2 sm:hidden">
                    <svg
                      className="w-5 h-5 text-[#FD5A1A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

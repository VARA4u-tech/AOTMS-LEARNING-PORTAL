import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Briefcase,
  GraduationCap,
  Clock,
  HeadphonesIcon,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-Ready Curriculum",
    description: "Learn skills that employers actually need.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "10+ years of real industry experience.",
  },
  {
    icon: Briefcase,
    title: "100% Placement Support",
    description: "2000+ successful placements.",
  },
  {
    icon: Trophy,
    title: "Hands-On Projects",
    description: "Build real-world portfolio projects.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Weekend batches available.",
  },
  {
    icon: HeadphonesIcon,
    title: "Lifetime Support",
    description: "Guidance after course completion.",
  },
];

const stats = [
  { value: "2000+", label: "Students Placed" },
  { value: "85%", label: "Placement Rate" },
  { value: "50+", label: "Hiring Partners" },
  { value: "4.8★", label: "Student Rating" },
];

const WhyAOTMS = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-[#0075CF]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[#0075CF]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="container-width px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0075CF]/10 text-[#0075CF] mb-5">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Why Students Love Us
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 leading-tight">
            Online Courses & Professional Training{" "}
            <span className="text-[#0075CF]">in Vijayawada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Transform your career with Vijayawada's most trusted LMS platform
            for skill-based learning and placement support.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6 mb-12 md:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group relative bg-white rounded-2xl border-2 border-[#000000] p-4 md:p-6 text-center shadow-[3px_3px_0px_0px_rgba(0,117,207,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,117,207,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all duration-300"
            >
              <div className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#0075CF] mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-[#000000] p-5 md:p-7 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,117,207,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300">
                {/* Top blue accent bar */}
                <div className="absolute top-0 left-4 right-4 h-[3px] bg-[#0075CF] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#0075CF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-2 group-hover:text-[#0075CF] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-4 flex items-center gap-1.5 text-[#0075CF] opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Learn more
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAOTMS;

import { motion } from "framer-motion";
import {
  Video,
  Play,
  ShieldCheck,
  Trophy,
  FileSearch,
  BarChart3,
  Headphones,
  MonitorPlay,
  ClipboardList,
  Medal,
  FileText,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: Video,
    secondaryIcon: Headphones,
    title: "Live Classes",
    description:
      "Interactive sessions with industry experts via Zoom, Google Meet & more",
    theme: "blue" as const,
  },
  {
    icon: MonitorPlay,
    secondaryIcon: Play,
    title: "Recorded Videos",
    description: "Access HD course content anytime, anywhere on any device",
    theme: "orange" as const,
  },
  {
    icon: ShieldCheck,
    secondaryIcon: ClipboardList,
    title: "Secure Exams",
    description:
      "AI-proctored assessments with integrity & anti-cheating measures",
    theme: "blue" as const,
  },
  {
    icon: Trophy,
    secondaryIcon: Medal,
    title: "Leaderboard",
    description: "Compete with peers and track your ranking in real-time",
    theme: "orange" as const,
  },
  {
    icon: FileSearch,
    secondaryIcon: FileText,
    title: "ATS Resume Score",
    description: "Optimize your resume for job applications with AI analysis",
    theme: "blue" as const,
  },
  {
    icon: BarChart3,
    secondaryIcon: LineChart,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics",
    theme: "orange" as const,
  },
];

const themeStyles = {
  blue: {
    iconBg: "bg-[#0075CF]",
    shadow: "shadow-[4px_4px_0px_0px_rgba(0,117,207,1)]",
    hoverShadow: "hover:shadow-[6px_6px_0px_0px_rgba(0,117,207,1)]",
    textHover: "group-hover:text-[#0075CF]",
    accentColor: "text-[#0075CF]",
    barBg: "bg-[#0075CF]",
    secondaryBg: "bg-[#0075CF]/10",
    secondaryText: "text-[#0075CF]",
  },
  orange: {
    iconBg: "bg-[#FD5A1A]",
    shadow: "shadow-[4px_4px_0px_0px_rgba(253,90,26,1)]",
    hoverShadow: "hover:shadow-[6px_6px_0px_0px_rgba(253,90,26,1)]",
    textHover: "group-hover:text-[#FD5A1A]",
    accentColor: "text-[#FD5A1A]",
    barBg: "bg-[#FD5A1A]",
    secondaryBg: "bg-[#FD5A1A]/10",
    secondaryText: "text-[#FD5A1A]",
  },
};

const KeyFeatures = () => {
  return (
    <section
      id="features"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, #0a0f1e 0%, #0d1525 50%, #0f1a2e 100%)",
      }}
    >
      {/* Circuit-line grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,117,207,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,117,207,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Brand-colored ambient radials */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50%] h-[60%] bg-[#0075CF]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[#FD5A1A]/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#0075CF]/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="container-width px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-[3px] w-8 bg-[#0075CF] rounded-full" />
            <span className="text-sm font-semibold tracking-wider uppercase text-[#0075CF]">
              Platform Features
            </span>
            <span className="h-[3px] w-8 bg-[#FD5A1A] rounded-full" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-tight">
            LIVE CLASSES, EXAMS & MOCK TESTS ON{" "}
            <br className="hidden md:block" />
            <span className="gradient-text-brand">AOTMS LMS</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Everything you need to succeed in your learning journey — from live
            sessions to career tools
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const style = themeStyles[feature.theme];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:bg-white/[0.10] hover:border-white/20 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-[3px] ${style.barBg} rounded-b-full`}
                  />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${style.iconBg} flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      <feature.icon
                        className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    {/* Secondary Icon */}
                    <div
                      className={`absolute -bottom-2 left-10 sm:left-12 w-8 h-8 rounded-lg bg-white/10 border border-white/20 shadow-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300`}
                    >
                      <feature.secondaryIcon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${style.secondaryText}`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`font-heading text-lg sm:text-xl md:text-2xl text-white mb-3 uppercase tracking-tight ${style.textHover} transition-colors duration-300`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div
                    className={`mt-5 flex items-center gap-2 ${style.accentColor} opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300`}
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Explore
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-16 lg:mt-20 bg-[#000000] rounded-2xl border-2 border-[#000000] p-6 md:p-8 lg:p-10"
        >
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            {[
              {
                value: "24/7",
                label: "Platform Access",
                color: "text-[#0075CF]",
              },
              { value: "HD", label: "Video Quality", color: "text-[#FD5A1A]" },
              { value: "100%", label: "Secure Exams", color: "text-[#0075CF]" },
              {
                value: "Real-time",
                label: "Progress Updates",
                color: "text-[#FD5A1A]",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading ${stat.color} mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;

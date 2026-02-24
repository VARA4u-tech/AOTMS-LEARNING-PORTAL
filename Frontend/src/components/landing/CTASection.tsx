import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Bold gradient background: Blue → Orange via Black */}
      <div className="absolute inset-0 bg-[#000000]">
        {/* Large blue glow left */}
        <div className="absolute top-0 left-0 w-[60%] h-full bg-[#0075CF]/30 blur-[150px] rounded-full" />
        {/* Large orange glow right */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[80%] bg-[#FD5A1A]/20 blur-[150px] rounded-full" />
        {/* Center intersection glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[50%] bg-[#0075CF]/10 blur-[100px] rounded-full" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-width px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-[#FD5A1A]" />
            <span className="text-sm font-semibold text-white/80 tracking-wide uppercase">
              Start Your Journey Today
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-tight">
            CAREER-FOCUSED LEARNING PLATFORM FOR{" "}
            <br className="hidden md:block" />
            <span className="text-[#0075CF]">STUDENTS</span> &{" "}
            <span className="text-[#FD5A1A]">PROFESSIONALS</span> IN VIJAYAWADA
          </h2>

          {/* Subtitle */}
          <p className="text-white/50 mb-10 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of students across Vijayawada and beyond who are
            mastering industry-relevant skills and building successful careers
            with AOTMS LMS.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="accent"
              size="xl"
              className="gap-2 group text-base font-bold px-8 py-4 border-2 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300"
              onClick={() => navigate("/auth")}
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              className="gap-2 text-base font-bold px-8 py-4 bg-white text-[#000000] border-2 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,117,207,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,117,207,1)] hover:-translate-y-1 hover:-translate-x-1 hover:bg-white transition-all duration-300"
              onClick={() => navigate("/courses")}
            >
              <BookOpen className="w-5 h-5" />
              Explore Courses
            </Button>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-8 border-t border-white/10"
          >
            {[
              { label: "Students Trained", value: "2000+" },
              { label: "Placement Rate", value: "85%" },
              { label: "Expert Instructors", value: "50+" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-heading text-xl md:text-2xl text-white mb-0.5">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-white/40 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

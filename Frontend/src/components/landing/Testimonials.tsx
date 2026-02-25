import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Krishnan",
    course: "Full Stack Development",
    feedback:
      "AOTMS transformed my career. The live classes and hands-on projects helped me land my dream job at a top tech company.",
    avatar: "AK",
    rating: 5,
  },
  {
    name: "Meera Nair",
    course: "Data Science",
    feedback:
      "The curriculum is perfectly aligned with industry needs. The ATS resume scoring feature was a game-changer for my job search.",
    avatar: "MN",
    rating: 5,
  },
  {
    name: "Sanjay Gupta",
    course: "Cloud Computing",
    feedback:
      "Excellent instructors and comprehensive course material. The secure exam system gave me confidence in my certifications.",
    avatar: "SG",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    course: "UI/UX Design",
    feedback:
      "The flexible batch timings allowed me to learn while working. The mentorship even after course completion was invaluable.",
    avatar: "LD",
    rating: 5,
  },
  {
    name: "Ravi Teja",
    course: "DevOps & Cloud",
    feedback:
      "From zero coding knowledge to a cloud engineer in 6 months. AOTMS provided the best structured learning path.",
    avatar: "RT",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    course: "Python & AI",
    feedback:
      "The leaderboard feature kept me motivated. Competing with peers while learning made the whole experience exciting and productive.",
    avatar: "AS",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, #fff8f3 0%, #ffffff 40%, #fffaf6 100%)",
      }}
    >
      {/* Micro dot-grid texture (orange tint) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='0.8' fill='%23FD5A1A' fill-opacity='0.12'/%3E%3C/svg%3E")`,
          backgroundSize: "22px 22px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[5%] w-[50%] h-[50%] bg-[#FD5A1A]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-[#0075CF]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] w-[30%] h-[30%] bg-[#FD5A1A]/[0.03] rounded-full blur-[80px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0075CF]/10 text-[#0075CF] mb-5">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 leading-tight">
            STUDENT <span className="text-[#0075CF]">SUCCESS STORIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Hear from our students who have transformed their careers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-[#000000] p-5 md:p-6 lg:p-7 shadow-[3px_3px_0px_0px_rgba(0,117,207,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,117,207,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
                {/* Blue accent bar */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#0075CF] rounded-b-full" />

                {/* Quote icon */}
                <div className="w-10 h-10 rounded-lg bg-[#0075CF]/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-[#0075CF]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#FD5A1A] fill-[#FD5A1A]"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  "{testimonial.feedback}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t-2 border-[#E9E9E9]">
                  <div className="w-11 h-11 rounded-full bg-[#0075CF] flex items-center justify-center text-sm font-bold text-white border-2 border-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading text-base text-foreground group-hover:text-[#0075CF] transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="text-xs font-semibold text-[#0075CF]">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

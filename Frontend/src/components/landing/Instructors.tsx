import { motion } from "framer-motion";

const instructors = [
  {
    name: "Dr. Rajesh Kumar",
    expertise: "Full Stack Development",
    experience: "15+ Years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Menon",
    expertise: "Data Science & AI",
    experience: "12+ Years",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Amit Sharma",
    expertise: "Cloud & DevOps",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sneha Reddy",
    expertise: "UI/UX Design",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const Instructors = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#E9E9E9] relative overflow-hidden">
      {/* Orange ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[10%] w-[40%] h-[50%] bg-[#FD5A1A]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[40%] bg-[#FD5A1A]/[0.05] rounded-full blur-[80px]" />
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
              Our Instructors
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-4 leading-tight">
            LEARN FROM <span className="text-[#FD5A1A]">THE BEST</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Our instructors bring real-world experience from top tech companies
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border-2 border-[#000000] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(253,90,26,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Experience badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-[#FD5A1A] text-white text-xs font-bold border-2 border-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {instructor.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  {/* Orange top accent */}
                  <div className="w-10 h-[3px] bg-[#FD5A1A] rounded-full mb-3 group-hover:w-full transition-all duration-500" />

                  <h3 className="font-heading text-lg md:text-xl text-foreground mb-1 group-hover:text-[#FD5A1A] transition-colors duration-300">
                    {instructor.name}
                  </h3>
                  <p className="text-[#FD5A1A] font-semibold text-sm mb-1">
                    {instructor.expertise}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {instructor.experience} Experience
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;

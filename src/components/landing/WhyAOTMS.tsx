import { motion } from "framer-motion";

const stats = [
  {
    number: 1,
    percentage: "95%",
    title: "Course Completion Rate",
    description: "Our students complete courses with high engagement and retention through interactive learning",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
    borderColor: "border-primary",
  },
  {
    number: 2,
    percentage: "89%",
    title: "Job Placement Success",
    description: "Graduates securing positions in top companies within 3 months of course completion",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
    borderColor: "border-accent",
  },
  {
    number: 3,
    percentage: "92%",
    title: "Student Satisfaction",
    description: "Learners rate their experience as excellent with our expert instructors and curriculum",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    borderColor: "border-amber-500",
  },
];

const WhyAOTMS = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              Why
              <br />
              Choose
              <br />
              <span className="text-accent">AOTMS?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl"
            >
              The numbers speak for themselves.
            </motion.p>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-5">
                  {/* Number Circle */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${stat.bgColor} ${stat.borderColor} border-2 flex items-center justify-center ${stat.textColor} font-bold text-xl md:text-2xl`}>
                      {stat.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-foreground text-lg md:text-xl font-semibold mb-1">
                      <span className={stat.textColor}>{stat.percentage}</span> {stat.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAOTMS;

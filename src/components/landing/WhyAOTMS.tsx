import { motion } from "framer-motion";
import { Monitor, User, Search, Pencil, List } from "lucide-react";
import logoImage from "@/assets/logo.png";

const icons = [
  { icon: List, position: { x: -140, y: -60 } },
  { icon: Monitor, position: { x: -80, y: -120 } },
  { icon: User, position: { x: 0, y: -150 } },
  { icon: Search, position: { x: 80, y: -120 } },
  { icon: Pencil, position: { x: 140, y: -60 } },
];

const features = [
  {
    number: "01",
    title: "Live Classes",
    description: "Interactive sessions with industry experts for real-time learning",
    gradient: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/30",
  },
  {
    number: "02",
    title: "Digital Resources",
    description: "Access comprehensive study materials and recorded lectures anytime",
    gradient: "from-cyan-500 to-teal-500",
    shadowColor: "shadow-cyan-500/30",
  },
  {
    number: "03",
    title: "Career Growth",
    description: "Job placement support and resume optimization for your success",
    gradient: "from-green-500 to-emerald-500",
    shadowColor: "shadow-green-500/30",
  },
];

const WhyAOTMS = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-width">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose <span className="text-accent">AOTMS?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of learning with our innovative platform
          </p>
        </motion.div>

        {/* Semi-circular Fan Layout */}
        <div className="relative flex justify-center mb-16">
          <div className="relative h-[280px] md:h-[350px] lg:h-[400px] w-full max-w-[600px]">
            
            {/* Fan Petals */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
              {icons.map((item, index) => {
                const angles = [-60, -30, 0, 30, 60];
                const angle = angles[index];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="absolute cursor-target"
                    style={{
                      transformOrigin: 'center bottom',
                      transform: `rotate(${angle}deg)`,
                      bottom: '80px',
                      left: '-40px',
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-28 md:w-24 md:h-32 lg:w-28 lg:h-36 bg-card rounded-t-full shadow-lg border border-border/30 flex items-start justify-center pt-4 md:pt-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <motion.div
                        style={{ transform: `rotate(${-angle}deg)` }}
                        className="text-primary"
                      >
                        <item.icon className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10" strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Circle with Rotating Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            >
              <div className="relative">
                {/* Animated dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] md:inset-[-25px] lg:inset-[-30px] rounded-full border-2 border-dashed border-primary/40"
                />
                
                {/* Colored dots on ring */}
                {[0, 72, 144, 216, 288].map((deg, i) => {
                  const colors = ['bg-pink-500', 'bg-cyan-500', 'bg-green-500', 'bg-amber-500', 'bg-purple-500'];
                  const sizes = [100, 110, 120, 130, 140];
                  return (
                    <motion.div
                      key={deg}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                      className={`absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${colors[i]} shadow-md`}
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-${sizes[i % 5]}%)`,
                      }}
                    />
                  );
                })}

                {/* Inner white circle with logo */}
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-card shadow-xl border border-border flex flex-col items-center justify-center">
                  <img 
                    src={logoImage} 
                    alt="AOTMS Logo" 
                    className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 object-contain mb-1" 
                  />
                  <p className="text-sm md:text-base lg:text-lg font-semibold text-foreground tracking-wide">AOTMS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Spacer for circle overflow */}
        <div className="h-20 md:h-24 lg:h-28" />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group cursor-target"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  {/* Gradient Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg ${feature.shadowColor}`}
                  >
                    <span className="text-white font-bold text-lg md:text-xl">{feature.number}</span>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-foreground text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {feature.description}
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

export default WhyAOTMS;

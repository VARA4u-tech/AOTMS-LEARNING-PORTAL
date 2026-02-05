import { motion } from "framer-motion";
import { UserPlus, BookMarked, Video, ClipboardCheck, Trophy } from "lucide-react";
import roadImage from "@/assets/road.png";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up & Create Profile",
    description: "Create your account and personalize your learning profile",
    color: "bg-orange-500",
  },
  {
    icon: BookMarked,
    step: "02",
    title: "Choose Your Course",
    description: "Browse and enroll in courses that match your goals",
    color: "bg-yellow-500",
  },
  {
    icon: Video,
    step: "03",
    title: "Attend Classes",
    description: "Join live sessions or watch recorded lectures",
    color: "bg-green-500",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Practice Mock Tests",
    description: "Sharpen your skills with practice assessments",
    color: "bg-cyan-500",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Track Your Rank",
    description: "Complete exams and climb the leaderboard",
    color: "bg-pink-500",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background-alt overflow-hidden">
      <div className="container-width px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            YOUR LEARNING JOURNEY
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your journey from enrollment to employment in 5 simple steps
          </p>
        </motion.div>
      </div>

      {/* Desktop/Tablet Road Layout - Full Width */}
      <div className="hidden md:block relative w-full">
        <div className="relative w-full">
          {/* Road Image - Full Width */}
          <img 
            src={roadImage} 
            alt="Learning journey road" 
            className="w-full h-auto object-cover min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]"
          />
          
          {/* Step 1 - Top right area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-[2%] right-[5%] md:right-[8%] lg:right-[12%] w-36 md:w-44 lg:w-52"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${steps[0].color} mb-2`} />
              <div className="h-6 md:h-8 w-0.5 bg-muted-foreground/30 mb-2" />
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">{steps[0].step}</span>
              <h3 className="font-semibold text-foreground text-xs md:text-sm mb-1">{steps[0].title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">{steps[0].description}</p>
            </div>
          </motion.div>

          {/* Step 2 - Upper left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-[15%] left-[5%] md:left-[10%] lg:left-[15%] w-36 md:w-44 lg:w-52"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">{steps[1].step}</span>
              <h3 className="font-semibold text-foreground text-xs md:text-sm mb-1">{steps[1].title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">{steps[1].description}</p>
              <div className="h-6 md:h-8 w-0.5 bg-muted-foreground/30 mt-2" />
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${steps[1].color} mt-2`} />
            </div>
          </motion.div>

          {/* Step 3 - Middle right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-[38%] right-[8%] md:right-[15%] lg:right-[20%] w-36 md:w-44 lg:w-52"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${steps[2].color} mb-2`} />
              <div className="h-6 md:h-8 w-0.5 bg-muted-foreground/30 mb-2" />
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">{steps[2].step}</span>
              <h3 className="font-semibold text-foreground text-xs md:text-sm mb-1">{steps[2].title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">{steps[2].description}</p>
            </div>
          </motion.div>

          {/* Step 4 - Lower left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-[55%] left-[10%] md:left-[18%] lg:left-[22%] w-36 md:w-44 lg:w-52"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">{steps[3].step}</span>
              <h3 className="font-semibold text-foreground text-xs md:text-sm mb-1">{steps[3].title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">{steps[3].description}</p>
              <div className="h-6 md:h-8 w-0.5 bg-muted-foreground/30 mt-2" />
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${steps[3].color} mt-2`} />
            </div>
          </motion.div>

          {/* Step 5 - Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-[75%] right-[15%] md:right-[25%] lg:right-[30%] w-36 md:w-44 lg:w-52"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${steps[4].color} mb-2`} />
              <div className="h-6 md:h-8 w-0.5 bg-muted-foreground/30 mb-2" />
              <span className="text-xl md:text-2xl font-bold text-primary mb-1">{steps[4].step}</span>
              <h3 className="font-semibold text-foreground text-xs md:text-sm mb-1">{steps[4].title}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground">{steps[4].description}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout - Vertical Timeline */}
      <div className="md:hidden px-4">
        <div className="relative flex flex-col items-center">
          {/* Vertical line connector */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 rounded-full" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative z-10 flex items-center gap-4 mb-8 w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <span className="text-lg font-bold text-primary">{step.step}</span>
                <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
              
              <div className="relative flex-shrink-0">
                <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

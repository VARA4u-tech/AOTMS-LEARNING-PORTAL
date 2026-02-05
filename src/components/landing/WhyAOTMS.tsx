import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import logoImage from "@/assets/logo.png";

const WhyAOTMS = () => {
  return (
    <section id="about" className="bg-muted/30 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Why Choose <span className="text-accent">AOTMS?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the future of learning with our innovative platform
            </p>
          </div>
        }
      >
        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl">
          <div className="text-center">
            <img 
              src={logoImage} 
              alt="AOTMS Logo" 
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain mx-auto mb-6" 
            />
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
              AOTMS
            </p>
            <p className="text-muted-foreground mt-4 text-lg md:text-xl max-w-md mx-auto">
              Your Gateway to Excellence in Learning
            </p>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default WhyAOTMS;

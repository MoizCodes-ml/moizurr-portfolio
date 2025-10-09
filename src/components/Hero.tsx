import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-accent text-lg font-medium tracking-wide">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Moiz Ur Rehman
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                ML/AI Engineer | SQA Engineer | Data Analyst
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hi! I'm Moiz, a ML/AI Engineer, SQA Engineer and a Data Analyst specializing in Python, 
              TensorFlow, PyTorch, Hugging Face, Postman API, SQL and Power BI. I bring a unique blend 
              of Data Analysis insight for discovery and rigorous SQA methodology to deliver models that 
              are not only accurate but also reliable, scalable, and fully tested.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-primary transition-all duration-300 group"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-primary">
                <img 
                  src={profilePhoto} 
                  alt="Moiz Ur Rehman - ML/AI Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

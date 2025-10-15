import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "Data Analysis",
      institution: "Institute of Emerging Careers",
      period: "Jun 2025 – Present",
    },
    {
      degree: "Bachelors of Science in Software Engineering",
      institution: "Institute of Management Sciences, Peshawar",
      period: "Oct 2021 – Jun 2025",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about the intersection of artificial intelligence, data analysis, 
              and software quality. My journey combines rigorous academic training with hands-on 
              experience in building, testing, and deploying machine learning models.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What sets me apart is my unique approach: I don't just build AI models—I ensure 
              they're robust, reliable, and ready for real-world deployment. By combining ML/AI 
              expertise with SQA methodologies and data analysis insights, I deliver solutions 
              that are both innovative and dependable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond engineering, I'm also a professional ghostwriter, crafting clear, 
              technically accurate content that bridges the gap between complex technical 
              concepts and accessible communication.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-accent" />
              Education
            </h3>
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <Calendar className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-sm text-accent">{edu.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

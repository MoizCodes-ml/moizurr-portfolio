import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Freelance)",
      company: "Self Employed",
      period: "Sep 2024 – Present",
      description: "Delivered end-to-end AI and data analysis projects, focusing on efficient solutions and tested performance. Built custom ML models and data pipelines for diverse clients.",
    },
    {
      title: "Machine Learning Engineer",
      company: "DevMind",
      period: "Aug 2024 – Mar 2025",
      description: "Contributed to developing and testing ML models, ensuring data reliability and scalability. Implemented robust testing frameworks for model validation.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-slide-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

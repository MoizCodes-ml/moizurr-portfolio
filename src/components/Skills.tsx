import { Code2, Database, Brain, TestTube } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    "Python", "SQL", "Power BI", "PyTorch", "TensorFlow",
    "Packet Tracer", "Jira", "Asana", "Postman", "Multisim", "Hugging Face"
  ];

  const expertise = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Building and deploying cutting-edge ML models with TensorFlow and PyTorch",
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using SQL and Power BI",
    },
    {
      icon: TestTube,
      title: "Software Quality Assurance",
      description: "Ensuring reliability and scalability through rigorous testing methodologies",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        {/* Areas of Expertise */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertise.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="animate-slide-in">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Code2 className="text-accent" />
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-muted border border-border rounded-lg text-foreground font-medium hover:border-primary hover:shadow-card transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

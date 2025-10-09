import { Card } from "@/components/ui/card";
import { ExternalLink, Car, Hand, TestTube2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Car,
      title: "Sunshine Rental Services",
      description: "A full-featured mobile app for Sunshine Passengers and Transport LLC (Dubai), offering purchasing, renting, and leasing vehicles with an integrated recommender system for fair pricing.",
      technologies: ["Mobile Development", "ML Recommender System", "React Native", "Python"],
    },
    {
      icon: Hand,
      title: "Hand Detection Tracker",
      description: "A real-time hand detection and tracking system for gesture-based interaction, with applications in AR/VR interfaces.",
      technologies: ["Computer Vision", "OpenCV", "TensorFlow", "Real-time Processing"],
    },
    {
      icon: TestTube2,
      title: "OrangeHRM Web App Testing",
      description: "Manual, automated, and API testing conducted on a dummy website, focusing on bug detection and quality assurance.",
      technologies: ["Manual Testing", "Automated Testing", "Postman API", "QA Methodology"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-card animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="text-secondary-foreground" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-muted text-accent border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-2 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Card } from "@/components/ui/card";
import { ExternalLink, Car, Hand, ShoppingCart, UtensilsCrossed } from "lucide-react";

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
      icon: ShoppingCart,
      title: "Brazilian E-Commerce by Olist Analysis",
      description: "Analyzed over 100,000 orders from the Brazilian e-commerce platform Olist, focusing on identifying key insights and trends. Developed complex SQL queries and built Power BI dashboards for visualizing sales trends, customer demographics, and product performance.",
      technologies: ["MySQL", "Power BI", "Data Analysis", "SQL"],
      link: "https://github.com/MoizCodes-ml/Brazilian-E-Commerce-by-Olist-Analysis",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Performance Analysis",
      description: "Analyzed a restaurant customers' orders dataset from Kaggle, focusing on extracting key insights to improve business strategies. Built Power BI dashboards for visualizing key metrics like customer orders, monthly sales trends, and member totals.",
      technologies: ["MySQL", "Power BI", "Data Analysis", "Excel"],
      link: "https://github.com/MoizCodes-ml/Restaurant-Performance-Analysis",
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
              onClick={() => project.link && window.open(project.link, '_blank')}
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
                
                {project.link && (
                  <div className="pt-2 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View on GitHub</span>
                    <ExternalLink size={16} />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

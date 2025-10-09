import { PenTool } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-primary animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <PenTool className="text-white" size={32} />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  Professional Ghost Writing
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Providing clear, technically accurate, and well-researched ghostwriting for blogs, 
                  documentation, and analytical reports — blending storytelling with data insight.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Technical blog posts and articles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Software documentation and API guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Data analysis reports and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Research papers and white papers</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

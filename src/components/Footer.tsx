import { Mail, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Moiz Ur Rehman
            </h3>
            <p className="text-muted-foreground">
              ML/AI Engineer | SQA Engineer | Data Analyst
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:urrehman.moiz22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:03479879498"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/moizur-rehman0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} Moiz Ur Rehman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

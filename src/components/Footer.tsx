import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', href: 'mailto:alex@example.com' },
  ];

  const quickLinks = [
    { label: 'About', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Gallery', href: '#gallery' },
  ];

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: 'alex.johnson@email.com' },
    { icon: <Phone className="h-4 w-4" />, text: '+1 (555) 123-4567' },
    { icon: <MapPin className="h-4 w-4" />, text: 'San Francisco, CA' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Alex Johnson</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Passionate full-stack developer creating innovative web solutions. 
              Always learning, always building, always pushing the boundaries of what's possible.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={link.href} aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <Button className="btn-hero">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Alex Johnson. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="mx-1 h-4 w-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-muted">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Alex Johnson</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about creating beautiful, functional web experiences that solve real-world problems. 
              I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-hero">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button className="btn-outline-hero">
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="p-2">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="fade-in flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-custom-xl">
                <img
                  src={profileImage}
                  alt="Alex Johnson - Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
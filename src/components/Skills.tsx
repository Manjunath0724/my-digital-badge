import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'Next.js', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'FastAPI', level: 75, category: 'Backend' },
    { name: 'Python', level: 78, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'Git/GitHub', level: 92, category: 'Tools' },
    { name: 'Docker', level: 65, category: 'Tools' },
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [...new Set(technicalSkills.map(skill => skill.category))];

  return (
    <section id="skills" className="section-padding bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {categories.map((category) => (
                <Card key={category} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {technicalSkills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress
                            value={isVisible ? skill.level : 0}
                            className="skill-progress h-2"
                          />
                        </div>
                      ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="p-3 text-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Summary */}
            <Card className="card-hover mt-8">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">8+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
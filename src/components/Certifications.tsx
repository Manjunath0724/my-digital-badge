import { Calendar, Building, ExternalLink, Award, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      status: 'Active',
      credentialId: 'AWS-SAA-2023-001',
      description: 'Validates expertise in designing distributed systems on AWS',
      logo: '☁️',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
      link: '#',
    },
    {
      title: 'Meta Frontend Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: 'January 2023',
      status: 'Active',
      credentialId: 'META-FE-2023-456',
      description: 'Professional certificate in modern frontend development',
      logo: '📱',
      skills: ['React', 'JavaScript', 'UI/UX', 'Web Performance'],
      link: '#',
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'November 2022',
      status: 'Active',
      credentialId: 'GCP-PD-2022-789',
      description: 'Expertise in building scalable applications on Google Cloud',
      logo: '🌐',
      skills: ['GCP Services', 'Kubernetes', 'CI/CD', 'Monitoring'],
      link: '#',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'September 2022',
      status: 'Active',
      credentialId: 'MDB-DEV-2022-123',
      description: 'Proficiency in MongoDB database development and optimization',
      logo: '🍃',
      skills: ['NoSQL', 'Database Design', 'Aggregation', 'Performance'],
      link: '#',
    },
  ];

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'TechCorp Solutions',
      period: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Leading frontend development for enterprise web applications using React and TypeScript.',
      achievements: [
        'Improved app performance by 40% through optimization',
        'Led migration from JavaScript to TypeScript',
        'Mentored 3 junior developers',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      role: 'Web Development Intern',
      company: 'StartupXYZ',
      period: 'Jun 2022 - Dec 2022',
      location: 'Remote',
      type: 'Internship',
      description: 'Developed and maintained multiple client websites using modern web technologies.',
      achievements: [
        'Built 5 responsive websites from scratch',
        'Implemented automated testing suites',
        'Collaborated with design team on UI/UX improvements',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and work experience that validate my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-hover fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">{cert.logo}</div>
                        <div>
                          <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Building className="h-4 w-4" />
                            <span className="text-sm">{cert.issuer}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={cert.status === 'Active' ? 'default' : 'secondary'}
                        className="ml-2"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {cert.date}
                        </div>
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-sm">Skills Validated:</h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Verify Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-hover fade-in">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{exp.role}</CardTitle>
                        <div className="text-muted-foreground">
                          <div className="flex items-center mt-1">
                            <Building className="mr-1 h-4 w-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-1">
                          {exp.type}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-sm">{exp.description}</p>

                      <div>
                        <h4 className="font-medium mb-2 text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <CheckCircle className="mr-2 h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
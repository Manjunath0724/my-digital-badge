import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2019 - 2023',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering, algorithms, and web development.',
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering'],
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'Lambda School',
      location: 'Remote',
      period: '2023',
      gpa: 'Graduated with Honors',
      description: 'Intensive 6-month program covering modern web development technologies.',
      courses: ['React.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    },
  ];

  const relevantCourses = [
    'Advanced JavaScript',
    'React Development',
    'Backend API Design',
    'Database Management',
    'Cloud Computing',
    'DevOps Fundamentals',
    'UI/UX Design',
    'Mobile Development',
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational journey and continuous learning in web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Educational Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover fade-in">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <Badge variant="secondary" className="self-start sm:self-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">GPA/Achievement:</span>
                        <Badge variant="outline" className="bg-accent/10 text-accent">
                          {edu.gpa}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                      <div>
                        <h4 className="font-medium mb-2">Key Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <Badge key={course} variant="outline" className="text-xs">
                              {course}
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

          {/* Relevant Courses Sidebar */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Relevant Coursework</h3>
            <Card className="card-hover fade-in">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {relevantCourses.map((course) => (
                    <div
                      key={course}
                      className="p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Philosophy */}
            <Card className="card-hover fade-in mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Learning Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I believe in continuous learning and staying updated with the latest 
                  technologies. My education provides a strong foundation, but I'm always 
                  exploring new tools and methodologies to improve my skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
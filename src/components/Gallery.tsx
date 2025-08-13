import { useState } from 'react';
import { ExternalLink, Filter, Trophy, Code2, Users, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'project',
      type: 'Full Stack',
      image: '🛒',
      description: 'Modern e-commerce platform with React, Node.js, and PostgreSQL',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      achievement: 'Best Project Award',
      link: '#',
    },
    {
      id: 2,
      title: 'Hackathon Winner',
      category: 'hackathon',
      type: 'Competition',
      image: '🏆',
      description: 'First place in TechCrunch Hackathon 2023',
      technologies: ['React Native', 'Firebase', 'ML'],
      achievement: '1st Place - $10k Prize',
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'project',
      type: 'Frontend',
      image: '🌤️',
      description: 'Real-time weather app with beautiful UI and data visualization',
      technologies: ['React', 'Chart.js', 'Weather API'],
      achievement: 'Featured on CodePen',
      link: '#',
    },
    {
      id: 4,
      title: 'Tech Conference Speaker',
      category: 'event',
      type: 'Speaking',
      image: '🎤',
      description: 'Spoke at React Conference 2023 about modern web development',
      technologies: ['React', 'Performance', 'Best Practices'],
      achievement: 'Keynote Speaker',
      link: '#',
    },
    {
      id: 5,
      title: 'Open Source Library',
      category: 'project',
      type: 'Library',
      image: '📚',
      description: 'React component library with 2k+ GitHub stars',
      technologies: ['React', 'TypeScript', 'Storybook'],
      achievement: '2k+ GitHub Stars',
      link: '#',
    },
    {
      id: 6,
      title: 'Coding Contest Winner',
      category: 'contest',
      type: 'Algorithm',
      image: '🥇',
      description: 'Won regional coding competition with optimal algorithms',
      technologies: ['Python', 'Algorithms', 'Data Structures'],
      achievement: 'Regional Champion',
      link: '#',
    },
  ];

  const filters = [
    { id: 'all', label: 'All', icon: <Filter className="h-4 w-4" /> },
    { id: 'project', label: 'Projects', icon: <Code2 className="h-4 w-4" /> },
    { id: 'hackathon', label: 'Hackathons', icon: <Zap className="h-4 w-4" /> },
    { id: 'contest', label: 'Contests', icon: <Trophy className="h-4 w-4" /> },
    { id: 'event', label: 'Events', icon: <Users className="h-4 w-4" /> },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gallery & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects, hackathon wins, coding contests, and tech events
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.icon}
              <span className="ml-2">{filter.label}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item) => (
              <Card key={item.id} className="card-hover fade-in group overflow-hidden">
                <div className="relative">
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-primary flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {item.type}
                    </Badge>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Achievement */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-accent">
                      <Trophy className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{item.achievement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No items found for this category.</p>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">Hackathons Won</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Speaking Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground">Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
import { ExternalLink, Code, Trophy, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Resources = () => {
  const platforms = [
    {
      name: 'LeetCode',
      category: 'Problem Solving',
      icon: '🧩',
      stats: '500+ Problems Solved',
      rank: 'Knight (1800+ rating)',
      description: 'Regular practice in algorithms and data structures',
      link: '#',
      color: 'bg-orange-500',
    },
    {
      name: 'HackerRank',
      category: 'Competitive Programming',
      icon: '🏆',
      stats: '5⭐ in JavaScript',
      rank: 'Gold Badge',
      description: 'Specialized in JavaScript and SQL challenges',
      link: '#',
      color: 'bg-green-500',
    },
    {
      name: 'GitHub',
      category: 'Open Source',
      icon: '🐙',
      stats: '50+ Repositories',
      rank: '200+ Contributions',
      description: 'Active contributor to open source projects',
      link: '#',
      color: 'bg-gray-800',
    },
    {
      name: 'CodePen',
      category: 'Frontend Showcase',
      icon: '✨',
      stats: '25+ Pens',
      rank: '1k+ Hearts',
      description: 'Creative CSS and JavaScript experiments',
      link: '#',
      color: 'bg-purple-500',
    },
    {
      name: 'Stack Overflow',
      category: 'Community',
      icon: '💬',
      stats: '2k+ Reputation',
      rank: 'Bronze Badges',
      description: 'Helping developers solve coding challenges',
      link: '#',
      color: 'bg-orange-600',
    },
    {
      name: 'freeCodeCamp',
      category: 'Learning',
      icon: '🎓',
      stats: '6 Certifications',
      rank: 'Full Stack',
      description: 'Completed comprehensive web development curriculum',
      link: '#',
      color: 'bg-green-600',
    },
  ];

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: 'Top 10% Developer',
      platform: 'HackerRank',
      description: 'Ranked in top 10% globally for JavaScript skills',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Open Source Contributor',
      platform: 'GitHub',
      description: 'Contributed to 15+ popular repositories',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Problem Solver',
      platform: 'LeetCode',
      description: 'Maintained daily solving streak for 180+ days',
    },
  ];

  return (
    <section id="resources" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resources & Platforms</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Platforms where I actively learn, practice, and contribute to the developer community
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform) => (
            <Card key={platform.name} className="card-hover fade-in group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{platform.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{platform.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {platform.category}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Stats:</span>
                      <span className="text-sm text-primary">{platform.stats}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Rank:</span>
                      <span className="text-sm text-accent">{platform.rank}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Visit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-hover fade-in text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <Badge variant="outline" className="mb-3">
                    {achievement.platform}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
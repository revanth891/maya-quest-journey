import { Maya3D } from '@/components/Maya3D';
import { LessonCard } from '@/components/LessonCard';
import { StatsCard } from '@/components/StatsCard';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Zap, 
  Trophy, 
  Target, 
  Clock,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const { toast } = useToast();

  const featuredLessons = [
    {
      title: "Basic Greetings",
      description: "Learn essential English greetings and introductions",
      duration: "15 min",
      difficulty: "Beginner" as const,
      progress: 75,
      stars: 2
    },
    {
      title: "Present Tense Verbs",
      description: "Master present tense in everyday conversations",
      duration: "25 min", 
      difficulty: "Intermediate" as const,
      progress: 30,
      stars: 1
    },
    {
      title: "Business English",
      description: "Professional vocabulary and phrases",
      duration: "35 min",
      difficulty: "Advanced" as const,
      progress: 0,
      isLocked: true
    }
  ];

  const startLesson = (title: string) => {
    toast({
      title: "Lesson Started!",
      description: `Beginning "${title}" - Maya is cheering you on!`,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Maya3D size="large" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="maya-text-gradient">MayaQuest</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master UK English with Maya, your AI learning companion. 
            Interactive lessons, gamified progress, and personalized learning paths.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="maya-button-primary px-8 py-3 text-lg">
              <BookOpen className="mr-2" size={20} />
              Start Learning
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              <Globe className="mr-2" size={20} />
              Choose Language
            </Button>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard
            title="Integration Points"
            value="1,245"
            change="+125"
            changeType="positive"
            icon={<Zap size={20} />}
            color="warning"
          />
          <StatsCard
            title="Current Streak"
            value="7 Days"
            change="+1"
            changeType="positive"
            icon={<Trophy size={20} />}
            color="success"
          />
          <StatsCard
            title="Lessons Completed"
            value="23"
            change="+3"
            changeType="positive"
            icon={<Target size={20} />}
            color="primary"
          />
          <StatsCard
            title="Study Time"
            value="12.5h"
            change="+2.5h"
            changeType="positive"
            icon={<Clock size={20} />}
            color="accent"
          />
        </section>

        {/* Continue Learning */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Continue Learning</h2>
            <Button variant="ghost" className="text-primary hover:text-primary-glow">
              View All Lessons →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLessons.map((lesson, index) => (
              <LessonCard
                key={index}
                {...lesson}
                onClick={() => startLesson(lesson.title)}
              />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="maya-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Quick Practice</h3>
          <p className="text-muted-foreground mb-6">
            Jump into a quick 5-minute practice session
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button className="maya-button-secondary">
              <Users className="mr-2" size={16} />
              Vocabulary Flash Cards
            </Button>
            <Button variant="outline">
              <TrendingUp className="mr-2" size={16} />
              Grammar Quiz
            </Button>
            <Button variant="outline">
              <BookOpen className="mr-2" size={16} />
              Pronunciation Practice
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
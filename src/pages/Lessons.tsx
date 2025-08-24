import { useState } from 'react';
import { LessonCard } from '@/components/LessonCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Volume2,
  PenTool,
  MessageCircle
} from 'lucide-react';

export default function Lessons() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Lessons', icon: BookOpen },
    { id: 'vocabulary', label: 'Vocabulary', icon: PenTool },
    { id: 'grammar', label: 'Grammar', icon: MessageCircle },
    { id: 'speaking', label: 'Speaking', icon: Volume2 },
    { id: 'conversation', label: 'Conversation', icon: Users }
  ];

  const lessons = [
    {
      title: "Basic Greetings & Introductions",
      description: "Learn how to greet people and introduce yourself",
      duration: "15 min",
      difficulty: "Beginner" as const,
      progress: 100,
      stars: 3,
      category: 'conversation'
    },
    {
      title: "Present Simple Tense",
      description: "Master the present simple tense with practical examples", 
      duration: "25 min",
      difficulty: "Beginner" as const,
      progress: 85,
      stars: 2,
      category: 'grammar'
    },
    {
      title: "Family & Relationships",
      description: "Vocabulary for talking about family members and relationships",
      duration: "20 min",
      difficulty: "Beginner" as const,
      progress: 60,
      stars: 2,
      category: 'vocabulary'
    },
    {
      title: "Present Continuous Tense",
      description: "Learn when and how to use present continuous",
      duration: "30 min",
      difficulty: "Intermediate" as const,
      progress: 40,
      stars: 1,
      category: 'grammar'
    },
    {
      title: "Food & Restaurants",
      description: "Essential vocabulary for dining out and cooking",
      duration: "25 min",
      difficulty: "Intermediate" as const,
      progress: 20,
      stars: 0,
      category: 'vocabulary'
    },
    {
      title: "Pronunciation Workshop",
      description: "Improve your English pronunciation with audio exercises",
      duration: "35 min",
      difficulty: "Intermediate" as const,
      progress: 0,
      category: 'speaking'
    },
    {
      title: "Business Meetings",
      description: "Professional vocabulary and phrases for meetings",
      duration: "40 min",
      difficulty: "Advanced" as const,
      progress: 0,
      isLocked: true,
      category: 'conversation'
    },
    {
      title: "Complex Grammar Structures",
      description: "Advanced grammar patterns and constructions",
      duration: "45 min",
      difficulty: "Advanced" as const,
      progress: 0,
      isLocked: true,
      category: 'grammar'
    }
  ];

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            <span className="maya-text-gradient">English Lessons</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive collection of interactive English lessons
          </p>
        </div>

        {/* Search and Filter */}
        <div className="maya-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search lessons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant={selectedCategory === id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(id)}
                className={`flex items-center space-x-2 ${
                  selectedCategory === id ? 'maya-button-primary' : ''
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson, index) => (
            <LessonCard
              key={index}
              {...lesson}
              onClick={() => console.log(`Starting lesson: ${lesson.title}`)}
            />
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto mb-4 text-muted-foreground" size={48} />
            <h3 className="text-xl font-semibold mb-2">No lessons found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
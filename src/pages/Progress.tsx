import { StatsCard } from '@/components/StatsCard';
import { Maya3D } from '@/components/Maya3D';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Target, 
  Zap, 
  Calendar,
  Award,
  TrendingUp,
  Star,
  Crown,
  Medal,
  Users
} from 'lucide-react';

export default function Progress() {
  const achievements = [
    { 
      title: "First Steps", 
      description: "Complete your first lesson", 
      earned: true, 
      icon: <Target size={20} />,
      date: "2024-01-15"
    },
    { 
      title: "Week Warrior", 
      description: "Study for 7 consecutive days", 
      earned: true, 
      icon: <Calendar size={20} />,
      date: "2024-01-20"
    },
    { 
      title: "Vocabulary Master", 
      description: "Learn 100 new words", 
      earned: true, 
      icon: <Award size={20} />,
      date: "2024-01-22"
    },
    { 
      title: "Grammar Guru", 
      description: "Complete 10 grammar lessons", 
      earned: false, 
      icon: <Star size={20} />,
      progress: 6
    },
    { 
      title: "Speaking Star", 
      description: "Complete 20 speaking exercises", 
      earned: false, 
      icon: <Crown size={20} />,
      progress: 12
    },
    { 
      title: "Monthly Champion", 
      description: "Study every day for a month", 
      earned: false, 
      icon: <Medal size={20} />,
      progress: 7
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', points: 120, lessons: 2 },
    { day: 'Tue', points: 180, lessons: 3 },
    { day: 'Wed', points: 95, lessons: 1 },
    { day: 'Thu', points: 200, lessons: 4 },
    { day: 'Fri', points: 150, lessons: 2 },
    { day: 'Sat', points: 250, lessons: 5 },
    { day: 'Sun', points: 180, lessons: 3 }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 2340, avatar: "🧑‍💻" },
    { rank: 2, name: "Sarah Johnson", points: 2156, avatar: "👩‍🎓" },
    { rank: 3, name: "You", points: 1245, avatar: "🎯", isUser: true },
    { rank: 4, name: "Mike Rodriguez", points: 1198, avatar: "👨‍🏫" },
    { rank: 5, name: "Emma Wilson", points: 1087, avatar: "👩‍💼" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Maya3D size="medium" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Your <span className="maya-text-gradient">Progress</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your learning journey and celebrate achievements
          </p>
        </div>

        {/* Stats Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard
            title="Total Points"
            value="1,245"
            change="+125 this week"
            changeType="positive"
            icon={<Zap size={20} />}
            color="warning"
          />
          <StatsCard
            title="Current Streak"
            value="7 Days"
            change="Personal best!"
            changeType="positive"
            icon={<Trophy size={20} />}
            color="success"
          />
          <StatsCard
            title="Lessons Completed"
            value="23"
            change="+3 this week"
            changeType="positive"
            icon={<Target size={20} />}
            color="primary"
          />
          <StatsCard
            title="Words Learned"
            value="156"
            change="+24 this week"
            changeType="positive"
            icon={<Award size={20} />}
            color="accent"
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Weekly Activity */}
          <div className="lg:col-span-2">
            <div className="maya-card p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                This Week's Activity
              </h3>
              <div className="space-y-4">
                {weeklyProgress.map((day, index) => (
                  <div key={day.day} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-center font-medium">{day.day}</div>
                      <div className="flex-1">
                        <div className="maya-progress-bar w-48">
                          <div 
                            className="maya-progress-fill" 
                            style={{ width: `${(day.points / 250) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{day.points} IP</div>
                      <div className="text-sm text-muted-foreground">{day.lessons} lessons</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="maya-card p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Users className="mr-2" size={20} />
              Weekly Leaderboard
            </h3>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div 
                  key={user.rank}
                  className={`flex items-center justify-between p-3 rounded-xl ${
                    user.isUser ? 'bg-primary/20 border-2 border-primary/50' : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-warning text-warning-foreground' :
                      user.rank === 2 ? 'bg-muted text-muted-foreground' :
                      user.rank === 3 ? 'bg-accent text-accent-foreground' :
                      'bg-card text-card-foreground'
                    }`}>
                      {user.rank}
                    </div>
                    <span className="text-lg">{user.avatar}</span>
                    <span className={`font-medium ${user.isUser ? 'text-primary' : ''}`}>
                      {user.name}
                    </span>
                  </div>
                  <span className="font-semibold">{user.points.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`maya-card p-6 ${
                  achievement.earned ? 'border-success/50 bg-success/5' : 'opacity-75'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    achievement.earned 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {achievement.icon}
                  </div>
                  {achievement.earned && (
                    <div className="text-success font-semibold text-sm">
                      ✓ Earned
                    </div>
                  )}
                </div>
                
                <h4 className="font-bold mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {achievement.description}
                </p>
                
                {achievement.earned ? (
                  <p className="text-xs text-success">
                    Earned on {achievement.date}
                  </p>
                ) : achievement.progress ? (
                  <div>
                    <div className="maya-progress-bar mb-2">
                      <div 
                        className="maya-progress-fill" 
                        style={{ width: `${(achievement.progress / 20) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {achievement.progress} / 20
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button className="maya-button-primary px-8 py-3">
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
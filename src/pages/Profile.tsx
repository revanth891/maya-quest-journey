import { useState } from 'react';
import { Maya3D } from '@/components/Maya3D';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  User, 
  Globe, 
  Target, 
  Settings,
  Edit,
  Flag,
  Calendar,
  Trophy,
  BookOpen,
  Zap
} from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Jordan Smith",
    email: "jordan.smith@email.com",
    nativeLanguage: "Spanish",
    learningGoal: "Business English",
    studyTime: "30 minutes",
    joinDate: "January 2024"
  });

  const languages = [
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' }
  ];

  const goals = [
    "Conversational English",
    "Business English", 
    "Academic English",
    "Travel English",
    "Exam Preparation (IELTS/TOEFL)"
  ];

  const studyTimes = [
    "15 minutes",
    "30 minutes",
    "45 minutes",
    "1 hour",
    "2+ hours"
  ];

  const profileStats = [
    { label: "Days Active", value: "23", icon: <Calendar size={16} /> },
    { label: "Current Streak", value: "7", icon: <Trophy size={16} /> },
    { label: "Lessons Completed", value: "23", icon: <BookOpen size={16} /> },
    { label: "Total Points", value: "1,245", icon: <Zap size={16} /> }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Maya3D size="medium" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Your <span className="maya-text-gradient">Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Customize your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="maya-card p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center">
                  <User className="mr-2" size={24} />
                  Personal Information
                </h2>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2"
                >
                  <Edit size={16} />
                  <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  {isEditing ? (
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  ) : (
                    <p className="text-lg">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                  ) : (
                    <p className="text-lg">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <Globe className="mr-2" size={16} />
                    Native Language
                  </label>
                  {isEditing ? (
                    <select 
                      className="w-full p-2 border border-border rounded-lg bg-background"
                      value={profile.nativeLanguage}
                      onChange={(e) => setProfile({...profile, nativeLanguage: e.target.value})}
                    >
                      {languages.map((lang) => (
                        <option key={lang.code} value={lang.name}>
                          {lang.flag} {lang.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-lg flex items-center">
                      🇪🇸 {profile.nativeLanguage}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <Target className="mr-2" size={16} />
                    Learning Goal
                  </label>
                  {isEditing ? (
                    <select 
                      className="w-full p-2 border border-border rounded-lg bg-background"
                      value={profile.learningGoal}
                      onChange={(e) => setProfile({...profile, learningGoal: e.target.value})}
                    >
                      {goals.map((goal) => (
                        <option key={goal} value={goal}>{goal}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-lg">{profile.learningGoal}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center">
                    <Settings className="mr-2" size={16} />
                    Daily Study Time Goal
                  </label>
                  {isEditing ? (
                    <select 
                      className="w-full p-2 border border-border rounded-lg bg-background"
                      value={profile.studyTime}
                      onChange={(e) => setProfile({...profile, studyTime: e.target.value})}
                    >
                      {studyTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="text-lg">{profile.studyTime} per day</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex space-x-4 pt-4">
                    <Button className="maya-button-primary" onClick={handleSave}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Learning Preferences */}
            <div className="maya-card p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Settings className="mr-2" size={20} />
                Learning Preferences
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Audio Pronunciation</span>
                  <Button variant="outline" size="sm">Enabled</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Daily Reminders</span>
                  <Button variant="outline" size="sm">8:00 AM</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Difficulty Level</span>
                  <Button variant="outline" size="sm">Adaptive</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div>
            <div className="maya-card p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                {profileStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {stat.icon}
                      <span>{stat.label}</span>
                    </div>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="maya-card p-6">
              <h3 className="text-xl font-bold mb-4">Member Since</h3>
              <p className="text-muted-foreground">{profile.joinDate}</p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Current Level</h4>
                <div className="flex items-center space-x-2">
                  <div className="maya-progress-bar flex-1">
                    <div className="maya-progress-fill" style={{ width: '65%' }} />
                  </div>
                  <span className="text-sm font-medium">Level 3</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  350 IP until Level 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Trophy, User, Globe, Zap } from 'lucide-react';
import { Maya3D } from './Maya3D';

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/lessons', icon: BookOpen, label: 'Lessons' },
    { path: '/progress', icon: Trophy, label: 'Progress' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 maya-card mx-4 mt-4">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo and Maya */}
        <div className="flex items-center space-x-4">
          <Maya3D size="small" className="flex-shrink-0" />
          <div>
            <h1 className="text-2xl font-bold maya-text-gradient">MayaQuest</h1>
            <p className="text-sm text-muted-foreground">Learn English with Maya</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive(path)
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>

        {/* User Stats */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3 py-2 bg-warning/20 rounded-xl">
            <Zap size={16} className="text-warning" />
            <span className="font-semibold text-warning-foreground">1,245 IP</span>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 bg-success/20 rounded-xl">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
            <span className="font-semibold text-success-foreground">7 Day Streak</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
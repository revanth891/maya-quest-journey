import { BookOpen, Clock, Star, Lock } from 'lucide-react';

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  isLocked?: boolean;
  stars?: number;
  onClick?: () => void;
}

export const LessonCard = ({
  title,
  description,
  duration,
  difficulty,
  progress,
  isLocked = false,
  stars = 0,
  onClick
}: LessonCardProps) => {
  const difficultyColors = {
    Beginner: 'bg-success/20 text-success-foreground',
    Intermediate: 'bg-warning/20 text-warning-foreground',
    Advanced: 'bg-destructive/20 text-destructive-foreground'
  };

  return (
    <div 
      className={`maya-card p-6 cursor-pointer group animate-slide-up ${
        isLocked ? 'opacity-60' : 'hover:shadow-xl'
      }`}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {isLocked ? (
            <div className="p-2 bg-muted rounded-xl">
              <Lock size={20} className="text-muted-foreground" />
            </div>
          ) : (
            <div className="p-2 maya-button-primary rounded-xl">
              <BookOpen size={20} />
            </div>
          )}
          <div>
            <h3 className="font-bold text-lg group-hover:maya-text-gradient transition-all">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
        
        {stars > 0 && (
          <div className="flex items-center space-x-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < stars ? 'text-warning fill-warning' : 'text-muted-foreground'}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </div>

      {!isLocked && (
        <div className="maya-progress-bar">
          <div 
            className="maya-progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
      
      {!isLocked && progress > 0 && (
        <p className="text-xs text-muted-foreground mt-2">
          {progress}% complete
        </p>
      )}
    </div>
  );
};
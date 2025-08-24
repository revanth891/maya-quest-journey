import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning';
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType, 
  icon, 
  color 
}: StatsCardProps) => {
  const colorMap = {
    primary: 'maya-button-primary',
    secondary: 'maya-button-secondary',
    accent: 'bg-gradient-to-br from-accent to-accent-light text-accent-foreground',
    success: 'bg-gradient-to-br from-success to-success-light text-success-foreground',
    warning: 'bg-gradient-to-br from-warning to-warning-light text-warning-foreground'
  };

  return (
    <div className="maya-card p-6 animate-scale-in">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorMap[color]}`}>
          {icon}
        </div>
        {change && (
          <div className={`flex items-center space-x-1 text-sm ${
            changeType === 'positive' ? 'text-success' : 'text-destructive'
          }`}>
            {changeType === 'positive' ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span>{change}</span>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-1">{value}</h3>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </div>
  );
};
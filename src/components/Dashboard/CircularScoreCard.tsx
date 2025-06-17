import React from 'react';
import {
  ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis
} from 'recharts';
import { cn } from '@/lib/utils';

interface CircularScoreCardProps {
  score: number; // 0-100
  label: string;
  className?: string;
}

const CircularScoreCard: React.FC<CircularScoreCardProps> = ({ score, label, className }) => {
  const chartData = [
    {
      name: 'score',
      value: score,
      fill: 'hsl(var(--primary))',
    },
  ];

  // Determine text color based on theme (assuming dark theme has light primary text)
  const scoreTextColor = 'hsl(var(--card-foreground))'; // Typically white on dark cards
  const labelTextColor = 'hsl(var(--muted-foreground))';
  const trackColor = 'hsl(var(--border))'; // Background track for the radial bar

  return (
    <div className={cn('flex flex-col items-center w-full max-w-[150px]', className)}>
      <div className="relative w-full h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            barSize={12} 
            data={chartData}
            startAngle={210} // Start slightly before 9 o'clock
            endAngle={-30}  // End slightly after 3 o'clock, creating a ~240 degree arc
          >
            <PolarAngleAxis 
              type="number" 
              domain={[0, 100]} 
              angleAxisId={0} 
              tick={false} 
            />
            <RadialBar
              background={{
                fill: trackColor, 
              }}
              dataKey="value"
              cornerRadius={10} // Rounded ends for the bar
              clockWise={true}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ color: scoreTextColor }}
        >
          <span className="text-3xl font-bold">{score}</span>
        </div>
      </div>
      <p className={cn('mt-2 text-sm font-medium', labelTextColor)}>
        {label}
      </p>
    </div>
  );
};

export default CircularScoreCard;

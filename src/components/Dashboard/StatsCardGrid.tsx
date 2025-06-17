import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatDataItem {
  id: string;
  title: string;
  value: string;
  description?: string; 
}

const statsData: StatDataItem[] = [
  { 
    id: 'revenue',
    title: 'Revenue',
    value: '$92,463',
  },
  {
    id: 'production',
    title: 'Production Output',
    value: '315',
  },
  {
    id: 'satisfaction',
    title: 'Customer Satisfaction Score',
    value: '91%',
  },
  {
    id: 'attendance',
    title: 'Employee Attendance',
    value: '96%',
  },
];

interface StatsCardGridProps {
  className?: string;
}

const StatsCardGrid: React.FC<StatsCardGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6', className)}>
      {statsData.map((stat) => (
        <Card key={stat.id} className="bg-card text-card-foreground shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-card-foreground">
              {stat.value}
            </div>
            {stat.description && (
              <p className="text-xs text-muted-foreground pt-1">
                {stat.description}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCardGrid;
